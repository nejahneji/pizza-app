import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1 className="title">Company data</h1>
        <p>
          Olive Hospitality OÜ
          <br /> Endla st 23, Tallinn 10122, Estonia
          <br /> Reg. no. 11192283
          <br /> VAT no. EE101036452
        </p>
        <h1 className="title">Contact Us</h1>
        <p>
          La Cucina Restaurant & Pizzeria
          <br />
          Phone: +372 666 4817
          <br />
          Reservations: fb.kwh@uhotelsgroup.com
          <br />
          Open Mon-Sat 12:00-22:00 and Sun 18:00-22:00.
        </p>
        <div className="wrapper">
          <div className="icon instagram">
            <div className="tooltip">instagram</div>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          <div className="icon github">
            <div className="tooltip">Github</div>
            <span>
              <i className="fab fa-github"></i>
            </span>
          </div>
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
          </div>
          <div className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
          <div className="icon linkedin">
            <div className="tooltip">Linkedin</div>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>
      </div>
      <Link to="/UserDashbord">
        <i class="fas fa-pizza-slice fa-4x" id="contactbtn">
          pizza
        </i>
      </Link>
    </div>
  );
};

export default Contact;
