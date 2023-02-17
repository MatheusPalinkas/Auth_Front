import Swal from "sweetalert2";

export const modalError = async (
  message: string[] | string,
  title = "Erro"
) => {
  if (typeof message === "string") {
    Swal.fire({
      icon: "error",
      title: title,
      text: message,
    });
    return;
  }

  Swal.fire({
    icon: "error",
    title: "Erro",
    html: `<ul>${message.map((m) => `<li>${m}</li>`).join("")}</ul>`,
  });
};

export const modalSucess = async (
  message: string,
  title = "Sucesso",
  callback: () => void = () => {}
) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
  }).then(() => {
    callback();
  });
};
