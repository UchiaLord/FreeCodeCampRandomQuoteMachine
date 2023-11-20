import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuoteMachine.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

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

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">
        {quote}
      </div>
      <div id="author" className="quote-author">
        - {author}
      </div>
      <button id="new-quote" className="quote-button" onClick={handleNewQuote}>
        New Quote
      </button>
      <Link
        id="tweet-quote"
        className="quote-button"
        to="#"
        onClick={handleTweetQuote}
      >
        Tweet Quote
      </Link>
    </div>
  );
};

export default QuoteMachine;