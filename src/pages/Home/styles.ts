import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 30px auto;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  gap: 60px;
`;

export const ContainerJwt = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;

  & > span {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }
`;
