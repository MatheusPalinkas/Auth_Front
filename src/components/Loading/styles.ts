import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--black-100);

  justify-content: center;
  align-items: center;
`;

export const Loader = styled.span`
  width: 100px;
  height: 100px;
  border: 10px solid var(--white);
  border-bottom-color: var(--blue-700);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
