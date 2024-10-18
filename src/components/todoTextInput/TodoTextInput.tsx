import React, { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

const TodoTextInput = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      {...props}
      inputRef={ref}
      slotProps={{
        inputLabel: {
          sx: {
            color: "var(--main-color)",
            "&.Mui-focused": {
              color: "var(--main-color)",
            },
          },
        },
      }}
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "var(--secondary-color)",
        },
        "& .MuiFilledInput-root::before": {
          borderBottom: "1px solid black",
        },
        "& .MuiFilledInput-root::after": {
          borderBottom: "1px solid var(--main-color)",
        },
        ...props.sx,
      }}
    />
  );
});

TodoTextInput.displayName = "TodoTextInput";
export default TodoTextInput;
