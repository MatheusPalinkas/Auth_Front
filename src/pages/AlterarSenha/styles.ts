import styled from "styled-components";
import { Form as FormFormik } from "formik";

export const Container = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 1000px) {
    justify-content: center;

    & h1 {
      text-align: center;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 600px;
`;

export const MessageWithLink = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;
