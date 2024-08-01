import { SxProps, TextField, Theme } from "@mui/material";
import { FC } from "react";
import { useController, UseControllerProps } from "react-hook-form";

export type InputType = "text" | "email" | "number";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  variant?: string;
  required: boolean;
  disabled?: boolean;
  props: UseControllerProps<any>;
  sx?: SxProps<Theme>;
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
}) => {
  const { field } = useController(props);

  return (
    <TextField
      {...field}
      id={name}
      type={type}
      label={label}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      variant="outlined"
      sx={sx}
      fullWidth
    />
  );
};

export default InputField;
