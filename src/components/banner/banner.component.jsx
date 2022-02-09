import React from "react";
import {
  Header,
  BannerContents,
  BannerButtons,
  BannerFadeEffect,
} from "./banner.styles";

import { instance, baseImageUrl } from "../../data/axios";

export class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  fetchData = async (banner_data) => {
    const request = await instance.get(banner_data);
    const { results } = request.data;
    const randomMovie = Math.floor(Math.random() * results.length - 1);

    this.setState({ movie: results[randomMovie] });
  };

  componentDidMount() {
    this.fetchData(this.props.netflixMovies);
  }

  render() {
    const { movie } = this.state;
    return (
      <Header imgUrl={`${baseImageUrl}${movie?.backdrop_path}`}>
        <BannerContents>
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          <BannerButtons>
            <button>Play</button>
            <button>My List</button>
          </BannerButtons>
          <p>{movie?.overview}</p>
        </BannerContents>

        <BannerFadeEffect />
      </Header>
    );
  }
}

export default Banner;
