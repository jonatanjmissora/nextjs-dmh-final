export type UserDataTypes = {
  id: number;
  firstname: string;
  lastname: string;
  dni: number;
  email: string
  phone: string;
  error: string;
}

export type DecodeTokenTypes = {
  username: string;
  email: string;
  exp: number;
}

export type UserEditDataTypes = {
  firstname: string;
  lastname: string;
  email: string
  phone: string;
}