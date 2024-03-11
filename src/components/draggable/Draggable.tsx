import { DragEvent } from "react";

interface DraggableProps {
  children?: React.ReactNode;
  className?: string;
  onDragStart?: (e: React.DragEvent<HTMLElement>) => void;
  itemID: number;
}

export default function Draggable(props: DraggableProps) {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    if (props.onDragStart) {
      props.onDragStart(e);
    }
  };
  return (
    <div draggable onDragStart={handleDragStart}>
      {props.children}
    </div>
  );
}
