// Optional secure email endpoint. Install express, nodemailer and dotenv before use.
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
app.use(express.json({limit:'20kb'}));
app.post('/api/contact', async (req,res) => {
  const {name,email,type,budget,message} = req.body || {};
  if (![name,email,type,message].every(v => typeof v === 'string' && v.trim()) ||
      name.length > 120 || email.length > 254 || message.length > 5000 ||
      !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return res.status(400).json({error:'Please provide valid contact details.'});
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
    return res.status(503).json({error:'Email service is not configured.'});
  }
  try {
    const transporter = nodemailer.createTransport({
      host:process.env.SMTP_HOST, port:Number(process.env.SMTP_PORT || 587),
      secure:Number(process.env.SMTP_PORT || 587) === 465,
      auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}
    });
    await transporter.sendMail({
      from:process.env.SMTP_USER, to:process.env.EMAIL_TO,
      replyTo:email, subject:`Portfolio enquiry: ${name}`,
      text:`Name: ${name}\\nEmail: ${email}\\nProject: ${type}\\nBudget: ${budget || 'Not specified'}\\n\\n${message}`
    });
    return res.json({ok:true});
  } catch (err) {
    console.error('Email delivery failed:', err?.message || 'unknown error');
    return res.status(500).json({error:'Could not send your message. Please try WhatsApp.'});
  }
});
app.listen(Number(process.env.PORT || 4000),()=>console.log('Contact server ready'));
