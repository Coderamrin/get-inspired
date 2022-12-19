import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "./features/quoteSlice";
import { themeChanged } from "./features/themeSlice";

import { SearchQuoteForm } from "./features/SearchQuoteForm";
import { QuoteItems } from "./features/QuoteItems";

import Loader from "../src/assets/loader.gif";

function App() {
  const { quotes, loading } = useSelector((state) => state.quotes);
  const theme = useSelector((state) => state.theme);
  console.log(theme.darkmode);

  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getQuotes("inspirational"));
  }, [distpatch]);

  const onChangeThemeClicked = () => {
    distpatch(themeChanged());
  };

  if (theme.darkmode === true) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }

  //Add a case for when tag is empty.
  return (
    <div className="container">
      <div className="header">
        {/* <button onClick={onChangeThemeClicked}>
          {theme.darkmode ? "light mode" : "dark mode"}
        </button> */}

        <h1>Get Inspired</h1>
        <p className="quote-info">
          Inspired by{" "}
          <a href="https://50hacks.co/" target="_blank" rel="noreferrer">
            50hacks
          </a>
          . Powered by{" "}
          <a
            href="https://github.com/lukePeavey/quotable"
            target="_blank"
            rel="noreferrer"
          >
            Quotable.
          </a>{" "}
          Made by{" "}
          <a
            href="https://twitter.com/CoderAmrin"
            target="_blank"
            rel="noreferrer"
          >
            Amrin
          </a>
        </p>

        <SearchQuoteForm />
      </div>

      {loading ? (
        <div className="loading-img">
          {" "}
          <img src={Loader} alt="" />
        </div>
      ) : (
        <QuoteItems quotes={quotes} />
      )}
    </div>
  );
}

export default App;
