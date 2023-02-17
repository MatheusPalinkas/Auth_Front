import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IAlterarSenha } from "../../interfaces/IAlterarSenha";

import {
  Image,
  Container,
  ImgContainer,
  FormContainer,
  MessageWithLink,
} from "./styles";
import imgNovaSenha from "../../assets/ilustracaoNovaSenha.png";
import { useCallback, useContext } from "react";
import { alterarConta } from "../../services/oauthService";
import { modalSucess } from "../../services/modalService";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { Form } from "../../components/Form";

export const AlterarSenha = () => {
  const navigate = useNavigate();
  const [params, setParamas] = useSearchParams();

  const email: string = params.get("email") || "";
  const resetToken: string = params.get("resetToken") || "";

  const { toggleLoading } = useContext(LoadingContext) as ILoadingContext;

  //#region Form
  const initialValues: IAlterarSenha = {
    senha: "",
    confirmarSenha: "",
  };

  const alterarSenhaSchema = Yup.object().shape({
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
    (values: IAlterarSenha, actions: FormikHelpers<IAlterarSenha>) => {
      toggleLoading();
      alterarConta({ email, resetToken, ...values })
        .then(() => {
          toggleLoading();
          modalSucess("Senha alterada com sucesso.", "Senha Alterada", () => {
            navigate("/login");
          });
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
        <h1>Criar nova senha</h1>
        <Form
          initialValues={initialValues}
          validationSchema={alterarSenhaSchema}
          onSubmit={handleSubmit}
        >
          <Input label="Nova Senha" name="senha" type="password" />
          <Input
            label="Confirmar nova senha"
            name="confirmarSenha"
            type="password"
          />

          <Button type="submit">Criar</Button>
        </Form>

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
