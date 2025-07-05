import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}`}
      style={{
        backgroundColor: props.mode === "dark" ? "#2d2d2d" : "#f8f9fa",
        borderBottom:
          props.mode === "dark" ? "1px solid #404040" : "1px solid #dee2e6",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: props.mode === "dark" ? "#ffffff" : "#000000",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: props.mode === "dark" ? "#ffffff" : "#000000",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                props.mode === "dark"
                  ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                  : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{
                  color: props.mode === "dark" ? "#ffffff" : "#000000",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/aboutus"
                style={{
                  color: props.mode === "dark" ? "#ffffff" : "#000000",
                }}
              >
                {props.aboutText}
              </a>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            style={{
              color: props.mode === "dark" ? "#ffffff" : "#000000",
            }}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{
                color: props.mode === "dark" ? "#ffffff" : "#000000",
                fontWeight: "500",
              }}
            >
              {props.mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "TextTamer",
  aboutText: "About Us",
};
