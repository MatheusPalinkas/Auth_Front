import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IRecuperarSenha } from "../../interfaces/IRecuperarSenha";

import {
  Form,
  Image,
  Container,
  Descricao,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgSendEmail from "../../assets/ilustracaoSendEmail.png";
import { useCallback } from "react";

export const RecuperarSenha = () => {
  const initialValues: IRecuperarSenha = {
    email: "",
  };

  const recuperarSenhaSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: IRecuperarSenha, actions: FormikHelpers<IRecuperarSenha>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    []
  );

  return (
    <Container>
      <FormContainer>
        <h1>Recuperar senha</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={recuperarSenhaSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Descricao>
              Coloque seu email para recuperar a senha. <br />
              Você receberá um email com um link para a criação da nova senha.
            </Descricao>

            <Input label="Email de login" name="email" type="text" />

            <Button type="submit">Recuperar</Button>
          </Form>
        </Formik>

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
