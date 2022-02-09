import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { HomePageDiv, PageContentsDiv } from "./netfix.styles";
import { selectUpdatedMovies } from "../../redux/movies/movies.selectors";

import Banner from "../../components/banner/banner.component";
import PostersRow from "../../components/poster-row/poster-row.component";
import BannerNavbar from "../../components/banner-navbar/banner-navbar.component";

const NetflixPage = ({ movies }) => {
  return (
    <HomePageDiv>
      <BannerNavbar />
      <Banner netflixMovies={movies[0].url} />

      <PageContentsDiv>
        {movies.map((request, index) =>
          request.heading === "NETFLIX ORIGINALS" ? (
            <PostersRow
              key={index}
              title={request.heading}
              fetchUrl={request.url}
              large
            />
          ) : (
            <PostersRow
              key={index}
              title={request.heading}
              fetchUrl={request.url}
            />
          )
        )}
      </PageContentsDiv>
    </HomePageDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectUpdatedMovies,
});

export default connect(mapStateToProps)(NetflixPage);
