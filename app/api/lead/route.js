import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, number, countryCode, projectName, message } = body;
    console.log(body);

    const transporter = nodemailer.createTransport({
      host: "server.mpi.ktv.mybluehostin.me",
      port: 465,
      secure: true,
      auth: {
        user: "info@sumadhurafolium.co",
        pass: "City@12345#",
      },
    });

    const mailOptions = {
      from: `"Website Lead" <${"info@sumadhurafolium.co"}>`,
      to: "tanjim11alam@gmail.com",
      subject: `New Lead - ${projectName || "Website"}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${number}</p>
        <p><strong>Project:</strong> ${projectName}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
