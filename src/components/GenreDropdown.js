import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

class GenreDropdown extends Component {
  render() {
    return (
      <Dropdown
        onClick={e => {
          if (e.target.className === "dropdown-item") {
            e.stopPropagation();
          } else {
            this.props.resetGenres();
          }
        }}
        onSelect={event => {
          this.props.filterGenres(event);
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort Genre
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="28">Action</Dropdown.Item>
          <Dropdown.Item eventKey="12">Adventure</Dropdown.Item>
          <Dropdown.Item eventKey="16">Animation</Dropdown.Item>
          <Dropdown.Item eventKey="35">Comedy</Dropdown.Item>
          <Dropdown.Item eventKey="80">Crime</Dropdown.Item>
          <Dropdown.Item eventKey="18">Drama</Dropdown.Item>
          <Dropdown.Item eventKey="10751">Family</Dropdown.Item>
          <Dropdown.Item eventKey="14">Fantasy</Dropdown.Item>
          <Dropdown.Item eventKey="36">History</Dropdown.Item>
          <Dropdown.Item eventKey="27">Horror</Dropdown.Item>
          <Dropdown.Item eventKey="10749">Romance</Dropdown.Item>
          <Dropdown.Item eventKey="878">Science Fiction</Dropdown.Item>
          <Dropdown.Item eventKey="53">Thriller</Dropdown.Item>
          <Dropdown.Item eventKey="10752">War</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GenreDropdown;
