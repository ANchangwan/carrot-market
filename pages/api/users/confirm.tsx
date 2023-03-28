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
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: { payload: token },
  });
  console.log(exists, "exist");
  if (!exists) return res.status(404).end();
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password:
    "12345867897dfksjfnkjenfkwjnfkjnfkjnfsm,dfnwfefwefwefwefwefwefefefefesa.fejfnqkljfnwmfnsdm,fnkefnhqkj",
});
