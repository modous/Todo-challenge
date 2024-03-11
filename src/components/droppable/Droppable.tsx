import { DragEvent } from "react";

interface DroppableProps {
  children?: React.ReactNode;
  className?: string;
  onDrop?: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLElement>) => void;
}

export default function Droppable(props: DroppableProps) {
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.onDrop) {
      props.onDrop(e);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.onDragOver) {
      props.onDragOver(e);
    }
  };

  return (
    <div
      className={props.className}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {props.children}
    </div>
  );
}
