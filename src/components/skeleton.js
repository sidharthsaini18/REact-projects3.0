import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <div className="card mb-4 w-100 border-0 shadow-sm rounded-3 bg-white" data-aos="fade-up">
        <div className="row g-0">
          <div className="col-lg-4">
            <div className="d-block w-100 rounded-start border-dark skeleton" alt="..." loading="eager" style={{ height: "350px" }} />
          </div>

          <div className="col-lg-8 px-3 py-3 ">
            <div className="card-body " style={{ minHeight: "220px" }}>
              <div className="w-100 d-lg-flex align-items-center justify-content-between mb-2">
                <h5 className="skeleton skeleton-text me-3"></h5>
                <h5 className="skeleton skeleton-text"></h5>
              </div>

              <div className="w-100 mt-5" style={{ height: "150px" }}>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text"></p>
                <p className="skeleton skeleton-text w-75"></p>
              </div>

              <div className="btm-text d-flex align-items-center justify-content-between  pb-2 w-100">
                <p className="skeleton skeleton-text me-2"></p>
                <p className="skeleton skeleton-text me-2"></p>
                <p className="skeleton skeleton-text me-2"></p>
                <p className="skeleton skeleton-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
