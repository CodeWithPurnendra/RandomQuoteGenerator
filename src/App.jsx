import { useState, useEffect } from "react";
import { FaQuoteLeft, FaSyncAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const json = await res.json();
      setQuote(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-card">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <FaQuoteLeft className="quote-icon" />
          <p className="quote-text">"{quote?.quote}"</p>
          <p className="author">— {quote?.author}</p>
        </>
      )}

      <button onClick={fetchQuote}>
        <FaSyncAlt className="refresh-icon" />
        New Quote
      </button>
    </div>
  );
}

export default App;
