import jwt from "jsonwebtoken";
interface Props {
  _id: string;
  email: string;
}
export const signToken = ({ _id, email }: Props) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWT - Revisar variables de entorno");
  }

  return jwt.sign(
    //payload
    //!No poner datos comprometidos , como claves o cuentas de tarjetas
    { _id, email },
    //Seed
    process.env.JWT_SECRET_SEED,
    //Opciones
    { expiresIn: "30d" }
  );
};

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay semilla de JWT - Revisar variables de entorno");
  }

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET_SEED || "", (err, payload) => {
        if (err) return reject("JWT no es válido");
        const { _id } = payload as { _id: string };
        resolve(_id);
      });
    } catch (err) {
      console.log(err);
      reject("JWT no es valido");
    }
  });
};
