import { FormHelperText, SxProps, TextField, Theme } from "@mui/material";
import { FC } from "react";
import { FieldErrors, useController, UseControllerProps } from "react-hook-form";

export type InputType = "text" | "email" | "number";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  variant?: string;
  required?: boolean;
  disabled?: boolean;
  props: UseControllerProps<any>;
  sx?: SxProps<Theme>;
  hasError: boolean;
  errorMessage?: string;
}

const InputField: FC<IProps> = ({
  name,
  label,
  required,
  type,
  placeholder,
  disabled = false,
  props,
  sx,
  hasError = false,
  errorMessage,
}) => {
  const { field } = useController(props);

  return (
    <>
    <TextField
      {...field}
      id={name}
      type={type}
      label={label}
      placeholder={placeholder}
      required={required}
      value=""
      disabled={disabled}
      variant="outlined"
      sx={sx}
      error={hasError}
      fullWidth
    />
    {hasError && <FormHelperText id="component-error-text" sx={{minWidth:350, color:'red'}}>{errorMessage}</FormHelperText>} 
    </>
  );
};

export default InputField;
