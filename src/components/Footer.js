import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const aboutLinks = [
    {
      display: "Womens",
      path: "/about",
    },
    {
      display: "Clothing",
      path: "/about",
    },
    {
      display: "Accessories",
      path: "/about",
    },
    {
      display: "Featured",
      path: "/about",
    },
  ];

  const customerLinks = [
    {
      display: "Shipping & Return",
      path: "/about",
    },
    {
      display: "Secure Shopping",
      path: "/about",
    },
    {
      display: "Gallary",
      path: "/about",
    },
    {
      display: "Affiliates",
      path: "/about",
    },
    {
      display: "Contacts",
      path: "/about",
    },
  ];
  const socials = [
    {
      display: "bx bxl-facebook",
    },
    {
      display: "bx bxl-google-plus",
    },
    {
      display: "bx bxl-twitter",
    },
    {
      display: "bx bxl-instagram",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <Row md="4" sm="2" xs="1">
          <div>
            <div className="footer__logo">
              <Link to="#">OutStock</Link>
            </div>
            <div className="footer__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="footer__social">
                {socials.map((item, index) => (
                  <i className={item.display} key={index}></i>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="footer__title">MY ACCOUNT</div>
            <div className="footer__content">
              <ul>
                {aboutLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="footer__title">WHY WE CHOOSE</div>
            <div className="footer__content">
              <ul>
                {customerLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="footer__title">KNOW IT ALL FIRST!</div>
            <div className="footer__subscribe">
              <input
                className="footer__subscribe__input"
                type="email"
                placeholder="Enter your email"
              />
              <button className="footer__subscribe__btn">Subscribe</button>
            </div>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
