import { FormikConfig } from "formik";

export interface IForm<Values> extends FormikConfig<Values> {
  children: React.ReactNode;
}
