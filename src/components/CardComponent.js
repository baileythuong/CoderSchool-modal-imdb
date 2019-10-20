import React, { Component } from "react";
import Moment from "react-moment";

// import { Div } from "react-bootstrap";

function CardComponent(props) {
  const topMovies = props.TopTwenty;

  return (
    <div id="allCards" class="row">
      {topMovies.map(movie => {
        return (
          <div key={movie.id} class="cellphone-container">
            <div class="movie">
              <div class="menu">
                <i class="material-icons"></i>
              </div>
              <div>
                <img
                  class="movie-img"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                ></img>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1"></div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5></h5>
                  </div>
                  <div class="col2">
                    <ul class="movie-likes">
                      <li>{/* <i class="material-icons">&#xE813;</i>124 */}</li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-actors"></p>{" "}
                    <p class="movie-vote">Rating {movie.vote_average}</p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-popularity">
                      {movie.title}{" "}
                      <Moment format="YYYY">{movie.release_date}</Moment>
                    </p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <h3>
                        <i class="fa fa-play"></i>
                        WATCH TRAILER
                      </h3>
                    </div>
                  </div>
                  <div class="col6 action-btn">
                    <i class="fa fa-save"></i>
                  </div>
                  <div class="col6 action-btn">
                    <i class="fa fa-bookmark"></i>
                  </div>
                  <div class="col6 action-btn">
                    <i class="fa fas fa-share-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardComponent;
