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