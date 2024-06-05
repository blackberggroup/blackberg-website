import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
        <meta charset="UTF-8">
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
            background-color: #f4f4f4;
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
          .label {
            text-transform: uppercase;
            color: #006154;
            font-size: 14px;
            margin: 0;
            padding: 0;
            line-height: 1;
          }
          h1 {
            font-size: 32px;
            padding: 0;
            margin: 8px 0 32px 0;
            line-height: 1;
          }
          .content-headline {
            margin: 48px auto 0 auto;
            max-width: 600px;
            padding:0 24px;
          }
          .content {
            background-color: #fff;
            padding: 24px;
            margin: 0 auto 48px auto;
            max-width: 600px;
            border-radius: 16px;
          }
          .footer {
            background-color: #006154;
            color: #fff;
            padding: 10px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="https://images.squarespace-cdn.com/content/v1/64a6300edc817f7f09b1e5c8/2949af8f-2922-403b-9e54-175f9205bb1b/BlackbergGroup-HORIZ-White-cmyk.png?format=1500w" alt="Blackberg Group Logo" class="logo">
        </div>
        <div class="content-container">
            <div class="content-headline">
                <span class="label">New </span>
                <h1>Website Inquiry</h1>
            </div>
            <div class="content">
            <p><strong>Name:</strong></p>
            <p>${firstName} ${lastName}</p>
            <p><strong>Email:</strong></p>
            <p>${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            </div>
        </div>
        <div class="footer">
          <p><i>Not interested in receiving these emails?</i></p>
          <p>Contact IT</p>
        </div>
      </body>
      </html>
      `,
    };

    try {
      await sgMail.send(msg);
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