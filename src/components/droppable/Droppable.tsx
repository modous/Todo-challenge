import { DragEvent, DragEventHandler } from "react";

interface DroppableProps {
  children?: React.ReactNode;
  className?: string;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  itemOrder: number[];
}

export default function Droppable(props: DroppableProps) {
  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (props.onDrop) {
      props.onDrop(e);
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
