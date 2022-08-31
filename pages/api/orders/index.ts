import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ message: "Example" });
  switch (req.method) {
    case "POST":
      return createOrder(req, res);
    default:
      return res.status(400).json({ message: "Bad request" });
  }
  return res.status(200).json({ message: "Example" });
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {



  
  return res.status(201).json({ message: "Hola orden" });
};
