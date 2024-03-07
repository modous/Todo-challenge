import React, { useState, ChangeEvent } from "react";
import { Input } from "../input";
import { Button } from "../button";
import styles from "./index.module.css";

interface IAddTodoFormProps {
  onAddTodo: (todo: ITodoItem, resetInput: () => void) => void;
}

export function AddTodoForm({ onAddTodo }: IAddTodoFormProps) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodoData: ITodoItem = {
      title: newTodoTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddTodo(newTodoData, resetInput);
  };
  const resetInput = () => {
    setNewTodoTitle("");
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
          console.log("Add button clicked");
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
