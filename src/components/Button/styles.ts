import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--blue-500);
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  padding: 15px;
  color: var(--white);
  letter-spacing: 0.05rem;

  &:hover {
    transition: all 0.2s ease;
    background: var(--blue-700);
  }
`;
