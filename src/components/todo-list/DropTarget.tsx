import { ComponentProps } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../types/itemTypes";

interface Props extends Omit<ComponentProps<"div">, "onDrop"> {
  onDrop: (dragItemId: number) => void;
}

export function DropTarget(props: Props) {
  const { onDrop, ...rest } = props;

  const [collectedProps, ref] = useDrop(() => ({
    accept: ItemTypes.TODO_ITEM,
    drop: (item: { id: number }) => {
      onDrop(item.id);
    },
  }));

  return <div ref={ref} {...rest} />;
}
