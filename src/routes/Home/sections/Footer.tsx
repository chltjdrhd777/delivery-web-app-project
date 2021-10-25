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
              <a href="#" className="sm-link fab fa-twitter"></a>
              <a href="#" className="sm-link fab fa-facebook-square"></a>
              <a href="#" className="sm-link fab fa-instagram"></a>
              <a href="#" className="sm-link fab fa-pinterest"></a>
              <a href="#" className="sm-link fab fa-tripadvisor"></a>
            </div>
          </FooterSocial>
        </FooterContent>
      </B.Container>
    </Footer>
  );
}

export default index;
