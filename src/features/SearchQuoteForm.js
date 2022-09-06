import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuotes } from "../features/quoteSlice";

export const SearchQuoteForm = () => {
  const [tag, setTag] = useState("inspirational");
  const distpatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag) {
      distpatch(getQuotes(tag));
    }
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form-field"
          placeholder="Enter a tag here"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <button className="search-form-btn" type="submit">
          Search
        </button>
      </form>
      <p className="tags">
        <b>Search Tags:</b> life, humor, science, literature etc
      </p>
    </>
  );
};
