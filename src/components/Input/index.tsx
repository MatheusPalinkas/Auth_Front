import { useField } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { InputProps } from "./InputProps";

import {
  Text,
  InputStyle,
  Placeholder,
  InputContain,
  ErrorMessage,
  ContainerIcon,
} from "./styles";

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const nameInput = props.name || label;

  const [field, meta] = useField(nameInput);

  if (props.type == "password")
    return (
      <InputContain hasValue={props.value || field.value}>
        <InputStyle
          {...props}
          {...field}
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          type={showPassword ? "text" : "password"}
        />
        <Placeholder htmlFor={nameInput} id="placeholder-fname">
          <Text>{label}</Text>
        </Placeholder>

        <ContainerIcon
          onClick={(e) => {
            e.preventDefault();
            setShowPassword((old) => !old);
          }}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={25} />
          ) : (
            <AiOutlineEye size={25} />
          )}
        </ContainerIcon>
        {meta.touched && meta.error && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
      </InputContain>
    );

  return (
    <InputContain hasValue={props.value || field.value}>
      <InputStyle
        {...props}
        {...field}
        autoComplete="off"
        aria-labelledby="placeholder-fname"
      />
      <Placeholder htmlFor={nameInput} id="placeholder-fname">
        <Text>{label}</Text>
      </Placeholder>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputContain>
  );
};
