import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASS,
    },
  });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.OUTLOOK_USER,
      to: process.env.TO_EMAIL,
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message.', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
