import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
import { Product } from "../../models";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Sin acceso a este API" });
  }
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);
  res.status(200).json({ message: "Proceso Realizado correctamente" });
}