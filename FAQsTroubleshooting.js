
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./FAQsTroubleshooting.css"; 

const FAQsTroubleshooting = () => {
  return (
    <div className="container mt-5">
      <div className="mb-4">
        <div className="card">
          <div className="card-header border">
            <h5 className="mb-0 fw-bold fs-1">FAQS</h5>
          </div>
          <div className="card-body">
            <p>No FAQs available at the moment.</p>
          </div>
        </div>
      </div>

      
      <div>
        <div className="card">
          <div className="card-header">
            <Link to="/hctroubleshooting" className="text-dark">
            <h5 className="mb-0 fs-1 fw-bold">Trouble Shooting</h5>
            </Link>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>
                <a href="#loginHelp" className="fs-5 text-dark">Help To Login</a> 
              </li>
              <li>
                <a href="#clearCache" className="fs-5 text-dark">Clear Your Cache & Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsTroubleshooting;














