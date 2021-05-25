import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import "./styles.css";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */

/**
 * Our React component where we display data
 * -----------------------------
 */

function App() {
  const [loading, setLoading] = useState(false);

  const [booksList, setBooksList] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Loading state - true
      const { data } = await axios.get(
        "https://www.anapioficeandfire.com/api/books?pageSize=30"
      );
      setBooksList(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    // Loading state - false
    return null;
  };

  const booksToRender = booksList.map((book) => (
    <Card key={book.isbn} data={book} />
  ));

  return (
    <div className="App">
      <div className="page-deets">
        <h2>Fetch & list data from api.</h2>
        <ul>
          <li>Create reusable card component</li>
          <li>Create a button - Fetch Data</li>
          <li>
            onClick - all the data from api should be displayed in that reusable
            card component
          </li>
          <li>API - https://www.anapioficeandfire.com/api/books?pageSize=30</li>
        </ul>
      </div>

      <button onClick={fetchData}>Fetch Data</button>
      <br />
      {loading
        ? "Data loading...please wait!"
        : booksList.length > 0 && (
            <div className="data--container">{booksToRender}</div>
          )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
