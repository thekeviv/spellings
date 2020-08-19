import React from "react";
import {
  AnimationClassNames,
  mergeStyles,
  Stack,
  getTheme,
  ScrollablePane,
  Text,
} from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { Layer } from "office-ui-fabric-react/lib/Layer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    const theme = getTheme();
    this.contentClass = mergeStyles([
      {
        backgroundColor: theme.palette.themePrimary,
        color: theme.palette.white,
        lineHeight: "70px",
        padding: "0 40px",
        textAlign: "center",
        marginBottom: 15,
      },
      AnimationClassNames.scaleUpIn100,
    ]);
  }
  render() {
    var header = (
      <div className={this.contentClass}>
        <Icon iconName="TextBox" style={{ color: getTheme().palette.white }} />
        <Text variant="xxLarge">{"  Spellings! "}</Text>
      </div>
    );
    return (
      <Layer>
        <ScrollablePane>
          {header}
          <Stack
            tokens={{ childrenGap: 10 }}
            style={{ minHeight: "80%" }}
            verticalAlign="space-around"
          >
            {this.props.children}
          </Stack>
        </ScrollablePane>
      </Layer>
    );
  }
}
export default Layout;
