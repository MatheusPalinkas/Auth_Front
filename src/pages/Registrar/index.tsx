import { Link, useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IRegistrar } from "../../interfaces/IRegistrar";

import {
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgCriarConta from "../../assets/ilustracaoCriarConta.png";
import { useCallback, useContext } from "react";
import { criarConta } from "../../services/oauthService";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { Form } from "../../components/Form";

export const Registrar = () => {
  const navigate = useNavigate();

  const { toggleLoading } = useContext(LoadingContext) as ILoadingContext;

  //#region Form
  const initialValues: IRegistrar = {
    email: "",
    nome: "",
    senha: "",
    confirmarSenha: "",
  };

  const registrarSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    senha: Yup.string()
      .trim()
      .min(8, "Senha deve ter ao menos 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .required("Campo obrigatório"),
    confirmarSenha: Yup.string()
      .trim()
      .min(8, "Senha deve ter ao menos 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .oneOf([Yup.ref("senha")], "Senhas não correspondem")
      .required("Campo obrigatório"),
  });

  const handleSubmit = useCallback(
    (values: IRegistrar, actions: FormikHelpers<IRegistrar>) => {
      toggleLoading();
      criarConta(values)
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
        <h1>Criar Conta</h1>
        <Form
          initialValues={initialValues}
          validationSchema={registrarSchema}
          onSubmit={handleSubmit}
        >
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
