import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, error: "Server email configuration missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const senderEmail = process.env.SENDER_EMAIL || "GUMASTHA Advisory <advisory@gumastha.co.in>";
    
    // Parse owner emails
    const ownerEmails = (process.env.OWNER_EMAILS || "nikhilandcorporates@gmail.com,gumastaindia@gmail.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // 1. Send Notification Email to Owners
    const ownerEmailPromise = resend.emails.send({
      from: senderEmail,
      to: ownerEmails,
      replyTo: email || undefined,
      subject: `🔔 New Client Lead: ${name} — ${service || "General Advisory"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0b0b0f; color: #ffffff; margin: 0; padding: 24px; }
            .card { max-width: 600px; margin: 0 auto; background-color: #121218; border: 1px solid #b88628; border-radius: 8px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #1b160d 0%, #050507 100%); padding: 24px; border-bottom: 2px solid #b88628; text-align: center; }
            .header h1 { font-family: Georgia, serif; font-size: 22px; color: #ffffff; margin: 0 0 6px; letter-spacing: 2px; }
            .header p { color: #b88628; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: bold; }
            .content { padding: 28px 24px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid #22222a; padding-bottom: 12px; }
            .field-label { font-size: 11px; color: #8a8a96; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #ffffff; font-weight: 600; }
            .message-box { background-color: #1a1a24; border-left: 3px solid #b88628; padding: 14px; margin-top: 6px; font-size: 14px; line-height: 1.6; color: #e0e0e8; }
            .actions { display: flex; gap: 12px; margin-top: 24px; }
            .btn-wa { flex: 1; background-color: #25D366; color: #ffffff; text-decoration: none; text-align: center; padding: 12px; border-radius: 6px; font-weight: bold; font-size: 13px; }
            .btn-call { flex: 1; background-color: #b88628; color: #ffffff; text-decoration: none; text-align: center; padding: 12px; border-radius: 6px; font-weight: bold; font-size: 13px; }
            .footer { background-color: #08080c; padding: 16px; text-align: center; font-size: 11px; color: #666672; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>GUMASTHA</h1>
              <p>New Client Enquiry Received</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Client Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Mobile Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #b88628; text-decoration: none;">${phone}</a></div>
              </div>
              ${email ? `
              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #ffffff; text-decoration: none;">${email}</a></div>
              </div>
              ` : ''}
              <div class="field-row">
                <div class="field-label">Service Requested</div>
                <div class="field-value" style="color: #f3e5ab;">${service || "General Tax & Business Consultation"}</div>
              </div>
              ${source ? `
              <div class="field-row">
                <div class="field-label">Lead Origin Source</div>
                <div class="field-value" style="font-size: 13px; color: #8a8a96;">${source}</div>
              </div>
              ` : ''}
              <div class="field-row">
                <div class="field-label">Client Query / Notes</div>
                <div class="message-box">${message || "No custom message provided. Client requested consultation."}</div>
              </div>
              <div class="field-row" style="border: none;">
                <div class="field-label">Received At</div>
                <div class="field-value" style="font-size: 12px; color: #8a8a96; font-weight: normal;">${formattedDate}</div>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                <tr>
                  <td width="48%" style="padding-right: 2%;">
                    <a href="https://wa.me/${cleanPhone}" target="_blank" style="display: block; background-color: #25D366; color: #ffffff; text-decoration: none; text-align: center; padding: 13px; border-radius: 4px; font-weight: bold; font-size: 13px;">
                      💬 Open WhatsApp
                    </a>
                  </td>
                  <td width="48%" style="padding-left: 2%;">
                    <a href="tel:${phone}" style="display: block; background-color: #b88628; color: #ffffff; text-decoration: none; text-align: center; padding: 13px; border-radius: 4px; font-weight: bold; font-size: 13px;">
                      📞 Call Direct
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="footer">
              GUMASTHA • Taxation | IFRS | Business Advisory Services<br/>
              H.No: 47-003, 2nd Floor, Sri Sai Colony, Hyderabad, Telangana 500037
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Send Welcome / Confirmation Email to Client (if client provided email)
    let clientEmailPromise = Promise.resolve(null);
    if (email && email.includes("@")) {
      clientEmailPromise = resend.emails.send({
        from: senderEmail,
        to: [email],
        subject: `Welcome to GUMASTHA | We Received Your Enquiry`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0b0b0f; color: #ffffff; margin: 0; padding: 24px; }
              .card { max-width: 600px; margin: 0 auto; background-color: #121218; border: 1px solid #b88628; border-radius: 8px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #1b160d 0%, #050507 100%); padding: 32px 24px; border-bottom: 2px solid #b88628; text-align: center; }
              .header h1 { font-family: Georgia, serif; font-size: 26px; color: #ffffff; margin: 0 0 6px; letter-spacing: 3px; }
              .header p { color: #b88628; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: bold; }
              .content { padding: 32px 28px; line-height: 1.7; color: #d1d1db; font-size: 14px; }
              .content h2 { font-size: 18px; color: #ffffff; margin-top: 0; }
              .highlight-box { background-color: #1a1a24; border-left: 3px solid #b88628; padding: 16px; margin: 20px 0; font-size: 13px; }
              .btn-wa { display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; font-size: 13px; margin-top: 16px; }
              .footer { background-color: #08080c; padding: 20px; text-align: center; font-size: 11px; color: #777785; line-height: 1.6; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>GUMASTHA</h1>
                <p>Taxation | IFRS | Business Advisory Services</p>
              </div>
              <div class="content">
                <h2>Dear ${name},</h2>
                <p>
                  Thank you for reaching out to <strong>GUMASTHA</strong>. We have received your consultation request regarding 
                  <strong style="color: #f3e5ab;">${service || "our corporate & taxation advisory"}</strong>.
                </p>
                <p>
                  Our senior advisory desk based in Hyderabad has been notified. One of our experts will review your submission and reach out to you shortly on <strong>${phone}</strong>.
                </p>

                <div class="highlight-box">
                  <div style="font-size: 11px; color: #8a8a96; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Your Enquiry Summary</div>
                  <div>• <strong>Service:</strong> ${service || "General Advisory"}</div>
                  <div>• <strong>Contact Number:</strong> ${phone}</div>
                  ${message ? `<div>• <strong>Query:</strong> "${message}"</div>` : ''}
                </div>

                <p>
                  Need immediate assistance? You can connect with our senior advisor directly on WhatsApp right now:
                </p>

                <div style="text-align: center; margin: 20px 0;">
                  <a href="https://wa.me/919133235818?text=Hello%20GUMASTHA%2C%20I%20just%20submitted%20an%20enquiry%20under%20the%20name%20${encodeURIComponent(name)}." class="btn-wa">
                    💬 Connect on WhatsApp (+91 91332 35818)
                  </a>
                </div>

                <p style="margin-top: 24px; border-top: 1px solid #22222c; padding-top: 16px; font-size: 13px; color: #9a9ab0;">
                  Warm regards,<br/>
                  <strong style="color: #ffffff;">Executive Advisory Desk</strong><br/>
                  GUMASTHA • The Accountant<br/>
                  Hyderabad, Telangana
                </p>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} GUMASTHA • All Rights Reserved.<br/>
                H.No: 47-003, 2nd Floor, Above Kaira, Sri Sai Colony, Hyderabad 500037<br/>
                Helpline: +91 91332 35818 / +91 7416 414 358 | Email: advisory@gumastha.co.in
              </div>
            </div>
          </body>
          </html>
        `,
      });
    }

    const [ownerResult, clientResult] = await Promise.all([
      ownerEmailPromise,
      clientEmailPromise,
    ]);

    return NextResponse.json({
      success: true,
      ownerEmailId: ownerResult?.data?.id,
      clientEmailId: clientResult?.data?.id,
    });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
