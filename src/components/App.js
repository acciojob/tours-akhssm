import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import "../styles/App.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main className="no-tours">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-btn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
