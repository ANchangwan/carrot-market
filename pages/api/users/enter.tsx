import twilio from "twilio";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandle";

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  // const token = await client.token.create({
  //   data: {
  //     payload: "1234",
  //     user: {
  //       connectOrCreate: {
  //         where: {
  //           ...user,
  //         },
  //         create: {
  //           name: "익명",
  //           ...user,
  //         },
  //       },
  //     },
  //   },
  // });
  if (phone) {
    const message = await twilioClient.messages.create({
      // messagingServiceSid: process.env.TWILIO_SID,
      to: process.env.PHONE!,
      from: "+14344045601",
      body: `YOUR LOGIN TOKEN IS ${payload}`,
    });
    console.log(message);
  } else if (email) {
    const email = await mail.send({
      from: "ssdii44@naver.com",
      to: "ssdii44@naver.com",
      subject: "확인 메일",
      text: `인증번호 ${payload}`,
      html: `<strong>인증번호 ${payload}</strong>`,
    });
    console.log(email);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
