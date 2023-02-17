import { useCallback, useEffect, useState } from "react";
import { IJwt } from "../interfaces/IJwt";
import { getJwt } from "../services/jwtServices";

type typeJwtToken = string | null | undefined;

export function useJwt() {
  const initialValue: IJwt = {
    aud: "",
    email: "",
    exp: 0,
    iat: 0,
    iss: "",
    jti: "",
    name: "",
    nbf: 0,
    sub: "",
  };

  const [jwt, setJwt] = useState<IJwt>(initialValue);

  useEffect(() => {
    let currentJwt = getJwt();
    if (currentJwt) setJwt(currentJwt);
  }, []);

  const setJwtValue = useCallback((jwtToken: typeJwtToken = null): void => {
    if (jwtToken != null && jwtToken != undefined) {
      localStorage.setItem("@JWT", jwtToken);
      setJwt(JSON.parse(jwtToken) as IJwt);
    } else {
      localStorage.removeItem("@JWT");
      setJwt(initialValue);
    }
  }, []);

  return { jwt, setJwtValue };
}
