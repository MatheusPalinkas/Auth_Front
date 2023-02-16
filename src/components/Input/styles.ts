import styled, { css } from "styled-components";
import { InputContainProps } from "./InputProps";

export const Placeholder = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid transparent;
  background-color: transparent;
  pointer-events: none;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 1.3rem;
  background-color: transparent;
  transform: translate(0);
  color: var(--gray-300);
  transition: transform 0.15s ease-out, font-size 0.15s ease-out,
    background-color 0.2s ease-out, color 0.15s ease-out;
`;

export const InputStyle = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--black-300);
  font-size: 1rem;
  background-color: transparent;

  &:focus {
    outline: none;
    border-color: var(--blue-500);
  }
`;

export const InputContain = styled.div<InputContainProps>`
  position: relative;
  width: 100%;
  height: 60px;

  ${(props) =>
    props.hasValue &&
    css`
      ${Placeholder} ${Text} {
        background-color: transparent;
        font-size: 0.9rem;
        color: var(--black-300);
        transform: translate(0, -170%);
      }
    `}

  ${InputStyle}:focus + ${Placeholder} ${Text} {
    border-color: var(--blue-500);
    color: var(--blue-500);
    background-color: transparent;
    font-size: 0.9rem;
    transform: translate(0, -170%);
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
`;
