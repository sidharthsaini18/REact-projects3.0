import React, { useEffect, useState } from "react";
import Card from "./cards";
import FilterCard from "./filtercard";
import propdata from "./mockdata.json";
import SkeletonCard from "./skeleton";
import { Outlet } from "react-router-dom";
const Main = () => {
  const [filters, setFilters] = useState({
    id: "",
    filter: "",
    order: "",
    search: "",
    price: { min: 0, max: Infinity },
    avg_ratings: 0,
  });

  const [isloading, setIsloading] = useState(false);

  // Function to sort propdata based on selected criteria and order
  const sortData = (data) => {
    const { filter, order } = filters;

    const { min, max } = filters.price;
    // Filter data based on price range
    data = data.filter((item) => item.price >= min && item.price <= max);
    if (filters.avg_ratings && filters.avg_ratings !== "") {
      data = data.filter((item) => item.avg_ratings >= filters.avg_ratings);
    }

    // Sort the filtered data based on selected criteria and order
    if (order === "hl") {
      return data.sort((a, b) => (a[filter] < b[filter] ? 1 : -1));
    } else if (order === "lh") {
      return data.sort((a, b) => (a[filter] > b[filter] ? 1 : -1));
    } else {
      return data;
    }
  };

  return (
    <>
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <div
            className="row height d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-md-10">
              <div className="form-search">
                <img src="./icons/search.svg" className="search" />

                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search for “Properties in Gurgaon sector 23”"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-lg-3 px-lg-5">
        <div className="row">
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="d-lg-block d-none ">
              <FilterCard setFilters={setFilters} setIsloading={setIsloading} />
            </div>
          </div>

          <div className="col-lg-9" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-between py-3">
              <button
                className="btn btn-lg bg-white shadaow-sm fs-5 px-4 py-3  rounded me-auto d-lg-none d-block "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="./icons/filter.svg" className="me-2" />
                Filters
              </button>

              {/* Sort Filters Start=================> */}
              <div className="dropdown ms-lg-auto">
                <button
                  className="btn btn-lg bg-white shadaow-sm fs-5 px-4 py-3  rounded ms-auto"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="./icons/sort.svg" className="me-2" />
                  Sort By
                </button>
                <ul
                  className="dropdown-menu border-0 shadow-sm rounded-0"
                  style={{ width: "300px" }}
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item lead ddhead fw-bold py-3"
                      href="#"
                      aria-disabled="true"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({ ...filters, order: "hl", filter: "price" })
                      }
                    >
                      High to Low
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({ ...filters, order: "lh", filter: "price" })
                      }
                    >
                      Low to High
                    </a>
                  </li>
                  <li style={{ opacity: "0.3" }}>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item lead ddhead fw-bold py-3"
                      href="#"
                      aria-disabled="true"
                    >
                      Plot Area
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          order: "hl",
                          filter: "plot_area",
                        })
                      }
                    >
                      High to Low
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          order: "lh",
                          filter: "plot_area",
                        })
                      }
                    >
                      Low to High
                    </a>
                  </li>
                  <li style={{ opacity: "0.3" }}>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item lead ddhead fw-bold py-3"
                      href="#"
                    >
                      Ratings
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          order: "hl",
                          filter: "avg_ratings",
                        })
                      }
                    >
                      High to Low
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pb-3 text-muted"
                      href="#"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          order: "lh",
                          filter: "avg_ratings",
                        })
                      }
                    >
                      Low to High
                    </a>
                  </li>
                </ul>
              </div>
              {/* Sort FIlters End=================> */}
            </div>

            {!isloading && (
              <>
                {sortData(
                  propdata.filter((e) =>
                    e.name
                      .toLowerCase()
                      .includes(filters.search.toLocaleLowerCase())
                  )
                ).map((ini, i) => (
                  <Card key={ini.id} data={ini} id={ini.id} />
                ))}

                {sortData(
                  propdata.filter((e) =>
                    e.name
                      .toLowerCase()
                      .includes(filters.search.toLocaleLowerCase())
                  )
                ).length == 0 && (
                  <h4 className="display-6 fw-bold text-muted text-center py-5">
                    No data for that Search :P
                  </h4>
                )}
              </>
            )}

            {/* Skeleton loader Starts=========> */}
            {isloading && (
              <>
                {[...Array(7)].map((ini, i) => {
                  return <SkeletonCard key={i} />;
                })}
              </>
            )}
            {/* Skeleton loader Ends=========> */}
          </div>
        </div>
      </div>

      {/* Filter Modal Popup for mobile devices===============> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Advance Filters
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FilterCard setFilters={setFilters} setIsloading={setIsloading} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      {/* Filter Modal Popup for mobile devices===============> */}
    </>
  );
};

export default Main;
