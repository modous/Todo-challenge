import React, { useState, ChangeEvent } from "react";
import { Input } from "../input";
import { Button } from "../button";
import styles from "./index.module.css";

interface IAddTodoFormProps {
  onAddTodo: (todo: ITodoItem) => void;
}

export function AddTodoForm({ onAddTodo }: IAddTodoFormProps) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };
  const resetInput = () => {
    setNewTodoTitle("");
  };
  const handleAddTodo = () => {
    const newTodoData: ITodoItem = {
      title: newTodoTitle,
      completed: false,
    };

    onAddTodo(newTodoData);

    resetInput();
  };

  return (
    <div className={styles.inputAndButtonContainer}>
      <Input
        placeholder="Add new to do"
        value={newTodoTitle}
        onChange={handleInputChange}
      />
      <Button
        onClick={() => {
          handleAddTodo();
        }}
        className={styles.addButton}
        variant="primary"
        size="lg"
      >
        Add
      </Button>
    </div>
  );
}
