import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const repeatCount = () => {
    let words = text.match(/\b\w+\b/g);
    let count = {};

    if (words) {
      words.forEach((word) => {
        count[word] = (count[word] || 0) + 1;
      });
    }

    return count; // Return the count object
  };

  const handleUpClick = () => {
    console.log(`Upper case was clicked: ${text}`);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log(`Lower case was clicked: ${text}`);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = ""; // Set to an empty string to clear the text
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  //copy fucntion
  const handleCopy = () => {
    console.log("i am the copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Fixed word count logic - only count actual words, not empty strings
  const wordCount =
    text.trim() === ""
      ? 0
      : text
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length;
  const charCount = text.length;
  const readTime = 0.08 * wordCount;
  const repeatedWords = repeatCount();

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1
          className="text-center mb-4"
          style={{
            background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1a1a1a",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light"
                  ? "2px solid #e0e0e0"
                  : "2px solid #404040",
              borderRadius: "15px",
              padding: "20px",
              fontSize: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              resize: "vertical",
              minHeight: "200px",
            }}
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
          <button
            className="btn btn-success"
            onClick={handleUpClick}
            style={{
              background: "linear-gradient(45deg, #28a745, #20c997)",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(40, 167, 69, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(40, 167, 69, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(40, 167, 69, 0.3)";
            }}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-success"
            onClick={handleLoClick}
            style={{
              background: "linear-gradient(45deg, #17a2b8, #6f42c1)",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(23, 162, 184, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(23, 162, 184, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(23, 162, 184, 0.3)";
            }}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-success"
            onClick={handleClearClick}
            style={{
              background: "linear-gradient(45deg, #dc3545, #fd7e14)",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(220, 53, 69, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(220, 53, 69, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(220, 53, 69, 0.3)";
            }}
          >
            Clear Text
          </button>
          <button
            className="btn btn-success"
            onClick={handleCopy}
            style={{
              background: "linear-gradient(45deg, #ffc107, #fd7e14)",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(255, 193, 7, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(255, 193, 7, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(255, 193, 7, 0.3)";
            }}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            borderRadius: "20px",
            padding: "30px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            className="text-center mb-4"
            style={{
              background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Your Text Summary
          </h1>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div
                style={{
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                }}
              >
                <h3>{wordCount}</h3>
                <p className="mb-0">Words</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div
                style={{
                  background: "linear-gradient(45deg, #f093fb, #f5576c)",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(240, 147, 251, 0.3)",
                }}
              >
                <h3>{charCount}</h3>
                <p className="mb-0">Characters</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div
                style={{
                  background: "linear-gradient(45deg, #4facfe, #00f2fe)",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(79, 172, 254, 0.3)",
                }}
              >
                <h3>{readTime.toFixed(2)}</h3>
                <p className="mb-0">Minutes to Read</p>
              </div>
            </div>
          </div>

          {Object.keys(repeatedWords).length > 0 && (
            <div className="mt-4">
              <h4
                className="text-center mb-3"
                style={{
                  color: props.mode === "light" ? "#333" : "#fff",
                  fontWeight: "600",
                }}
              >
                Repeated Words
              </h4>
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {Object.entries(repeatedWords).map(([word, count]) => (
                  <span
                    key={word}
                    style={{
                      display: "inline-block",
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      color: "white",
                      padding: "8px 16px",
                      margin: "4px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {word}: {count}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <h2
              className="text-center mb-3"
              style={{
                color: props.mode === "light" ? "#333" : "#fff",
                fontWeight: "600",
              }}
            >
              Preview
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "15px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                minHeight: "100px",
              }}
            >
              <p
                className="mb-0"
                style={{
                  lineHeight: "1.6",
                  fontSize: "16px",
                }}
              >
                {text || "Your text will appear here..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
