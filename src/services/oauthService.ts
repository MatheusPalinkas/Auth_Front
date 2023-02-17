import Swal from "sweetalert2";

import { oauth } from "./api";
import { AxiosError } from "axios";

import { ILogin } from "../interfaces/ILogin";
import { IRegistrar } from "../interfaces/IRegistrar";
import { IRecuperarSenha } from "../interfaces/IRecuperarSenha";
import { IResponseAPI } from "../interfaces/IResponseAPI";

import { modalError } from "./modalService";

const exibirModalError = (error: any) => {
  if (error as AxiosError) {
    const { response } = error as AxiosError;

    const data: IResponseAPI = response?.data as IResponseAPI;

    modalError(data?.errors.length == 1 ? data?.errors[0] : data?.errors);
  } else if (error.message) {
    modalError(error.message);
  }
};

export const login = async (params: ILogin) => {
  try {
    const response = await oauth.post("/autenticar", params);

    const data = response.data as IResponseAPI;

    if (data.isSucessed)
      localStorage.setItem("@JWT", JSON.stringify(data.result));
    else throw new Error(data?.errors[0]);
  } catch (error) {
    exibirModalError(error);
    console.error(error);
    throw error;
  }
};

export const criarConta = async (params: IRegistrar) => {
  try {
    const response = await oauth.post("/registrar", params);

    const data = response.data as IResponseAPI;

    if (data.isSucessed)
      localStorage.setItem("@JWT", JSON.stringify(data.result));
    else throw new Error(data?.errors[0]);
  } catch (error) {
    exibirModalError(error);
    console.error(error);
    throw error;
  }
};

export const recuperarSenha = async (params: IRecuperarSenha) => {
  try {
    const response = await oauth.post("/recuperar-senha", params);

    const data = response.data as IResponseAPI;

    if (!data.isSucessed) throw new Error(data?.errors[0]);
  } catch (error) {
    exibirModalError(error);
    console.error(error);
    throw error;
  }
};

export const alterarConta = async (params: {
  email: string;
  resetToken: string;
  senha: string;
  confirmarSenha: string;
}) => {
  try {
    const response = await oauth.post("/alterar-senha", params);

    const data = response.data as IResponseAPI;

    if (!data.isSucessed) throw new Error(data?.errors[0]);
  } catch (error) {
    exibirModalError(error);
    console.error(error);
    throw error;
  }
};
