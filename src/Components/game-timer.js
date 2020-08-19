import React, { useState, useEffect } from "react";
import { Text } from "office-ui-fabric-react";

function calculateTimeLeft(currentTimeLeft) {
  return currentTimeLeft > 0 ? currentTimeLeft - 1 : 0;
}

const GameTimer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.initialTimerValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(timeLeft));
    }, 1000);
    if (timeLeft === 0) {
      props.setGameOver(true);
    }
    return () => clearTimeout(timer);
  });
  return (
    <Text variant="xxLargePlus" style={{ fontSize: "2rem" }}>
      {" "}
      {timeLeft > 0 ? (
        <span>Time Remaining: {timeLeft} seconds</span>
      ) : (
        <span>Time's Up!</span>
      )}{" "}
    </Text>
  );
};

export default GameTimer;
