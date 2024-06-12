import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendConfirmationEmail = async (firstName, email) => {
  const msgToUser = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: `Confirmation: We received your message`,
    text: `Hi ${firstName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nBlackberg Group`,
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
              <h1>Website Inquiry</h1>
          </div>
          <div class="content">
            <p>Hi ${firstName},</p>
            <p>Thank you for reaching out to Blackberg Group. We have received your message and will get back to you shortly.</p>
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

export default async function POST(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `Blackberg Group Contact Submission`,
      text: message,
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
            <h1>Website Inquiry</h1>
          </div>
          <div class="content">
            <p><b>Name:</b></p>
            <p>${firstName} ${lastName}</p>
            <p><b>Email:</b></p>
            <p>${email}</p>
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
    };

    try {
      await sgMail.send(msg);
      await sendConfirmationEmail(firstName, email);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.log('MAIL Error:', error.response.body);
      res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}