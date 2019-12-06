import React from "react";
import { tsPropertySignature } from "@babel/types";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Last update:
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
