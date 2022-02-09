import React from "react";
import { RowContainer, RowPosters } from "./poster-row.styles";

import { instance, baseImageUrl } from "../../data/axios";

import PosterContent from "../poster-content/poster-content.component";
import PosterModal from "../poster-modal/poster-modal.component";

class PostersRow extends React.Component {
  constructor() {
    super();

    this.state = {
      posters: [],
      isOpen: false,
      ID: null,
    };
  }

  fetchData = async (fetchUrl) => {
    const request = await instance.get(fetchUrl);
    const { results } = request.data;

    this.setState({ posters: results });
  };

  handleClick(posterID) {
    if (!this.state.isOpen) {
      return this.setState({ isOpen: true, ID: posterID });
    }
  }

  componentDidMount() {
    this.fetchData(this.props.fetchUrl);
  }

  render() {
    const { title, large } = this.props;
    const { posters, isOpen, ID } = this.state;

    return (
      <RowContainer>
        <h2>{title}</h2>

        <RowPosters>
          {posters.map((poster) => (
            <div key={poster.id} onClick={() => this.handleClick(poster.id)}>
              <PosterContent
                imageUrl={`${baseImageUrl}${
                  large
                    ? poster.poster_path
                    : poster.backdrop_path
                    ? poster.backdrop_path
                    : poster.poster_path
                }`}
                isLarge={large}
              />
              {isOpen === true && ID === poster.id ? (
                <PosterModal
                  posterData={poster}
                  onStateChange={() => this.setState({ isOpen: false })}
                />
              ) : null}
            </div>
          ))}
        </RowPosters>
      </RowContainer>
    );
  }
}

export default PostersRow;
