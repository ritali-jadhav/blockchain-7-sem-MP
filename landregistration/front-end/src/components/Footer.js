import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// The import for react-icons (FaGithub, FaLinkedin, FaEnvelope) is no longer needed.
import "../styles.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 w-full mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              blockchain mini project
            </p>
            <p className="mb-0">
              ritalivjadhav@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;