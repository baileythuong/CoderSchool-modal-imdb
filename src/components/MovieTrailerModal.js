import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function MovieTrailerModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiKey = "ff8f8b6a55b20e4c53b44df5b735121e";
  const [trailerData, setTrailerData] = useState(null);
  const getTrailer = async id => {
    const urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
    console.log("trailer", urlTrailer);

    const result = await fetch(urlTrailer);
    const trailerDataJson = await result.json();
    setTrailerData(trailerDataJson);
    console.log(trailerData);
  };

  return (
    <div>
      <div class="watch-btn">
        <Button
        variant="outline-danger"
        size="sm"
        type="button"
          onClick={() => {
            getTrailer(props.id);
            handleShow();
          }}
        >
          <i class="fa fa-play"></i> TRAILER
        </Button>
      </div>

      <div class="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body><iframe
            className="modal-content"
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${trailerData && trailerData.results[0].key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe></Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
