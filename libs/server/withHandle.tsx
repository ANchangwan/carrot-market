import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequestiRequest, res: NextApiResponseApiResponse) => void
) {
  return async function (
    req: NextApiRequestiRequest,
    res: NextApiResponseApiResponse
  ) {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
