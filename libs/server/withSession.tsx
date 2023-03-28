import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronsessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "carrotsession",
  password: process.env.COOKIE_PS!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
