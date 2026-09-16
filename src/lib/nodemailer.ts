import nodemailer from "nodemailer";

export function getTransporter() {
  const user = process.env.GMAIL_USER || "dhirajhzp62@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD || "oyjfvrddvuktoplo";
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}
