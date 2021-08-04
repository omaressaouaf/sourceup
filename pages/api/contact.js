import nodemailer from "nodemailer";
import { contactBodyIsValid, generateEmailHtml } from "../../global/helpers";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).json({ message: "Not Found" });
  if (!contactBodyIsValid(req.body)) return res.status(401).json({ message: "Bad Request" });

  const { name, phone, email, subject, message, services } = req.body;

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transport.sendMail({
      replyTo: email,
      to: process.env.MAIL_USERNAME,
      subject: `SourceUp Website Contact ${subject ? ": " + subject : ""}`,
      html: generateEmailHtml(name, phone, email, subject, message, services),
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
