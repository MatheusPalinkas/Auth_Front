export interface IJwt {
  aud: string;
  email: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  sub: string;
}
