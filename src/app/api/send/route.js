import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const data  = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [fromEmail],
      subject: subject,
      react: (
        <>
          <p>{email}</p>
          <p>{subject}</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
