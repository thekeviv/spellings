import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import Layout from "../Components/layout";
const Results = (props) => {
  const graphRef = createRef(null);
  useEffect(() => {
    if (graphRef.current) {
      new Chart(graphRef.current.getContext("2d"), {
        type: "pie",
        data: {
          labels: ["Correct Answers", "Incorrect Answers"],
          datasets: [
            {
              label: "Spellings Results",
              data: [
                props.match.params.correctAnswers,
                props.match.params.incorrectAnswers,
              ],
              backgroundColor: ["Green", "Red"],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  });
  return (
    <div>
      <canvas ref={graphRef} />
    </div>
  );
};

export default Results;
