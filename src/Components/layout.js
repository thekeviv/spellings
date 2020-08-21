import React from "react";
import {
  AnimationClassNames,
  mergeStyles,
  Stack,
  getTheme,
  ScrollablePane,
  Text,
} from "office-ui-fabric-react";
import { Link } from "react-router-dom";
import { Icon, Layer } from "office-ui-fabric-react/";

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
        <Link
          to="/"
          style={{ textDecoration: "none", color: getTheme().palette.white }}
        >
          <Icon
            iconName="TextBox"
            style={{ color: getTheme().palette.white }}
          />
          <Text variant="xxLarge">{"  Spellings! "}</Text>
        </Link>
      </div>
    );
    return (
      <Layer>
        <ScrollablePane>
          {header}
          <Stack tokens={{ childrenGap: 10 }} style={{ minHeight: "80%" }}>
            {this.props.children}
          </Stack>
        </ScrollablePane>
      </Layer>
    );
  }
}
export default Layout;
