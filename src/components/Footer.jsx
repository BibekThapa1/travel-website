import React from "react";
import footerImg from "../images/footerImg.webp";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="pt-4 col-12 col-sm-6">
          <h1 className="py-0 m-0">Contact Us</h1>
          <ul className="px-0 py-0">
            <li>
              {" "}
              <CgMail className="footer-icon-gmail" /> purbinepal11@gmail.com
            </li>
            <li>
              <FaWhatsapp className="footer-icon-gmail" /> +977-000000000
            </li>
          </ul>
        </div>
       
        <div className="links-section-footer pt-4 col-12 col-sm-6">
          <h1 className="py-0 m-0">Links</h1>
          <ul className="px-0 py-0">
            <li>
              {" "}
               Home
            </li>
            <li>Places</li>
            <li>
              Contact
            </li>
          </ul>
        </div>
       
        <div className="copyright-section col-12 col-lg-6 py-4">
          <p className="p-0 m-0 ">
            Copyright &copy; {currentDate} Purbi Nepal. All rights reserved.
          </p>
          <p>Made and Designed By Bibek Thapa</p>
          <p className="p-0 m-0">Terms & Conditions || Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
