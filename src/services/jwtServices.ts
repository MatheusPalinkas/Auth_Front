import jwt_decode from "jwt-decode";

import { IJwt } from "../interfaces/IJwt";

export const getJwt: () => IJwt | null = () => {
  const jwt = localStorage.getItem("@JWT") || "";

  if (jwt) return jwt_decode(jwt);

  return null;
};

export const checkLogged: () => boolean = () => {
  const jwt = getJwt();

  return jwt != null;
};
