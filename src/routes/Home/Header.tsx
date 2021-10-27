import React, { useState } from "react";
import { Header, Nav, Logo, HambergerMenu, NavList } from "components/styled/Home.styled";
import { B } from "components/styled";
import { Link } from "react-router-dom";
import LogoImg from "assets/images/logo.png";
import Scroll, { useScroll } from "components/common/Scroll";

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollActive } = useScroll();

  return (
    <Header scrollActive={scrollActive} className={scrollActive ? "scrollActive" : ""}>
      <B.Container>
        <Nav menuOpen={menuOpen}>
          <Logo src={LogoImg} alt="logo" />

          <HambergerMenu menuOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </HambergerMenu>

          <NavList menuOpen={menuOpen}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="/offer" className="nav-link">
                Offers
              </a>
            </li>

            <li className="nav-item">
              <a href="/news" className="nav-link">
                News
              </a>
            </li>

            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </NavList>
        </Nav>
      </B.Container>
    </Header>
  );
}

export default HomeHeader;
