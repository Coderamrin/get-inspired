import React from "react";

export const QuoteItems = ({ quotes }) => {
  return (
    <div>
      {quotes.map((item, i) => (
        <div key={i} className="quote-item">
          <p className="quote-content">
            <span className="quote-icon"></span> {item.content}
          </p>
          <div className="quote-info">
            <span className="quote-author">{item.author}</span>

            <span className="devider">|</span>

            <a
              href={`https://twitter.com/intent/tweet?text="${item.content}" — ${item.author} &hashtags=getInspired`}
              className="quote-share"
              target="_blank"
              rel="noreferrer"
            >
              Tweet
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
