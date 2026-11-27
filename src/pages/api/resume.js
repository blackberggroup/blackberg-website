import SibApiV3Sdk from "sib-api-v3-sdk";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import {
  FIELDS_OF_INTEREST,
  MAX_FIELDS_OF_INTEREST,
  MAX_RESUME_SIZE_BYTES,
  MAX_RESUME_SIZE_MB,
  RESUME_EXTENSIONS,
} from "@/app/lib/config/careers";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const currentYear = new Date().getFullYear();

// User input goes into HTML emails, so it has to be escaped first
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getField = (fields, name, maxLength = 500) => {
  const value = Array.isArray(fields[name]) ? fields[name][0] : fields[name];
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
};

const sendConfirmationEmail = async (firstName, email) => {
  const safeFirstName = escapeHtml(firstName);
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = { name: "Blackberg Group", email: process.env.FROM_EMAIL };
  sendSmtpEmail.to = [{ email, name: firstName }];
  sendSmtpEmail.subject = `Thank you for your interest in Blackberg Group`;
  sendSmtpEmail.textContent = `Hi ${firstName},\n\nThank you for your interest in Blackberg Group! We’ve received your information and will keep it on file. If a position opens that fits your background, we’ll be in touch.\n\nBest regards,\nThe Blackberg Team`;
  sendSmtpEmail.htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume Submission</title>
      <style>
          * {
              box-sizing: border-box;
          }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #fff;
        }
        .container {
          width: 100%;
          padding: 20px;
          background-color: #006154;
          text-align: center;
        }
        .content-container {
          width: 100%;
          padding: 0 24px;
        }
        .logo {
          max-width: 100px;
          margin: 0 auto;
        }
        h1 {
          padding: 0;
          margin: 8px 0 32px 0;
          font-weight: 800;
          line-height: 1.2;
          font-size: 40px;
        }
        .content-headline {
          margin: 48px auto 0 auto;
          max-width: 600px;
          padding:0 24px;
          text-align: center;
        }
        .content {
          padding: 24px;
          margin: 0 auto 48px auto;
          max-width: 600px;
          border-radius: 16px;
        }
        .label {
            font-weight: 300;
            letter-spacing: 3px;
            padding-bottom: 0;
            display: inline-block;
            position: relative;
            text-transform: uppercase;
            z-index: 1;
            padding-bottom: 0;
        }
        .footer {
          background-color: #f4f4f4;
          color: #000;
          padding: 10px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <header class="container">
        <img src="https://images.squarespace-cdn.com/content/v1/64a6300edc817f7f09b1e5c8/2949af8f-2922-403b-9e54-175f9205bb1b/BlackbergGroup-HORIZ-White-cmyk.png?format=1500w" alt="Blackberg Group Logo" class="logo">
      </header>
      <div class="content-container">
          <div class="content-headline">
              <span class="label">Thank You</span>
              <h1>Resume Submission</h1>
          </div>
          <div class="content">
            <p>Hi ${safeFirstName},</p>
            <p>Thank you for your interest in Blackberg Group! We’ve received your information and will keep it on file. If a position opens that fits your background, we’ll be in touch.</p>
            <p>Best Regards,</p>
            <p>The Blackberg Team</p>
          </div>
      </div>
      <footer class="footer">
        <p>© ${currentYear} Blackberg Group</p>
      </footer>
    </body>
    </html>
  `;

  await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req) => {
  const form = formidable({
    multiples: false,
    maxFiles: 1,
    maxFileSize: MAX_RESUME_SIZE_BYTES,
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

const parseInterests = (fields) => {
  let selected = [];

  try {
    selected = JSON.parse(getField(fields, "interests", 1000) || "[]");
  } catch (error) {
    selected = [];
  }

  if (!Array.isArray(selected)) {
    return [];
  }

  // Only accept the options the form offers
  return FIELDS_OF_INTEREST.filter((interest) => selected.includes(interest));
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  let fields;
  let files;

  try {
    ({ fields, files } = await parseForm(req));
  } catch (error) {
    // formidable: 1009 = file too large, 1016 = total size too large
    if (error.httpCode === 413 || error.code === 1009 || error.code === 1016) {
      return res.status(413).json({ error: `Your file is too large. Please upload a file up to ${MAX_RESUME_SIZE_MB} MB.` });
    }
    console.error("UPLOAD Error:", error.message);
    return res.status(400).json({ error: "File upload failed. Please try again." });
  }

  const file = Array.isArray(files.resume) ? files.resume[0] : files.resume;
  const cleanUp = () => {
    if (file?.filepath) {
      fs.promises.unlink(file.filepath).catch(() => {});
    }
  };

  try {
    // Honeypot: bots fill this in. Pretend it worked and send nothing.
    if (getField(fields, "extraInfo")) {
      return res.status(200).json({ message: "Message sent successfully!" });
    }

    const firstName = getField(fields, "firstName", 100);
    const lastName = getField(fields, "lastName", 100);
    const email = getField(fields, "email", 200);
    const phone = getField(fields, "phone", 40);
    const linkedin = getField(fields, "linkedin", 300);
    const message = getField(fields, "message", 2000);
    const otherInterest = getField(fields, "otherInterest", 100);
    // Only sent by the archived per-job form (src/app/archive/careers)
    const position = getField(fields, "position", 200);
    const consent = getField(fields, "consent") === "true";
    const interests = parseInterests(fields);

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "Please fill in your first name, last name, and email." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    if (linkedin && !/^https?:\/\//i.test(linkedin)) {
      return res.status(400).json({ error: "Please enter your LinkedIn URL starting with https://" });
    }

    if (interests.length > MAX_FIELDS_OF_INTEREST) {
      return res.status(400).json({ error: `Please select up to ${MAX_FIELDS_OF_INTEREST} fields of interest.` });
    }

    if (interests.includes("Other") && !otherInterest) {
      return res.status(400).json({ error: "Please tell us your field of interest." });
    }

    if (!position && !consent) {
      return res.status(400).json({ error: "Please agree to let us keep your information on file." });
    }

    if (!file) {
      return res.status(400).json({ error: "Please attach your resume." });
    }

    const extension = path.extname(file.originalFilename || "").toLowerCase();

    if (!RESUME_EXTENSIONS.includes(extension)) {
      return res.status(400).json({ error: "Invalid file type. Please upload a PDF, DOC, or DOCX file." });
    }

    const interestLabels = interests.map((interest) =>
      interest === "Other" ? `Other: ${otherInterest}` : interest
    );
    const interestText = interestLabels.length > 0 ? interestLabels.join(", ") : "Not specified";
    const fullName = `${firstName} ${lastName}`;
    const subjectDetail = position || (interestLabels.length > 0 ? interestLabels.join(", ") : "General Interest");
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });

    const textLines = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      position ? `Position: ${position}` : `Field of interest: ${interestText}`,
      `LinkedIn: ${linkedin || "Not provided"}`,
      `Message: ${message || "None"}`,
      position ? null : `Consent to keep information on file: Yes (${submittedAt} ET)`,
    ].filter(Boolean);

    // Read the uploaded file
    const fileContent = await fs.promises.readFile(file.filepath);

    // Create the email message with attachment
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { name: "Blackberg Group", email: process.env.FROM_EMAIL };
    sendSmtpEmail.to = [{ email: process.env.TO_EMAIL_CAREERS, name: "Careers" }];
    sendSmtpEmail.replyTo = { email, name: fullName };
    sendSmtpEmail.subject = `Blackberg Group Resume Submission: ${fullName} (${subjectDetail})`;
    sendSmtpEmail.textContent = textLines.join("\n");
    sendSmtpEmail.htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume Submission</title>
            <style>
              * {
                box-sizing: border-box;
              }
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #fff;
              }
              .content-headline {
                margin: 48px auto 0 auto;
                max-width: 600px;
                padding: 0 24px;
                text-align: center;
              }
              h1 {
                padding: 0;
                margin: 8px 0 32px 0;
                font-weight: 800;
                line-height: 1.2;
                font-size: 40px;
              }
              .label {
                font-weight: 300;
                letter-spacing: 3px;
                padding-bottom: 0;
                display: inline-block;
                position: relative;
                text-transform: uppercase;
                z-index: 1;
                padding-bottom: 0;
              }
              .underline {
                height: 7px;
                width: 120%;
                border-radius: 6px;
                z-index: -1;
                background-color: #b5d334;
                display: block;
                margin-top: -8px;
                margin-left: -10%;
                display: none;
                visibility: hidden;
              }
              .container {
                width: 100%;
                padding: 20px;
                background-color: #006154;
                text-align: center;
              }
              .content-container {
                width: 100%;
                padding: 0 24px;
              }
              .logo {
                max-width: 100px;
                margin: 0 auto;
              }
              .content-headline {
                margin: 48px auto 0 auto;
                max-width: 600px;
                padding: 0 24px;
              }
              .content {
                background-color: #fff;
                padding: 24px;
                margin: 0 auto 48px auto;
                max-width: 600px;
                border-radius: 16px;
              }
              .footer {
                background-color: #f4f4f4;
                color: #000;
                padding: 10px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <img src="https://media.graphassets.com/fewGeepUSiyc9dE0lipa" alt="Blackberg Group Logo" class="logo">
            </div>
            <div class="content-container">
              <div class="content-headline">
                <span class="label">New<span class="underline"></span></span>
                <h1>Resume Submission</h1>
              </div>
              <div class="content">
                <p><b>Name:</b></p>
                <p>${escapeHtml(fullName)}</p>
                <p><b>Email:</b></p>
                <p>${escapeHtml(email)}</p>
                <p><b>Phone:</b></p>
                <p>${escapeHtml(phone) || "Not provided"}</p>
                ${position ? `<p><b>Position:</b></p>
                <p>${escapeHtml(position)}</p>` : `<p><b>Field of Interest:</b></p>
                <p>${escapeHtml(interestText)}</p>`}
                <p><b>LinkedIn:</b></p>
                <p>${escapeHtml(linkedin) || "Not provided"}</p>
                <p><b>Message:</b></p>
                <p>${escapeHtml(message) || "None"}</p>
                ${position ? "" : `<p><b>Consent to keep information on file:</b></p>
                <p>Yes (${escapeHtml(submittedAt)} ET)</p>`}
              </div>
            </div>
            <div class="footer">
              <p><i>Not interested in receiving these emails?</i> | <b>Contact IT</b></p>
              <p>© ${currentYear} Blackberg Group</p>
            </div>
          </body>
          </html>
        `;

    // Attachment
    sendSmtpEmail.attachment = [
      {
        content: fileContent.toString("base64"),
        name: file.originalFilename,
      },
    ];

    // Send the email to the careers inbox
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Send the confirmation email to the applicant. The submission already reached the
    // careers inbox, so a failure here should not show the applicant an error.
    try {
      await sendConfirmationEmail(firstName, email);
    } catch (error) {
      console.error("CONFIRMATION MAIL Error:", error.message);
    }

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("MAIL Error:", error.message);
    console.error("STACK TRACE:", error.stack);
    if (error.response) {
      console.error("ERROR RESPONSE BODY:", error.response.body);
    }
    return res.status(500).json({
      error: "Failed to send message. Please check your input or try again later.",
    });
  } finally {
    cleanUp();
  }
}
