import React, { useMemo } from "react";
import classes from "./Additemform.module.css";
import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../services/slices/taskSlice";
import { FormValues } from "../../types/types";
import TodoTextInput from "../todoTextInput/TodoTextInput";

const buttonStyles = {
  background: "var(--background-color)",
  fontSize: "1rem",
  width: "30%",
  height: "56px",
};

const AddItemForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = useMemo(
    () => (data: FormValues) => {
      console.log("Form data submitted:", data);
      dispatch(addTask(data.todo));
      reset();
    },
    [dispatch, reset]
  );

  return (
    <div className={classes.FormContainer}>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" variant="contained" sx={buttonStyles}>
          + ADD TODO
        </Button>
      </form>
    </div>
  );
};

export default AddItemForm;
