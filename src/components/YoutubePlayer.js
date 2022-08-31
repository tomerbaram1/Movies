import { useState } from "react";
import "./youtubeplayer.css"

const YoutubePlayer = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Trailer
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Trailer</h2>
            {props.frame}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}

export default YoutubePlayer