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

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Game = () => {
  const theme = getTheme();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [words, setWords] = useState(["ver", "whe", "ne"]);
  const [correctWordOrder, setCorrectWordOrder] = useState([0, 1, 2]);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(words, result.source.index, result.destination.index);
    setWords(items);
  };
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
        <Stack style={{ display: "flex", alignItems: "center" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <DraggableList words={words} />
          </DragDropContext>
          <PrimaryButton text="Next Word"></PrimaryButton>
        </Stack>
      </Stack>
      <Stack horizontal horizontalAlign="center" style={{ marginTop: "1em" }}>
        <Text style={{ textAlign: "center" }}>
          Reorder the Sub-Words to form a Meaningful English Word{" "}
        </Text>
      </Stack>
    </Layout>
  );
};

export default Game;
