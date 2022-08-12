import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models";
import bcryp from "bcryptjs";
import { db } from "../../../database";
import { jwt, validations } from "../../../utils";

type Data =
  | {
      message: string;
    }
  | {
      token: string;
      user: {
        email: string;
        role: string;
        name: string;
      };
    };

interface Ibody {
  email: string;
  password: string;
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return registerUser(req, res);

    default:
      break;
  }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "", password = "", name = "" } = req.body as Ibody;
  await db.connect();
  const user = await User.findOne({ email });

  if (password.length < 6) {
    return res.status(400).json({
      message: "La contraseña debe de ser de 6 caracteres",
    });
  }
  if (name.length < 2) {
    return res.status(400).json({
      message: "Nombre demasiado corto",
    });
  }
  //TODO: Crear validacion de email
  if (!validations.isValidEmail(email)) {
    return res.status(400).json({ message: "EL correo no cuenta con un formato valido" });
  }
  if (user) {
    await db.disconnect();
    return res.status(400).json({ message: "EL correo ya ha sido registrado" });
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcryp.hashSync(password),
    role: "client",
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Revisar logs de servidor" });
  }

  const { _id, role } = newUser;
  const token = jwt.signToken({ _id, email });
  return res.status(200).json({
    token: token,
    user: {
      email,
      role,
      name,
    },
    message: "Acceso Autorizado:",
  });
};
