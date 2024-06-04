import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const msg = {
      to: process.env.TO_EMAIL, // Your email address to receive the message
      from: process.env.FROM_EMAIL, // Your verified SendGrid email address
      subject: `Blackberg Group Contact Submission`,
      text: message,
      html: `
      <p>Name: </p>
      <p>${firstName} ${lastName}</p>
      <p>Email: </p>
      <p>${email}</p>
      <p>Message:</p>
      <p>${message}</p>
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