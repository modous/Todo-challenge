import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../input";
import { Button } from "../button";
import styles from "./index.module.css";

interface IAddTodoFormProps {
  onAddTodo: (todo: IAddTodoItemData) => void;
}

export function AddTodoForm({ onAddTodo }: IAddTodoFormProps) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
    setTitleError(false);
  };

  const resetInput = () => {
    setNewTodoTitle("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodoTitle.trim() === "") {
      setTitleError(true);
      return;
    }

    const newTodoData: IAddTodoItemData = {
      title: newTodoTitle,
      completed: false,
    };

    onAddTodo(newTodoData);

    resetInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      {titleError && (
        <h1 className={styles.errorMessage}>Please insert a title</h1>
      )}
      <div className={styles.inputAndButtonContainer}>
        <Input
          placeholder="Add new to do"
          value={newTodoTitle}
          onChange={handleInputChange}
          variant={titleError ? "error" : ""}
        />

        <Button
          type="submit"
          className={styles.addButton}
          variant="primary"
          size="lg"
        >
          Add
        </Button>
      </div>
    </form>
  );
}
