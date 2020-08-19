import React from "react";
import { Stack, Text, getTheme } from "office-ui-fabric-react";

import Interactive from "../Components/interactable";
const draggableOptions = {
  onmove: (event) => {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  },
  restrict: {
    restriction: "parent",
  },
  inertia: true,
};
const DraggableSubWord = (props) => {
  const theme = getTheme();
  return (
    <Interactive draggable draggableOptions={draggableOptions}>
      <div
        className="draggableItem"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          cursor: "move",
          backgroundColor: theme.palette.themeTertiary,
          color: theme.palette.black,
          borderRadius: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "10rem",
          minWidth: "5rem",
          minHeight: "4rem",
          maxHeight: "4rem",
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <Text variant="xLargePlus">{props.text}</Text>
      </div>
    </Interactive>
  );
};

export default DraggableSubWord;
