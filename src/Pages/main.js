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
      <Image
        {...mainPageImageProps}
        src={mainpagebanner}
        alt="Spellings Main Page Image"
      ></Image>
      <Text className={mainPageText} alignText="Center">
        Welcome to Spellings! Click on instructions to read the instructions or
        Click on Start Game to start the game!
      </Text>
      <Stack horizontal tokens={{ childrenGap: "5rem" }}>
        <PrimaryButton text="Instructions" onClick={showModal}></PrimaryButton>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
            Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis.
            Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin
            dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac
            habitasse platea dictumst. In a odio eget enim porttitor maximus.
            Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui.
            Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus
            ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit,
            et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies
            mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
            efficitur.
          </p>
        </div>
      </Modal>
    </Layout>
  );
};

const mainPageImageProps = {
  height: "20rem",
};

const mainPageText = {
  margin: "0 15rem",
  textAlign: "center",
};

export default Main;
