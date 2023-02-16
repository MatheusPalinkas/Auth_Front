import { useField } from "formik";

import { InputProps } from "./InputProps";

import {
  Text,
  InputStyle,
  Placeholder,
  InputContain,
  ErrorMessage,
} from "./styles";

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const nameInput = props.name || label;

  const [field, meta] = useField(nameInput);

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
