import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, comments } = body;

    if (!name || !email || !comments) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "dhirajhzp62@gmail.com";
    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${comments}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${comments}</p>
      `,
    };

    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully via Nodemailer:", info.response);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while sending your message." },
      { status: 500 }
    );
  }
}
