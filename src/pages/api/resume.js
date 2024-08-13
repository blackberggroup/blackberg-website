import sgMail from '@sendgrid/mail';
import formidable from 'formidable'
import fs from 'fs';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendConfirmationEmail = async (firstName, email) => {
  const msgToUser = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: `Confirmation: We received your resume`,
    text: `Hi ${firstName},\n\nThank you for reaching out to us. We have received your resume and will get back to you shortly.\n\nBest regards,\nBlackberg Group`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Submission</title>
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
            <p>Hi ${firstName},</p>
            <p>Thank you for reaching out to Blackberg Group. We have received your resume and will get back to you shortly.</p>
            <p>Best Regards,</p>
            <p>The Blackberg Team</p>
          </div>
      </div>
      <footer class="footer">
        <p>© 2024 Blackberg Group</p>
      </footer>
    </body>
    </html>
    `,
  };

  await sgMail.send(msgToUser);
};

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function POST(req, res) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { firstName, lastName, email, message, position } = fields;
      const file = files.resume && files.resume[0]; 

      try {
        // Read the uploaded file
        const fileContent = fs.readFileSync(file.filepath);

        // Create the email message with attachment
        const msg = {
          to: process.env.TO_EMAIL_CAREERS,
          from: process.env.FROM_EMAIL,
          subject: `Blackberg Group Resume Submission`,
          text: message[0],
          html: `
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
                <p>${firstName} ${lastName}</p>
                <p><b>Email:</b></p>
                <p>${email}</p>
                <p><b>Phone:</b></p>
                <p>${fields.phone}</p>
                <p><b>Position:</b></p>
                <p>${position}</p>
                <p><b>Message:</b></p>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              <p><i>Not interested in receiving these emails?</i> | <b>Contact IT</b></p>
              <p>© 2024 Blackberg Group</p>
            </div>
          </body>
          </html>
          `,
          attachments: [
            {
              content: fileContent.toString('base64'),
              filename: file.originalFilename,
              type: file.mimetype,
              disposition: 'attachment',
            },
          ],
        };

        // Send the email to the recipient
        await sgMail.send(msg);

        // Send the confirmation email to the user
        await sendConfirmationEmail(firstName, email);

        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        // Log the error message and stack trace for debugging
        console.error('MAIL Error:', error.message);
        console.error('STACK TRACE:', error.stack);
      
        // Check if the error has a response and response body
        if (error.response) {
          console.error('ERROR RESPONSE BODY:', error.response.body);
        }
      
        // Return a more detailed error message to the client
        res.status(500).json({
          error: 'Failed to send message. Please check your input or try again later.',
          details: error.message,  // Optional: Include this in development for more context
        });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}