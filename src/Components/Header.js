import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  title: {
    fontFamily: "Courier New",
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "white",
    marginLeft: "25px",
    marginRight: "30px",
    padding: "0",
  },
  login: {
    fontFamily: "Courier New",
    marginLeft: "0",
    marginRight: "-5",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  signup: {
    fontFamily: "Courier New",
    margin: "0",
    marginRight: "55px",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  logo: {
    marginLeft: "5px",
    width: "200px",
    height: "50px",
  },
  userlogo: {
    marginLeft: "0px",
    width: "30px",
    height: "30px",
    marginTop: "7px",
  },
  navbar: {
    backgroundColor: "darkblue",
    position: "top",
  },
};
const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-light " style={styles.navbar}>
        <div class="container-fluid topcolor">
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="/" class="nav-item nav-link active" style={styles.title}>
                <i><u>Medical Insurance</u></i>
              </a>
              <a href="/" class="nav-item nav-link" style={styles.title}>
                Home
              </a>
              <a href="/" class="nav-item nav-link" style={styles.title}>
                About
              </a>
              <a href="/" class="nav-item nav-link" style={styles.title}>
                Contact Us
              </a>
            </div>
            <div class="navbar-nav ms-auto">
              {/* <a href="/" style={styles.login} class="nav-item nav-link">
                Login{" "}
              </a> */}
              <label
                style={{ color: "white", fontWeight: "bold", marginTop: "8px" }}
              >
                {/* | */}
              </label>
              {/* <a href="/" style={styles.signup} class="nav-item nav-link">
                Signup
              </a> */}
              <a href="/" style={{ marginRight: '10px' }}>
                <img
                  src={require("../images/meity_logo.png")}
                  style={styles.userlogo}
                  alt="CoolBrand"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
