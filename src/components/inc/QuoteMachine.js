import React, { useState, useEffect } from 'react';
import './QuoteMachine.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); 

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="quote-machine">
      <div className="quote-container">
        <blockquote>
          <h1>Random Quote Machine</h1>
          <p>"{quote}"</p>
          <footer>{author}</footer>
        </blockquote>
      </div>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
};

export default QuoteMachine;