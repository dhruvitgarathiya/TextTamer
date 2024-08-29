import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const repeatCount = () => {
    let words = text.toLowerCase().match(/\b\w+\b/g);
    let count = {};
  
    if (words) {
      words.forEach((word) => {
        count[word] = (count[word] || 0) + 1;
      });
    }
  
    return count; // Return the count object
  };

  const handleUpClick = () => {
    console.log('upper case was clicked' + ' ' + ':' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log('lower case was clicked' + ' ' + ':' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = ''; // Set to an empty string to clear the text
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  };

  const wordCount = text.split(' ').length;
  const charCount = text.length;
  const readTime = 0.08 * wordCount;
  const repeatedWords = repeatCount();

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {wordCount} words and {charCount} characters
        </p>
        <p>{readTime} minutes to read</p>
        <p>Repeated words: {JSON.stringify(repeatedWords)}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};