import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandle";

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
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
