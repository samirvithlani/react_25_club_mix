import React from "react";
import { Link } from "react-router-dom";

export const Shows = () => {
  const shows = [
    {
      id: 1,
      showName: "Money Heist",
      rating: 9.0,
      year: 2023,
    },
    {
      id: 2,
      showName: "Squid Game",
      rating: 8.6,
      year: 2025,
    },
    {
      id: 3,
      showName: "Breaking Bad",
      rating: 10.0,
      year: 2016,
    },
  ];
  return (
    <div>
      <h1>SHOW COMPONENT</h1>
      <div className="container">
        <div className="row">
          {shows.map((show) => {
            return (
              <div
                className="card"
                style={{
                  height: "200px",
                  widows: "200px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <h3>TITLE : {show.showName}</h3>
                <p>Year:{show.year}</p>
                <p>Ratings: {show.rating}</p>
                <Link
                  to={`/shows/playshow/${show.showName}`}
                  className="btn btn-warning"
                >
                  WATCH
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
