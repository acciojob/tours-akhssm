import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import "../styles/App.css";
import toursData from "./toursData";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {

      const data = toursData;
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) return <Loading />;

  if (tours.length === 0) {
    return (
      <main id="main" className="no-tours">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-btn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main id="main">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
