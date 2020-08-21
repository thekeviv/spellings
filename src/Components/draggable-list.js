import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableWord from "./draggable-word";

const DraggableList = (props) => {
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            background: "lightblue",
            padding: 8,
            width: 250,
          }}
        >
          {props.words.map((item, index) => (
            <DraggableWord key={item} text={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DraggableList;
