import React, { useState, useEffect } from "react";
import Layout from "../Components/layout";
import { Stack, Text, getTheme } from "office-ui-fabric-react";
import GameTimer from "../Components/game-timer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableSubWord from "../Components/draggable-sub-word";
import DragableArea from "../Components/draggable-area";

const Game = () => {
  const theme = getTheme();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <Layout>
      <Stack style={{ alignItems: "center" }}>
        <Stack
          horizontal
          horizontalAlign="space-around"
          style={{ margin: "0 4rem", width: "100%" }}
        >
          <Text
            variant="xxLargePlus"
            style={{ fontSize: "2rem", alignContent: "space-around" }}
          >
            Your Score: {score}
          </Text>
          <GameTimer
            initialTimerValue="10"
            setGameOver={setGameOver}
          ></GameTimer>
        </Stack>
        <DndProvider backend={HTML5Backend}>
          <Stack padding="0 10rem" style={{ minHeight: "14rem" }}>
            <DraggableSubWord text="Hello"></DraggableSubWord>
          </Stack>
          <Stack style={{ height: "%", innerWidth: 100 }}>
            <DragableArea black></DragableArea>
          </Stack>
        </DndProvider>
      </Stack>
    </Layout>
  );
};

export default Game;
