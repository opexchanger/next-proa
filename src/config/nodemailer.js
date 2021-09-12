import nodemailer from 'nodemailer';

import { smtp } from './email';

let transporter = nodemailer.createTransport({
  service: "Zoho",
  auth: {
    user: smtp.user,
    pass: smtp.pass
  }
});

export default transporter;