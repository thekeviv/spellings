import React from "react";
import Layout from "../Components/layout";
import { useId, useBoolean } from "@uifabric/react-hooks";
import { Link } from "react-router-dom";
import {
  PrimaryButton,
  Stack,
  Text,
  Image,
  ContextualMenu,
  Modal,
  getTheme,
  mergeStyleSets,
  FontWeights,
  IconButton,
} from "office-ui-fabric-react";
import mainpagebanner from "../Assets/Images/mainpagebanner.png";

const dragOptions = {
  moveMenuItemText: "Move",
  closeMenuItemText: "Close",
  menu: ContextualMenu,
};
const cancelIcon = { iconName: "Cancel" };

const Main = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(
    false
  );
  const titleId = useId("title");
  const theme = getTheme();
  const contentStyles = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
    },
    header: [
      theme.fonts.xLargePlus,
      {
        flex: "1 1 auto",
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: "flex",
        alignItems: "center",
        fontWeight: FontWeights.semibold,
        padding: "12px 12px 14px 24px",
      },
    ],
    body: {
      flex: "4 4 auto",
      padding: "0 24px 24px 24px",
      overflowY: "hidden",
      selectors: {
        p: { margin: "14px 0" },
        "p:first-child": { marginTop: 0 },
        "p:last-child": { marginBottom: 0 },
      },
    },
  });
  const iconButtonStyles = {
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: "auto",
      marginTop: "4px",
      marginRight: "2px",
    },
    rootHovered: {
      color: theme.palette.neutralDark,
    },
  };
  return (
    <Layout>
      <Stack vertical horizontalAlign="center">
        <Image
          {...mainPageImageProps}
          src={mainpagebanner}
          alt="Spellings Main Page Image"
        ></Image>
        <Text className={mainPageText} alignText="Center">
          Welcome to Spellings! Click on instructions to read the instructions
          or Click on Start Game to start the game!
        </Text>
        <Stack horizontal tokens={{ childrenGap: "5rem" }}>
          <PrimaryButton
            text="Instructions"
            onClick={showModal}
          ></PrimaryButton>
          <Link to="/game">
            <PrimaryButton text="Start Game"></PrimaryButton>
          </Link>
        </Stack>
        <Modal
          titleAriaId={titleId}
          isOpen={isModalOpen}
          onDismiss={hideModal}
          isBlocking={false}
          containerClassName={contentStyles.container}
          dragOptions={dragOptions}
        >
          <div className={contentStyles.header}>
            <span id={titleId}>Instructions</span>
            <IconButton
              styles={iconButtonStyles}
              iconProps={cancelIcon}
              ariaLabel="Close popup modal"
              onClick={hideModal}
            />
          </div>
          <div className={contentStyles.body}>
            <h5>
              <em>Spellings by Vivek Sharma</em>
            </h5>
            <p>
              Spellings is a simple game to teach you spellings of commonly
              occuring words
            </p>
            <h5>Instructions</h5>
            <ul>
              <li>Clicking on Start Game will start the game.</li>
              <li>
                The game has a timer which starts on clicking Start Game. The
                Timer is shown on the upper right corner
              </li>
              <li>
                You will see a dropdown pane in the middle of the screen. It
                will have 3 sub words in it arranged randomly.
              </li>
              <li>
                Arrange them in the correct order using drag and drop. If you
                are using touch, you'll need to hold a sub-word before dragging
                it.
              </li>
              <li>Once you think the order is correct, click next word.</li>
              <li>
                Your score is shown in the top left. Click View Results to view
                a chart of how many spellings you got right and howmany you got
                wrong.
              </li>
            </ul>
          </div>
        </Modal>
      </Stack>
    </Layout>
  );
};

const mainPageImageProps = {
  height: "20rem",
};

const mainPageText = {
  margin: "0 15rem 4rem 15rem",
  textAlign: "center",
};

export default Main;
