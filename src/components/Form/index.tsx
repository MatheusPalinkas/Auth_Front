import { Formik } from "formik";
import { IForm } from "./IForm";

import { FormStyled } from "./styles";

export const Form = <Values extends object>({
  children,
  ...props
}: IForm<Values>) => {
  return (
    <Formik {...props}>
      <FormStyled>{children}</FormStyled>
    </Formik>
  );
};
