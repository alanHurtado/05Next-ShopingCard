export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: Role;
  // TODO: agregar createAT y updateAt
  createdAt?: string;
  updatedAt?: string;
}

export type Role = "admin" | "client";
