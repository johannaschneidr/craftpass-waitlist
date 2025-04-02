import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstname, email } = await request.json();

    const data = await resend.emails.send({
      from: 'CraftPass <hello@craftpass.co>',
      to: [email],
      subject: "You're on the waitlist!",
      html: `
        <p><strong>Hi, ${firstname}!</strong></p>
        <p>Thank you for joining our waitlist. We can't wait to update you on our launch and other exciting developments.</p>
        <p>Happy crafting, <br>Johanna and the CraftPass team</p>
        <p>--------------------------------------------------------------------------------------------------------------------------------</p>
        <p>If you want to say hello, just reply to this email - we'd love to hear from you <3 </p>
      `
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
