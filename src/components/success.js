import React from "react";

const Success = ({ setIsSuccess, handleSaveChanges }) => {
  return (
    <div
      className="w-100 d-flex align-items-center position-fixed top-0 start-0"
      style={{ background: "rgba(0,0,0,0.5)", height: "100dvh", zIndex: 999 }}
    >
      <div
        className="modal show fade"
        tabindex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsSuccess(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Your Appointment has been booked.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
