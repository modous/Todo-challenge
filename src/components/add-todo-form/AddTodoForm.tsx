import { Button } from "../button";
import { Input } from "../input";
import styles from "./Index.module.css";

export function AddTodoForm() {
  const handleAddTodo = async (title: string) => {
    if (title.trim() === "") {
      return;
    }
  };

  return (
    <div className={styles.inputAndButtonContainer}>
      <Input placeholder="Add new to do" />
      <Button
        onClick={handleAddTodo}
        className={styles.addButton}
        variant="primary"
        size="lg"
      >
        Add
      </Button>
    </div>
  );
}
