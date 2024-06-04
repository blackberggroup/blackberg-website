import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.TO_EMAIL,
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
