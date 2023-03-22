import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandle";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  let user;
  user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "익명",
      ...payload,
    },
    update: {},
  });

  console.log(user);
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (user) console.log("found it.");
  //   if (!user) {
  //     console.log("did not find");
  //     user = await client.user.create({
  //       data: {
  //         name: "익명",
  //         email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log("found it.");
  //   if (!user) {
  //     console.log("did not find");
  //     user = await client.user.create({
  //       data: {
  //         name: "익명",
  //         phone: +phone,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  res.status(200).end();
}

export default withHandler("POST", handler);
