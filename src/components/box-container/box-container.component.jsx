import React from "react";
import { BoxContainerDiv } from "./box-container.styles";

const BoxContainer = ({ children }) => {
  return <BoxContainerDiv>{children}</BoxContainerDiv>;
};

export default BoxContainer;
