import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendConfirmationEmail = async (firstName, email) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = { name: "Blackberg Group", email: process.env.FROM_EMAIL };
  sendSmtpEmail.to = [{ email, name: firstName }];
  sendSmtpEmail.subject = "Confirmation: We received your message";
  sendSmtpEmail.textContent = `Hi ${firstName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nBlackberg Group`;
  sendSmtpEmail.htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Submission</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff; }
        .container { width: 100%; padding: 20px; background-color: #006154; text-align: center; }
        .content-container { width: 100%; padding: 0 24px; }
        .logo { max-width: 100px; margin: 0 auto; }
        h1 { margin: 8px 0 32px 0; font-weight: 800; line-height: 1.2; font-size: 40px; }
        .content { padding: 24px; margin: 0 auto 48px auto; max-width: 600px; border-radius: 16px; }
        .footer { background-color: #f4f4f4; color: #000; padding: 10px; text-align: center; }
      </style>
    </head>
    <body>
      <header class="container">
        <img src="https://images.squarespace-cdn.com/content/v1/64a6300edc817f7f09b1e5c8/2949af8f-2922-403b-9e54-175f9205bb1b/BlackbergGroup-HORIZ-White-cmyk.png?format=1500w" alt="Blackberg Group Logo" class="logo">
      </header>
      <div class="content-container">
        <h1>Website Inquiry</h1>
        <div class="content">
          <p>Hi ${firstName},</p>
          <p>Thank you for reaching out to Blackberg Group. We have received your message and will get back to you shortly.</p>
          <p>Best Regards,</p>
          <p>The Blackberg Team</p>
        </div>
      </div>
      <footer class="footer">© 2025 Blackberg Group</footer>
    </body>
    </html>
  `;

  await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { firstName, lastName, email, message } = req.body;

  try {
    // send email to site owner
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { name: "Blackberg Group", email: process.env.FROM_EMAIL };
    sendSmtpEmail.to = [{ email: process.env.TO_EMAIL, name: "Site Owner" }];
    sendSmtpEmail.subject = "Blackberg Group Contact Submission";
    sendSmtpEmail.textContent = message;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"></head>
      <body>
        <div class="container" style="background:#006154; text-align:center; padding:20px;">
          <img src="https://media.graphassets.com/fewGeepUSiyc9dE0lipa" alt="Blackberg Group Logo" style="max-width:100px;" />
        </div>
        <div style="max-width:600px;margin:auto;padding:24px;">
          <h1>Website Inquiry</h1>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        </div>
        <footer style="background:#f4f4f4;padding:10px;text-align:center;">
          © 2025 Blackberg Group
        </footer>
      </body>
      </html>
    `;

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // send confirmation to user
    await sendConfirmationEmail(firstName, email);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Brevo error:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send message." });
  }
}
