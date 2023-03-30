import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandle";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  const phoneString = profile.phone.toString();
  res.json({
    ok: true,
    profile,
    phone: Number(phoneString),
  });
}

export default withApiSession(
  withHandler({ method: "GET", handler, isPrivate: true })
);
