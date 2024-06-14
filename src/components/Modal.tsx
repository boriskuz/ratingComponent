import RatingComponent from './RatingComponent';

const Modal = () => {
  return (
    <div className="modal">
      <h4 className="modal-title">Please Rate</h4>
      <RatingComponent />
      <p className="modal-text">Your feedback is very important for us.</p>
      <img className="logo" src="./images/logo.png" alt="logo" />
    </div>
  );
};

export default Modal;
