import React, { useState } from "react";
import { Stack, Text, PrimaryButton, getTheme } from "office-ui-fabric-react";
import { DragDropContext } from "react-beautiful-dnd";
import Layout from "../Components/layout";
import GameTimer from "../Components/game-timer";
import DraggableList from "../Components/draggable-list";
import words from "../Data/words";

const getUniqueWord = () => {
  return words[Math.floor(Math.random() * words.length + 1)];
};

const onDragEnd = (result) => {
  // TODO
};

const Game = () => {
  const theme = getTheme();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [word, setWord] = useState(getUniqueWord());
  const wordList = ["Hel", "lo", "loo"];
  return (
    <Layout>
      <Stack
        horizontal
        horizontalAlign="space-between"
        style={{ margin: "0 2em" }}
      >
        <Text variant="xxLargePlus" style={{ fontSize: "2rem" }}>
          Your Score: {score}
        </Text>
        <GameTimer initialTimerValue="10" setGameOver={setGameOver}></GameTimer>
      </Stack>
      <Stack
        horizontal
        horizontalAlign="center"
        token={{ childrenGap: "2rem" }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <DraggableList words={wordList} />
        </DragDropContext>
        <PrimaryButton text="Next Word"></PrimaryButton>
      </Stack>
      <Stack horizontal horizontalAlign="center" style={{ marginTop: "2em" }}>
        <Text horizontalAlign="">
          Reorder the Sub-Words to form a Meaningful English Word{" "}
        </Text>
      </Stack>
    </Layout>
  );
};

export default Game;
