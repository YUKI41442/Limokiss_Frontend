import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1D", padding: "30px" }}>
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <h5 className="text-white blockquote">QUICK LINKS</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="category?c=Women" className="footer-link blockquote-footer">
                  Women
                </Link>
              </li>
              <li>
                <Link to="category?c=Men" className="footer-link blockquote-footer">
                  Men
                </Link>
              </li>
              <li>
                <Link to="category?c=Baby" className="footer-link blockquote-footer">
                  Baby
                </Link>
              </li>
              <li>
                <Link to="category?c=Kids" className="footer-link blockquote-footer">
                  Kids
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Information */}
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <h5 className="text-white">INFORMATION</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="#" className="footer-link blockquote-footer">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link blockquote-footer">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link blockquote-footer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <h5 className="text-white">COMPANY</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="#contact-us" className="footer-link blockquote-footer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <h5 className="text-white">GET IN TOUCH</h5>
            <form className="d-flex mt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-btn btn-outline-warning">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        

        {/* Copyright */}
        <div className="text-center mt-3 text-white">
          &copy; {new Date().getFullYear()} Limokiss Outlet. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #FCC737;
          cursor: pointer;
          transform: translateY(-5px, 0); 
          transition: all 0.3s ease; 
        }
      `}</style>
    </footer>
  );
}

export default Footer;
