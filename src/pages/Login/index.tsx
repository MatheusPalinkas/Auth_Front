import { Link, useNavigate } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ILogin } from "../../interfaces/ILogin";

import {
  // Form,
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgLogin from "../../assets/ilustracaoLogin.png";
import { useCallback, useContext } from "react";
import { login } from "../../services/oauthService";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { Form } from "../../components/Form";

export const Login = () => {
  const navigate = useNavigate();

  const { toggleLoading } = useContext(LoadingContext) as ILoadingContext;

  //#region Form
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
      toggleLoading();
      login(values)
        .then(() => {
          toggleLoading();
          navigate("/home");
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
        <h1>Faça o Login</h1>
        <Form
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Input label="Email de login" name="email" type="text" />
          <Input label="Senha" name="senha" type="password" />

          <Button type="submit">Entrar</Button>
        </Form>

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
