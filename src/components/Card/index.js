import React from "react";
import "./card.css";

export default function Card({ data }) {
  const date = new Date(data.released);
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <div className="card--container">
      <a href={data.url}>
        {data.name} - {data.mediaType}
      </a>
      <span className="subtitle--text">
        {data.country} - {formattedDate}
      </span>
      <div>
        <span>Authors:</span>
        <span>{data.authors.join(", ")}</span>
      </div>
      <div>
        <span>Isbn:</span>
        <span>{data.isbn}</span>
      </div>
      <div>
        <span>Number of pages:</span>
        <span>{data.numberOfPages}</span>
      </div>
      <div>
        <span>Characters:</span>
        <span>{data.characters.length}</span>
      </div>
      <div>
        <span>Pov Characters:</span>
        <span>{data.characters.length}</span>
      </div>
    </div>
  );
}
