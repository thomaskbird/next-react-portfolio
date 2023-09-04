import { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitSearch = (evt: any) => {
    // todo: Find better way to redirect
    window.location.href = `/search/${searchTerm}`;
    evt.preventDefault();
  };

  const handleChange = (evt: any) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <form onSubmit={(evt: any) => submitSearch(evt)}>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Enter search..."
          name="term"
          type="text"
          value={searchTerm}
          onChange={(event) => handleChange(event)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </span>
      </div>
    </form>
  );
};

export default SearchForm;
