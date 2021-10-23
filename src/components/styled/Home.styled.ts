import styled from "@emotion/styled/macro";
import { B } from "components/styled";
import heroBack from "assets/images/hero_background.jpg";
import OfferImg from "assets/images/the_paradise_bg.jpg";

//# header
export const Header = styled(B.Header)`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(142, 68, 173, 0.85);
  z-index: 1000;
`;

export const Nav = styled(B.Nav)<{ menuOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-width: 80%;
`;

export const HambergerMenu = styled.div<{ menuOpen?: boolean }>`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.grayOne};
  position: relative;
  z-index: 1500;
  cursor: pointer;

  & .fa-times {
    display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
  }

  & .fa-bars {
    display: ${({ menuOpen }) => (menuOpen ? "none" : "block")};
  }
`;

export const NavList = styled(B.Ul)<{ menuOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(142, 68, 173, 1);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1400;
  opacity: ${({ menuOpen }) => (menuOpen ? 100 : 0)};
  transform: scale(${({ menuOpen }) => (menuOpen ? 1 : 0)});
  transition: opacity 0.5s;

  & .nav-item:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  & .nav-link {
    font-family: initial;
    display: block;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem;
  }
`;

//# main
//! hero //
export const Hero = styled(B.Section)`
  width: 100%;
  height: 100vh;
  background: url(${heroBack}) no-repeat center/cover;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: ${({ theme }) => theme.colors.purple};
    opacity: 0.5;
    z-index: -1;
  }
`;

export const MainHeading = styled.div`
  color: white;
  line-height: 1;
  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);
  margin-bottom: 2.5rem;

  & .title {
    font-size: 4.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & .subtitle {
    font-style: 3.6rem;
    font-weight: 300;
    font-family: "courgette", cursive;
  }
`;

//! booking //
export const Booking = styled(B.Section)`
  background-image: ${({ theme }) => theme.colors.gradient};

  .input-group {
    margin-bottom: 2rem;

    & label {
      display: block;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }

    & input,
    & select {
      outline: none;
      border: none;
      width: 100%;
      min-height: 4rem;
      padding: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.grayFour};
      letter-spacing: 2px;
      font-family: "Open Sans", sans-serif;
    }
  }
`;

export const Form = styled(B.Form)`
  & .dots {
    margin-left: 0.7rem;
  }
`;

//! Hotels //
export const Hotel = styled(B.Section)``;

export const HotelList = styled.div``;

export const HotelHeading = styled.h5`
  text-align: center;
  margin-bottom: 3rem;

  & .heading {
    display: block;
    font-size: 4rem;
    text-transform: uppercase;
  }

  & .sub-heading {
    font-size: 1.7rem;
    font-family: "Courgette", cursive;
    font-style: oblique;
    color: ${({ theme }) => theme.colors.grayThree};
  }
`;

//! Offer //
export const Offer = styled(B.Section)`
  background-image: ${({ theme }) => theme.colors.graidentTransparent}, url(${OfferImg});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OfferContent = styled.div`
  background-color: white;
  text-align: center;
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;

  & .offer-discount {
    background-color: ${({ theme }) => theme.colors.pointColorYello};
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    outline: 1px solid ${({ theme }) => theme.colors.indigo};
    outline-offset: 0.5rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.grayThree};
    font-size: 1.5rem;
    margin: 2.5rem;
  }
`;

//@ media
export const Media = styled.div``;
