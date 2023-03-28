import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandle";
import client from "@libs/server/client";

declare module "iron-session" {
  interface IronsessionData {
    user?: {
      id: number;
    };
  }
}

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
    ...profile,
    phone: Number(phoneString),
  });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "carrotsession",
  password:
    "12345867897dfksjfnkjenfkwjnfkjnfkjnfsm,dfnwfefwefwefwefwefwefefefefesa.fejfnqkljfnwmfnsdm,fnkefnhqkj",
});
