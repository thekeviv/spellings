import React from "react";
import { useDrop } from "react-dnd";
import { Stack, Text, getTheme } from "office-ui-fabric-react";

export default function DraggableArea(props) {
  const theme = getTheme();
  return (
    <Stack
      style={{
        backgroundColor: theme.palette.themePrimary,
        stroke: theme.palette.themeSecondary,
        borderWidth: 50,
        borderColor: theme.palette.black,
        minHeight: "12rem",
        maxHeight: "20rem",
        minWidth: "12rem",
        margin: "0 15rem 0 15rem",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0.5rem 2rem",
      }}
    >
      <Text
        variant="xxLargePlus"
        style={{
          fontSize: "1.5rem",
          color: theme.palette.white,
          textAlign: "center",
        }}
      >
        Drop the Sub-Words in order to Create an English Word
      </Text>
    </Stack>
  );
}
