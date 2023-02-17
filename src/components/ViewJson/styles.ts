import styled from "styled-components";

export const Container = styled.div`
  background: var(--black-300);
  border-radius: 10px;

  padding: 15px;
`;

export const Code = styled.pre`
  color: var(--white);

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
`;

export const ContainerJwt = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  max-width: 500px;
  width: 100%;

  & > span {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;
