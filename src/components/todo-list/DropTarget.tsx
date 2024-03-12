import { ComponentProps } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../types/itemTypes";

export function DropTarget(props: ComponentProps<"div">) {
  const [collectedProps, ref] = useDrop(() => ({
    accept: ItemTypes.TODO_ITEM,
    drop: (item, monitor) => {
      console.log("DROP", item);
    },
  }));

  return <div ref={ref} {...props} />;
}

//droptarget krijgt een property die heet onDrop. en onDrop wordt afgevuurd wanneer er iets dropt.
//onDrop wordt afgevuurd waar nu die consolle.log zit
//onDrop functie krijgt id van het item dat je op de target dropt als parameter
