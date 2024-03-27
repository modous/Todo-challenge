import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../input";
import { Button } from "../button";
import styles from "./Index.module.css";

interface IAddTodoFormProps {
  onAddTodo: (todo: IAddTodoItemData) => void;
}

export function AddTodoForm({ onAddTodo }: IAddTodoFormProps) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  const resetInput = () => {
    setNewTodoTitle("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodoData: IAddTodoItemData = {
      title: newTodoTitle,
      completed: false,
    };

    onAddTodo(newTodoData);

    resetInput();
  };

  return (
    <form className={styles.inputAndButtonContainer} onSubmit={handleSubmit}>
      <Input
        placeholder="Add new to do"
        value={newTodoTitle}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        className={styles.addButton}
        variant="primary"
        size="lg"
      >
        Add
      </Button>
    </form>
  );
}
