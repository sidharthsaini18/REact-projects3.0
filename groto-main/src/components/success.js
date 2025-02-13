import React from "react";
const Success = ({ setIsSuccess }) => {
  return (
    <div
      className="w-100 d-flex align-items-center position-fixed top-0 start-0"
      style={{ background: "rgba(0,0,0,0.5)", height: "100dvh", zIndex: 999 }}
    >
      <div class="modal show fade" tabindex="-1" style={{ display: "block" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Success</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Your Appoinment have been booked.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => setIsSuccess(false)}
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
