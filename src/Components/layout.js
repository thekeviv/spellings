import React from "react";
import {
  AnimationClassNames,
  mergeStyles,
  PrimaryButton,
  Stack,
  getTheme,
} from "office-ui-fabric-react";
import { Layer } from "office-ui-fabric-react/lib/Layer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    const theme = getTheme();
    this.contentClass = mergeStyles([
      {
        backgroundColor: theme.palette.themePrimary,
        color: theme.palette.white,
        lineHeight: "50px",
        padding: "0 20px",
      },
      AnimationClassNames.scaleUpIn100,
    ]);
  }
  render() {
    var content = <div className={this.contentClass}>Hello world</div>;
    return (
      <Stack>
        <Layer>
          <div>
            {content}
            <PrimaryButton text="primary"></PrimaryButton>
          </div>
        </Layer>
      </Stack>
    );
  }
}
export default Layout;
