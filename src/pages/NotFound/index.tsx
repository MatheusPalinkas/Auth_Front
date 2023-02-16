import { Image, Container, MessageWithLink } from "./styles";
import imgNotFound from "../../assets/notFound.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container>
      <Image src={imgNotFound} alt="" />
      <MessageWithLink>
        <Link to="/login">Voltar para o login</Link>
      </MessageWithLink>
    </Container>
  );
};
