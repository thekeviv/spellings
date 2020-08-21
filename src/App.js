import * as React from "react";
import { loadTheme } from "office-ui-fabric-react";
import { Route } from "react-router-dom";
import Main from "./Pages/main";
import Game from "./Pages/game";
import Results from "./Pages/results";

loadTheme({
  palette: {
    themePrimary: "#8ad4d0",
    themeLighterAlt: "#fafdfd",
    themeLighter: "#eaf8f7",
    themeLight: "#d9f2f1",
    themeTertiary: "#005B9A",
    themeSecondary: "#96d9d6",
    themeDarkAlt: "#7cbebb",
    themeDark: "#69a19e",
    themeDarker: "#4d7774",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
  defaultFontStyle: {
    fontSize: "x-large",
  },
});

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Main} />
        <Route path="/game" component={Game} />
        <Route
          path="/results/:correctAnswers/:incorrectAnswers"
          component={Results}
        />
      </div>
    );
  }
}

export default App;
