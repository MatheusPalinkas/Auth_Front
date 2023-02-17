import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { ViewJson } from "../../components/ViewJson";
import { useJwt } from "../../hooks/useJwt";

import { Container, ContainerJwt } from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useJwt();

  const logout = useCallback(() => {
    setJwt(undefined);
    navigate("/login");
  }, []);

  return (
    <Container>
      <h1>Olá {jwt.name}</h1>

      <ContainerJwt>
        <span>Seu JWT:</span>
        <ViewJson objectJson={jwt} />
      </ContainerJwt>

      <Button onClick={() => logout()}>LogOut</Button>
    </Container>
  );
};
