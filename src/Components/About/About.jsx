import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About(props) {
  return (
    <div
      className="container my-5"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div
        style={{
          background:
            props.mode === "light"
              ? "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          borderRadius: "25px",
          padding: "40px",
          backdropFilter: "blur(10px)",
          border:
            props.mode === "light"
              ? "1px solid rgba(0,0,0,0.1)"
              : "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            props.mode === "light"
              ? "0 8px 32px rgba(0,0,0,0.1)"
              : "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          className="text-center mb-5"
          style={{
            background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          About TextTamer
        </h1>

        <div
          className="accordion"
          id="accordionExample"
          style={{
            background: "transparent",
          }}
        >
          <div
            className="accordion-item mb-3"
            style={{
              background:
                props.mode === "light"
                  ? "rgba(0,0,0,0.05)"
                  : "rgba(255,255,255,0.1)",
              border:
                props.mode === "light"
                  ? "1px solid rgba(0,0,0,0.1)"
                  : "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                About the Website
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  background:
                    props.mode === "light"
                      ? "rgba(0,0,0,0.02)"
                      : "rgba(255,255,255,0.05)",
                  padding: "25px",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                <strong>TextTamer</strong> is a versatile text utility web
                application built using React.js, a popular JavaScript library
                for building user interfaces. As my first React project,
                TextTamer aims to provide users with a comprehensive set of
                tools to manipulate and analyze their text effortlessly.
              </div>
            </div>
          </div>

          <div
            className="accordion-item mb-3"
            style={{
              background:
                props.mode === "light"
                  ? "rgba(0,0,0,0.05)"
                  : "rgba(255,255,255,0.1)",
              border:
                props.mode === "light"
                  ? "1px solid rgba(0,0,0,0.1)"
                  : "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  background: "linear-gradient(45deg, #f093fb, #f5576c)",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                Key Features
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  background:
                    props.mode === "light"
                      ? "rgba(0,0,0,0.02)"
                      : "rgba(255,255,255,0.05)",
                  padding: "25px",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #667eea, #764ba2)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Convert text to uppercase or lowercase
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #f093fb, #f5576c)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Copy text to clipboard
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #4facfe, #00f2fe)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Clear text area instantly
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #43e97b, #38f9d7)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Word frequency analysis
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #fa709a, #fee140)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Dark/Light mode toggle
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background:
                              "linear-gradient(45deg, #a8edea, #fed6e3)",
                            color: "white",
                            padding: "5px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            marginRight: "10px",
                          }}
                        >
                          ✓
                        </span>
                        Reading time estimation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="accordion-item mb-3"
            style={{
              background:
                props.mode === "light"
                  ? "rgba(0,0,0,0.05)"
                  : "rgba(255,255,255,0.1)",
              border:
                props.mode === "light"
                  ? "1px solid rgba(0,0,0,0.1)"
                  : "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  background: "linear-gradient(45deg, #4facfe, #00f2fe)",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                Tech Stack
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  background:
                    props.mode === "light"
                      ? "rgba(0,0,0,0.02)"
                      : "rgba(255,255,255,0.05)",
                  padding: "25px",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div
                      style={{
                        background: "linear-gradient(45deg, #667eea, #764ba2)",
                        borderRadius: "15px",
                        padding: "20px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <h5>React.js</h5>
                      <p className="mb-0">
                        Modern UI library for building interactive interfaces
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div
                      style={{
                        background: "linear-gradient(45deg, #f093fb, #f5576c)",
                        borderRadius: "15px",
                        padding: "20px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <h5>Bootstrap</h5>
                      <p className="mb-0">
                        Responsive CSS framework for modern design
                      </p>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: "20px" }}>
                  <strong>Built with React:</strong> TextTamer leverages the
                  power of React.js to create a dynamic and responsive user
                  interface. By breaking down the application into reusable
                  components, I was able to create a modular and maintainable
                  codebase. React's virtual DOM and efficient rendering
                  algorithms ensure that the application remains fast and
                  responsive, even with complex text manipulations.
                </p>
                <p>
                  <strong>Customizable and Extensible:</strong> The application
                  is designed to be easily customizable and extensible. Users
                  can modify the appearance and behavior of the application by
                  adjusting the CSS styles and React components. Additionally,
                  new features can be added to the application by extending the
                  existing functionality or creating new components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};
