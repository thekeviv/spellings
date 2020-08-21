import React from "react";
import { Draggable } from "react-beautiful-dnd";

const DraggableWord = (props) => {
  return (
    <Draggable
      key={props.text}
      draggableId={props.text}
      index={props.index}
      isDragDisabled={props.disableDrag}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            // some basic styles to make the items look a bit nicer
            userSelect: "none",
            padding: 8 * 2,
            margin: `0 0 ${8}px 0`,

            // change background colour if dragging
            background: snapshot.isDragging ? "lightgreen" : "grey",

            // styles we need to apply on draggables
            ...provided.draggableProps.style,
          }}
        >
          {props.text}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableWord;
