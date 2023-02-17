import { useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IRecuperarSenha } from "../../interfaces/IRecuperarSenha";

import {
  Image,
  Container,
  Descricao,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgSendEmail from "../../assets/ilustracaoSendEmail.png";
import { modalSucess } from "../../services/modalService";
import { recuperarSenha } from "../../services/oauthService";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { Form } from "../../components/Form";

export const RecuperarSenha = () => {
  const navigate = useNavigate();
  const { toggleLoading } = useContext(LoadingContext) as ILoadingContext;

  //#region Form
  const initialValues: IRecuperarSenha = {
    email: "",
  };

  const recuperarSenhaSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: IRecuperarSenha, actions: FormikHelpers<IRecuperarSenha>) => {
      toggleLoading();
      recuperarSenha(values)
        .then(() => {
          toggleLoading();
          modalSucess(
            "Enviamos um email para a recuperação da senha. \nConfira sua caixa de entrada e o span 😊.",
            "Email enviado",
            () => {
              navigate("/login");
            }
          );
        })
        .catch(() => {
          toggleLoading();
        });
    },
    []
  );
  //#endregion

  return (
    <Container>
      <FormContainer>
        <h1>Recuperar senha</h1>

        <Form
          initialValues={initialValues}
          validationSchema={recuperarSenhaSchema}
          onSubmit={handleSubmit}
        >
          <Descricao>
            Coloque seu email para recuperar a senha. <br />
            Você receberá um email com um link para a criação da nova senha.
          </Descricao>

          <Input label="Email de login" name="email" type="text" />

          <Button type="submit">Recuperar</Button>
        </Form>

        <MessageWithLink>
          Já possui uma conta? <Link to="/login">login</Link>
        </MessageWithLink>

        <MessageWithLink>
          Não possui uma conta? <Link to="/registrar">criar uma conta</Link>
        </MessageWithLink>
      </FormContainer>
      <ImgContainer>
        <Image src={imgSendEmail} alt="" />
      </ImgContainer>
    </Container>
  );
};
