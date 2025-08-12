import React, { useState } from "react";

const Filterbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(search);
  };

  return (
    <form className="d-flex align-items-center " onSubmit={handleSearch}>
      <div class="form-floating  w-100 ">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button className="btn btn-lg btn-primary py-2">Search</button>
    </form>
  );
};

export default Filterbar;
