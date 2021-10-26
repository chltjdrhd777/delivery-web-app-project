import React from "react";
import { B } from "components/styled";
import { Footer, FooterBrand, FooterContent, FooterSocial } from "components/styled/Home.styled";
import { Link } from "react-router-dom";
import FooterLogo from "assets/images/logo.png";

function index() {
  return (
    <Footer>
      <B.Container>
        <FooterContent>
          <FooterBrand>
            <Link to="/" className="logo">
              <img src={FooterLogo} alt="" />
            </Link>

            <B.P>
              Every Rooms are availalbe. Please enjoy and use your chance to remain your mind
            </B.P>
          </FooterBrand>

          <FooterSocial>
            <h4 className="footer-heading">Follow us</h4>
            <div className="social-media">
              <a href="/">
                <i className="sm-link fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="sm-link fab fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="sm-link fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="sm-link fab fa-pinterest"></i>
              </a>
              <a href="/">
                <i className="sm-link fab fa-tripadvisor"></i>
              </a>
            </div>
          </FooterSocial>
        </FooterContent>
      </B.Container>
    </Footer>
  );
}

export default index;
