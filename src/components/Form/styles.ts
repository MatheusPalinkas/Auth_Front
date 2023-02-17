import styled from "styled-components";
import { Form as FormFormik } from "formik";

export const FormStyled = styled(FormFormik)`
  padding: 50px 0px;
  width: 100%;
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;
