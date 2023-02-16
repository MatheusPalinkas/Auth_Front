import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IAlterarSenha } from "../../interfaces/IAlterarSenha";

import {
  Form,
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgNovaSenha from "../../assets/ilustracaoNovaSenha.png";
import { useCallback } from "react";

export const AlterarSenha = () => {
  const initialValues: IAlterarSenha = {
    senha: "",
    confirmarSenha: "",
  };

  const alterarSenhaSchema = Yup.object().shape({
    senha: Yup.string().required("Campo obrigatório"),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref("senha")], "Senhas não correspondem")
      .required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: IAlterarSenha, actions: FormikHelpers<IAlterarSenha>) => {
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
        <h1>Criar nova senha</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={alterarSenhaSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input label="Nova Senha" name="senha" type="password" />
            <Input
              label="Confirmar nova senha"
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
          Não possui uma conta? <Link to="/registrar">criar uma conta</Link>
        </MessageWithLink>
      </FormContainer>
      <ImgContainer>
        <Image src={imgNovaSenha} alt="" />
      </ImgContainer>
    </Container>
  );
};
