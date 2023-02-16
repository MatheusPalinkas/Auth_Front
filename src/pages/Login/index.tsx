import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ILogin } from "../../interfaces/ILogin";

import {
  Form,
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgLogin from "../../assets/ilustracaoLogin.png";
import { useCallback } from "react";

export const Login = () => {
  const initialValues: ILogin = {
    email: "",
    senha: "",
  };

  const loginSchema = Yup.object().shape({
    senha: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: ILogin, actions: FormikHelpers<ILogin>) => {
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
        <h1>Faça o Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input label="Email de login" name="email" type="text" />
            <Input label="Senha" name="senha" type="text" />

            <Button type="submit">Login</Button>
          </Form>
        </Formik>

        <MessageWithLink>
          Não possui uma conta? <Link to="/registrar">criar uma conta</Link>
        </MessageWithLink>

        <MessageWithLink>
          Esqueceu sua senha? <Link to="/recuperar-senha">recuperar senha</Link>
        </MessageWithLink>
      </FormContainer>
      <ImgContainer>
        <Image src={imgLogin} alt="" />
      </ImgContainer>
    </Container>
  );
};
