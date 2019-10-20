import React, { Component } from "react";
import logo from "../img/logo.png";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// import GenreDropdown from "../components/GenreDropdown.js";

class MovieSidebar extends Component {
  render() {
    return (
      <SideNav
        id="sidebar"
        defaultExpanded="true"
        onSelect={selected => {
          this.props.getCategories(selected);
        }}
      >
        <SideNav.Toggle />
        <div className="container-fluid">
          <img style={{ float: "left" }} id="logo" src={logo}></img>
          <h3
            id="dankMovies"
            style={{
              color: "#2b2b2b",
              paddingTop: "36px",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            DANK MOVIES
          </h3>
        </div>
        <SideNav.Nav defaultSelected="now_playing">
          <NavItem eventKey="now_playing">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Now playing</NavText>
          </NavItem>

          <NavItem eventKey="popular">
            <NavIcon>
              <i className="fa fa-fire" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Popular</NavText>
          </NavItem>

          <NavItem eventKey="top_rated">
            <NavIcon>
              <i className="fa fa-thumbs-up" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Top Rated</NavText>
          </NavItem>

          <NavItem eventKey="upcoming">
            <NavIcon>
              <i className="fa fa-rss-square " style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Upcoming</NavText>
          </NavItem>
          {/* <GenreDropdown getGenres={getGenres} /> */}
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default MovieSidebar;
