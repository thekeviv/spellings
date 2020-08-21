import React, { useState } from "react";
import { Stack, Text, PrimaryButton } from "office-ui-fabric-react";
import { DragDropContext } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";
import GameTimer from "../Components/game-timer";
import DraggableList from "../Components/draggable-list";
import words from "../Data/words";

function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

const getUniqueWord = () => {
  let word = words[Math.floor(Math.random() * words.length)];
  let subWords = [
    word.substring(0, 3),
    word.substring(3, 5),
    word.substring(5, 8),
  ];
  let shuffledWords = shuffle(subWords.slice(0));
  return [subWords, shuffledWords];
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
let correctAnswers = 0;
let incorrectAnswers = 0;
const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [nonShuffledShuffledWords, setNonShuffledShuffledWords] = useState(
    getUniqueWord()
  );
  const getResultsPathName = () => {
    const string = gameOver
      ? "results/" + correctAnswers + "/" + incorrectAnswers
      : "";
    return string;
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      nonShuffledShuffledWords[1],
      result.source.index,
      result.destination.index
    );
    setNonShuffledShuffledWords([nonShuffledShuffledWords[0], items]);
  };

  const updateScoreAndGenerateNewWord = () => {
    if (
      JSON.stringify(nonShuffledShuffledWords[0]) ===
      JSON.stringify(nonShuffledShuffledWords[1])
    ) {
      setScore(score + 1);
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
    setNonShuffledShuffledWords(getUniqueWord());
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
        <GameTimer initialTimerValue="60" setGameOver={setGameOver}></GameTimer>
      </Stack>
      <Stack
        horizontal
        horizontalAlign="center"
        token={{ childrenGap: "2rem" }}
      >
        <Stack style={{ display: "flex", alignItems: "center" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <DraggableList
              words={nonShuffledShuffledWords[1]}
              disableDrag={gameOver}
            />
          </DragDropContext>
          <PrimaryButton
            text="Next Word"
            onClick={updateScoreAndGenerateNewWord}
            disabled={gameOver}
          ></PrimaryButton>

          <Link
            to={{
              pathname: getResultsPathName(),
            }}
          >
            <PrimaryButton
              text="View Results"
              disabled={!gameOver}
              style={{ marginTop: "10px" }}
            />
          </Link>
        </Stack>
      </Stack>
      <Stack horizontal horizontalAlign="center" style={{ marginTop: "1em" }}>
        <Text style={{ textAlign: "center" }}>
          Reorder the Sub-words by Dragging Each Box Up or Down to Form a
          Complete English Word{" "}
        </Text>
      </Stack>
    </Layout>
  );
};

export default Game;
