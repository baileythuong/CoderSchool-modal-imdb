import React, { useEffect, useState, Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from "./components/MainNavBar.js";
import MovieSidebar from "./components/MovieSidebar.js";
import CardComponent from "./components/CardComponent.js";
import MoviePagination from "./components/MoviePagination.js";
import GenreDropdown from "./components/GenreDropdown.js";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [TopTwenty, setTopTwenty] = useState([]);
  const [Error, setError] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [ratingVal, setRatingVal] = useState({ min: 0, max: 10 });
  const [yearVal, setYearVal] = useState({ min: 1960, max: 2020 });
  const [categories, setCategories] = useState("now_playing");

  function incrementPageNo() {
    getMovieData();
  }

  const onYearSliderChange = val => {
    if (val.max > yearVal.max || val.min < yearVal.min) {
      setTopTwenty(allMovies);
      setYearVal(val);
    } else {
      const newMovies = TopTwenty.filter(movie => {
        const isAboveMinimumYear =
          Number(movie.release_date.split("-")[0]) > val.min;
        const isBelowMaximumYear =
          Number(movie.release_date.split("-")[0]) < val.max;
        return isAboveMinimumYear && isBelowMaximumYear;
      });
      setTopTwenty(newMovies);
      setYearVal(val);
    }

    if (categories === "popular") {
      if (val.max > yearVal.max || val.min < yearVal.min) {
        setTopTwenty(PopularMovies);
        setYearVal(val);
      } else {
        const newMovies = PopularMovies.filter(movie => {
          const isAboveMinimumYear =
            Number(movie.release_date.split("-")[0]) > val.min;
          const isBelowMaximumYear =
            Number(movie.release_date.split("-")[0]) < val.max;
          return isAboveMinimumYear && isBelowMaximumYear;
        });

        setTopTwenty(newMovies);
        setYearVal(val);
      }
    }

    if (categories === "top_rated") {
      if (val.max > yearVal.max || val.min < yearVal.min) {
        setTopTwenty(TopRatedMovies);
        setYearVal(val);
      } else {
        const newMovies = TopRatedMovies.filter(movie => {
          const isAboveMinimumYear =
            Number(movie.release_date.split("-")[0]) > val.min;
          const isBelowMaximumYear =
            Number(movie.release_date.split("-")[0]) < val.max;
          return isAboveMinimumYear && isBelowMaximumYear;
        });

        setTopTwenty(newMovies);
        setYearVal(val);
      }
    }

    if (categories === "upcoming") {
      if (val.max > yearVal.max || val.min < yearVal.min) {
        setTopTwenty(UpcomingMovies);
        setYearVal(val);
      } else {
        const newMovies = UpcomingMovies.filter(movie => {
          const isAboveMinimumYear =
            Number(movie.release_date.split("-")[0]) > val.min;
          const isBelowMaximumYear =
            Number(movie.release_date.split("-")[0]) < val.max;
          return isAboveMinimumYear && isBelowMaximumYear;
        });

        setTopTwenty(newMovies);
        setYearVal(val);
      }
    }
  };

  const onRatingSliderChange = val => {
    if (categories === "now_playing") {
      if (val.max > ratingVal.max || val.min < ratingVal.min) {
        setTopTwenty(allMovies);
        setRatingVal(val);
      } else {
        const newMovies = TopTwenty.filter(movie => {
          const isAboveMinimumRating = movie.vote_average > val.min;
          const isBelowMaximumRating = movie.vote_average < val.max;
          return isAboveMinimumRating && isBelowMaximumRating;
        });
        setTopTwenty(newMovies);
        setRatingVal(val);
      }
    }

    if (categories === "popular") {
      if (val.max > ratingVal.max || val.min < ratingVal.min) {
        setTopTwenty(PopularMovies);
        setRatingVal(val);
      } else {
        const newMovies = PopularMovies.filter(movie => {
          const isAboveMinimumRating = movie.vote_average > val.min;
          const isBelowMaximumRating = movie.vote_average < val.max;
          return isAboveMinimumRating && isBelowMaximumRating;
        });

        setTopTwenty(newMovies);
        setRatingVal(val);
      }
    }

    if (categories === "top_rated") {
      if (val.max > ratingVal.max || val.min < ratingVal.min) {
        setTopTwenty(TopRatedMovies);
        setRatingVal(val);
      } else {
        const newMovies = TopRatedMovies.filter(movie => {
          const isAboveMinimumRating = movie.vote_average > val.min;
          const isBelowMaximumRating = movie.vote_average < val.max;
          return isAboveMinimumRating && isBelowMaximumRating;
        });

        setTopTwenty(newMovies);
        setRatingVal(val);
      }
    }

    if (categories === "upcoming") {
      if (val.max > ratingVal.max || val.min < ratingVal.min) {
        setTopTwenty(UpcomingMovies);
        setRatingVal(val);
      } else {
        const newMovies = UpcomingMovies.filter(movie => {
          const isAboveMinimumRating = movie.vote_average > val.min;
          const isBelowMaximumRating = movie.vote_average < val.max;
          return isAboveMinimumRating && isBelowMaximumRating;
        });

        setTopTwenty(newMovies);
        setRatingVal(val);
      }
    }
  };

  function getCategories(selected) {
    setCategories(selected);
    getPopularMovies(selected);
    getTopRatedMovies(selected);
    getUpcomingMovies(selected);
    return selected;
  }

  function resetGenres(e) {
    console.log("reset", e);
    if (categories === "now_playing") {
      setTopTwenty(allMovies);
    }
    if (categories === "popular") {
      setTopTwenty(PopularMovies);
    }
    if (categories === "top_rated") {
      setTopTwenty(TopRatedMovies);
    }
    if (categories === "upcoming") {
      setTopTwenty(UpcomingMovies);
    }
  }

  function filterGenres(selected) {
    if (categories === "now_playing") {
      const newMovies = TopTwenty.filter(movie =>
        movie.genre_ids.includes(Number(selected))
      );
      setTopTwenty(newMovies);
    }

    if (categories === "popular") {
      const newMovies = PopularMovies.filter(movie =>
        movie.genre_ids.includes(Number(selected))
      );
      setTopTwenty(newMovies);
    }

    if (categories === "top_rated") {
      const newMovies = TopRatedMovies.filter(movie =>
        movie.genre_ids.includes(Number(selected))
      );
      setTopTwenty(newMovies);
    }
    if (categories === "upcoming") {
      const newMovies = UpcomingMovies.filter(movie =>
        movie.genre_ids.includes(Number(selected))
      );
      setTopTwenty(newMovies);
    }
  }

  const getPopularMovies = async selected => {
    const API_KEY = "ff8f8b6a55b20e4c53b44df5b735121e";
    const url = `https://api.themoviedb.org/3/movie/${selected}?api_key=${API_KEY}&language=en-US&page=${1}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newTopTwenty = data.results;
      setTopTwenty(newTopTwenty);
      setPopularMovies(newTopTwenty);
    } catch (error) {
      setError(true);
    }
  };

  const getUpcomingMovies = async selected => {
    const API_KEY = "ff8f8b6a55b20e4c53b44df5b735121e";
    const url = `https://api.themoviedb.org/3/movie/${selected}?api_key=${API_KEY}&language=en-US&page=${1}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newTopTwenty = data.results;
      setTopTwenty(newTopTwenty);
      setUpcomingMovies(newTopTwenty);
    } catch (error) {
      setError(true);
    }
  };

  const getTopRatedMovies = async selected => {
    const API_KEY = "ff8f8b6a55b20e4c53b44df5b735121e";
    const url = `https://api.themoviedb.org/3/movie/${selected}?api_key=${API_KEY}&language=en-US&page=${1}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newTopTwenty = data.results;
      setTopTwenty(newTopTwenty);
      setTopRatedMovies(newTopTwenty);
    } catch (error) {
      setError(true);
    }
  };

  const getMovieData = async () => {
    const API_KEY = "ff8f8b6a55b20e4c53b44df5b735121e";
    const url = `https://api.themoviedb.org/3/movie/${categories}?api_key=${API_KEY}&language=en-US&page=${pageNum}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newTopTwenty = TopTwenty.concat(data.results);
      setTopTwenty(newTopTwenty);
      setAllMovies(newTopTwenty);
      setPageNum(pageNum + 1);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(getMovieData, []);

  function searchMovies(term) {
    if (categories === "popular") {
      if (term === "") {
        setTopTwenty(PopularMovies);
        return;
      }
    }
    if (categories === "upcoming") {
      if (term === "") {
        setTopTwenty(UpcomingMovies);
        return;
      }
    }
    if (categories === "top_rated") {
      if (term === "") {
        setTopTwenty(TopRatedMovies);
        return;
      }
    }

    if (term === "") {
      setTopTwenty(allMovies);
      return;
    }

    const filteredTitles = TopTwenty.filter(movie => {
      if (movie.title.toLowerCase().includes(term.toLowerCase())) {
        return true;
      }
      return false;
    });

    setTopTwenty(filteredTitles);
  }

  const wrapperStyleSearch = { width: 400, margin: 50 };
  const wrapperStyleRange = { width: 140, margin: 50 };

  return (
    <div className="App">
      <div className="main-container">
        {Error && <h1>My bad</h1>}
        <MainNavBar />
        <GenreDropdown resetGenres={resetGenres} filterGenres={filterGenres} />

        <div className="row">
          <div
            id="rangeSlider"
            className="mx-auto d-flex"
            style={wrapperStyleRange}
          >
            <div className="col-md-12">
              <h3 style={{ color: "white" }} className="pb-1 ">
                Year
              </h3>

              <InputRange
                maxValue={2020}
                minValue={1960}
                value={yearVal}
                onChange={value => onYearSliderChange(value)}
              />
            </div>
            <div className="col-md-12">
              <h3 style={{ color: "white" }} className="pb-1">
                Rating
              </h3>

              <InputRange
                maxValue={10}
                minValue={0}
                value={ratingVal}
                onChange={value => onRatingSliderChange(value)}
              />
            </div>
          </div>
        </div>
        <div className="search">
          <div id="custom-search-input mx-auto" style={wrapperStyleSearch}>
            <div className="input-group col-md-12">
              <input
                name="search"
                type="text"
                onChange={event => searchMovies(event.target.value)}
                className="form-control input-lg"
                placeholder="Find movies..."
              />
              <span className="input-group-btn">
                <button className="btn btn-info btn-lg" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="searchContainer">
          <div className="row"></div>
        </div>
        <MovieSidebar id="sidebar" getCategories={getCategories}></MovieSidebar>
        <div className="card-container">
          <div>{TopTwenty && <CardComponent TopTwenty={TopTwenty} />}</div>
        </div>
        {categories === "now_playing" && (
          <div id="button">
            <button
              id="seeMore"
              onClick={incrementPageNo}
              className="mx-auto btn btn-primary"
            >
              See more
            </button>
          </div>
        )}
        {categories !== "now_playing" && (
          <div id="pagination">
            <MoviePagination />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
