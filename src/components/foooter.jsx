import React from "react";
import { ReactComponent as DeveloperSvg } from "../images/svg/boba-software-developer-coding-with-two-monitors.svg";
import '../styles/footer.css';
import { ReactComponent as GrowArrowSvg } from "../images/svg/pablita-white-arrow.svg";
export default () => {
  return (
    <>
      <div className="footer">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
        <h2 className="logo" >CodeMaster</h2>
        <GrowArrowSvg className="GrowthArrow" style={{ width: 250, height: 250 }} />
        </div>
        <div className="developer">
          <DeveloperSvg style={{ width: 300, height: 300 }} />
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Ali Hamza ❤️</p>
      </div>
      
    </>
  );
};
