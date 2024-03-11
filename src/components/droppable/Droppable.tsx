import { DragEvent, DragEventHandler } from "react";

interface DroppableProps {
  children?: React.ReactNode;
  className?: string;
  onDrop?: (newOrder: number[]) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
}

export default function Droppable(props: DroppableProps) {
  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (props.onDrop) {
      try {
        // Extract the new order from the event data
        const newOrder = JSON.parse(e.dataTransfer.getData("text/plain"));
        props.onDrop(newOrder);
      } catch (error) {
        console.error("Failed to parse dropped data:", error);
      }
    }
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
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
