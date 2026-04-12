import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function ticketEmail(firstName: string, email: string, faculty: string, level: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your BTW 3.0 Ticket</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:20px;overflow:hidden;border:1px solid rgba(232,160,32,0.25);max-width:600px;width:100%;">

          <!-- Header banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#e8a020 0%,#c47a15 100%);padding:40px 48px 36px;text-align:center;">
              <p style="margin:0 0 8px;color:rgba(0,0,0,0.6);font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">You're registered for</p>
              <h1 style="margin:0;color:#000;font-size:36px;font-weight:900;letter-spacing:-0.02em;text-transform:uppercase;line-height:1;">Bowen Tech Week 3.0</h1>
              <p style="margin:10px 0 0;color:rgba(0,0,0,0.65);font-size:14px;font-weight:600;">The Intersection Advantage</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:40px 48px 0;">
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.5);font-size:13px;">Hey ${firstName},</p>
              <h2 style="margin:0 0 16px;color:#fff;font-size:22px;font-weight:800;">Your spot is confirmed!</h2>
              <p style="margin:0;color:rgba(255,255,255,0.55);font-size:14px;line-height:1.7;">
                We're thrilled to have you join us for the most immersive university tech event in Nigeria.
                Get ready for powerful keynotes, hands-on workshops, and transformational networking.
              </p>
            </td>
          </tr>

          <!-- Ticket box -->
          <tr>
            <td style="padding:32px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid rgba(232,160,32,0.3);border-radius:16px;overflow:hidden;">
                <!-- Ticket header -->
                <tr>
                  <td style="background:rgba(232,160,32,0.08);padding:16px 24px;border-bottom:1px solid rgba(232,160,32,0.15);">
                    <p style="margin:0;color:#e8a020;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Event Ticket</p>
                  </td>
                </tr>
                <!-- Ticket details -->
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:16px;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Attendee</p>
                          <p style="margin:0;color:#fff;font-size:15px;font-weight:700;">${firstName}</p>
                        </td>
                        <td style="padding-bottom:16px;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Email</p>
                          <p style="margin:0;color:#fff;font-size:15px;font-weight:700;">${email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:16px;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Faculty</p>
                          <p style="margin:0;color:#fff;font-size:15px;font-weight:700;">${faculty || "—"}</p>
                        </td>
                        <td style="padding-bottom:16px;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Level</p>
                          <p style="margin:0;color:#fff;font-size:15px;font-weight:700;">${level ? level + "L" : "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Date</p>
                          <p style="margin:0;color:#e8a020;font-size:15px;font-weight:700;">27th April 2026</p>
                        </td>
                        <td style="vertical-align:top;">
                          <p style="margin:0 0 4px;color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Venue</p>
                          <p style="margin:0;color:#e8a020;font-size:15px;font-weight:700;">Bowen University</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Dashed divider -->
                <tr>
                  <td style="padding:0 24px;">
                    <div style="border-top:2px dashed rgba(232,160,32,0.2);"></div>
                  </td>
                </tr>
                <!-- Ticket footer -->
                <tr>
                  <td style="padding:16px 24px;text-align:center;">
                    <p style="margin:0;color:rgba(255,255,255,0.25);font-size:11px;letter-spacing:0.1em;">BTW 3.0 · THE INTERSECTION ADVANTAGE</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What to expect -->
          <tr>
            <td style="padding:0 48px 32px;">
              <p style="margin:0 0 16px;color:rgba(255,255,255,0.5);font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">What to expect</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["Day 1", "Foundation & Learning — NVIDIA DLI Workshop"],
                  ["Day 2", "Industry & Ideas — Keynotes, Panel, Shark Tank"],
                  ["Day 3", "Debate & Networking — Speed Networking"],
                  ["Day 4", "Festival & Celebration — Exhibition, Music, Raffle"],
                ].map(([day, desc]) => `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <span style="color:#e8a020;font-size:13px;font-weight:700;">${day}</span>
                    <span style="color:rgba(255,255,255,0.45);font-size:13px;margin-left:12px;">${desc}</span>
                  </td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.25);font-size:12px;">Organised by NACOS Bowen · Bowen Tech Hub · She Code Africa Bowen · GDG On Campus Bowen</p>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.15);font-size:11px;">© 2026 Bowen Tech Week. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, faculty, level } = body;
  const name = `${firstName} ${lastName}`.trim();

  if (!firstName || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const { error } = await supabase.from("signups").insert({ name, email });

  if (error) {
    console.error("Supabase insert error:", error);
    if (error.code === "23505") {
      return NextResponse.json({ error: "This email is already registered." }, { status: 409 });
    }
    return NextResponse.json({ error: error.message, code: error.code }, { status: 500 });
  }

  // Send ticket email
  try {
    await transporter.sendMail({
      from: `"Bowen Tech Week" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your Ticket to Bowen Tech Week 3.0 is Confirmed!",
      html: ticketEmail(firstName, email, faculty, level),
      text: `Hi ${firstName},\n\nYour spot at Bowen Tech Week 3.0 is confirmed!\n\nDate: 27th April 2026\nVenue: Bowen University\nAttendee: ${firstName}\nEmail: ${email}\n\nGet ready for powerful keynotes, hands-on workshops, and transformational networking.\n\n— Bowen Tech Week Team`,
    });
  } catch (emailError) {
    console.error("Email send error:", emailError);
  }

  return NextResponse.json({ success: true });
}
