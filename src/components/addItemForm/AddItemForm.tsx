import React, { useMemo } from "react";
import classes from "./Additemform.module.css";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../services/slices/taskSlice";
import { FormValues } from "../../types/types";
import TodoTextInput from "../todoTextInput/TodoTextInput";

const AddItemForm = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = useMemo(
    () => (data: FormValues) => {
      dispatch(addTask(data.todo));
      reset();
    },
    [dispatch, reset]
  );

  return (
    <Box className={classes.FormContainer}>
      <Box className={classes.Form} component="form" onSubmit={handleSubmit(onSubmit)}>
        <TodoTextInput
          fullWidth
          id="filled-basic"
          label="todo"
          variant="filled"
          {...register("todo", {
            required: "Это поле обязательно",
            minLength: { value: 10, message: "Слишком маленькое дело" },
          })}
          error={!!errors.todo}
          helperText={errors.todo?.message}
        />
        <Button className={classes.addTodoButton} type="submit" variant="contained">
          {isMobile ? "+" : "+ ADD TODO"}
        </Button>
      </Box>
    </Box>
  );
};

export default AddItemForm;
