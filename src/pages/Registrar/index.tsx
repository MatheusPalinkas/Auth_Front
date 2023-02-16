import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IRegistrar } from "../../interfaces/IRegistrar";

import {
  Form,
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgCriarConta from "../../assets/ilustracaoCriarConta.png";
import { useCallback } from "react";

export const Registrar = () => {
  const initialValues: IRegistrar = {
    email: "",
    nome: "",
    senha: "",
    confirmarSenha: "",
  };

  const registrarSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref("senha")], "Senhas não correspondem")
      .required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: IRegistrar, actions: FormikHelpers<IRegistrar>) => {
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
        <h1>Criar Conta</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registrarSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input label="Email para login" name="email" type="text" />
            <Input label="Nome" name="nome" type="text" />
            <Input label="Senha" name="senha" type="password" />
            <Input
              label="Confirmar Senha"
              name="confirmarSenha"
              type="password"
            />

            <Button type="submit">Criar</Button>
          </Form>
        </Formik>

        <MessageWithLink>
          Já possui uma conta? <Link to="/login">login</Link>
        </MessageWithLink>

        <MessageWithLink>
          Esqueceu sua senha? <Link to="/recuperar-senha">recuperar senha</Link>
        </MessageWithLink>
      </FormContainer>
      <ImgContainer>
        <Image src={imgCriarConta} alt="" />
      </ImgContainer>
    </Container>
  );
};
