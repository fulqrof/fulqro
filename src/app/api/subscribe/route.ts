import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 },
      );
    }

    const emailResult = await resend.emails.send({
      from: "FULQRO <onboarding@resend.dev>",
      to: email,
      subject: "You're on the list.",
      text: "We'll be in touch before anyone else. FULQRO",
    });

    if (emailResult.error) {
      return NextResponse.json(
        { success: false, error: emailResult.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
