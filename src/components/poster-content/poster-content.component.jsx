import React from "react";

import { PosterDiv } from "./poster-content.styles";

const PosterContent = ({ imageUrl, isLarge }) => {
  return (
    <PosterDiv ImgSize={isLarge}>
      <img src={imageUrl} alt="poster" />
    </PosterDiv>
  );
};

export default PosterContent;
