import React from "react";
import {
  ModalDiv,
  ModalButtons,
  ModalContent,
  ModalShadeEffect,
  CloseButton,
} from "./poster-modal.styles";
import { baseImageUrl } from "../../data/axios";

function PosterModal({ posterData, onStateChange }) {
  function truncate(text, count) {
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }

  return (
    <ModalDiv
      PosterPath={`${baseImageUrl}${posterData.poster_path}`}
      BackdropPath={`${baseImageUrl}${
        posterData.backdrop_path
          ? posterData.backdrop_path
          : posterData.poster_path
      }`}
    >
      <ModalContent>
        <h1>{posterData.name ? posterData.name : posterData.original_title}</h1>
        <p>{truncate(posterData?.overview, 200)}</p>
      </ModalContent>

      <CloseButton
        imageUrl="https://i.ibb.co/g4BWH29/cross.png"
        onClick={onStateChange}
      ></CloseButton>

      <ModalButtons>
        <button>Play</button>
        <button>My List</button>
      </ModalButtons>

      <ModalShadeEffect />
    </ModalDiv>
  );
}

export default PosterModal;
