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
export const HotelGrid = styled(B.Grid)`
  & .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35rem;
    color: white;
    padding: 1rem;
    position: relative;
    z-index: 0;

    & img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      object-fit: cover;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.purple};
      opacity: 0.3;
      z-index: -1;
    }

    & .hotel-name {
      font-size: 2.6rem;
    }

    & .hotel-price {
      font-size: 1.8rem;
    }

    & .hotel-rating {
      margin: 1rem 2rem;
    }

    //!conditional
    &.featured-hotels {
      &::before {
        content: "Recommended";
        width: 110%;
        height: 110%;
        background-color: ${({ theme }) => theme.colors.pointColorYello};
        transform: translate(-2rem, -2rem);
        z-index: -3;
        font-size: 1.5rem;
        color: black;
        font-family: "Courier New", Courier, monospace;
        display: flex;
        justify-content: center;
        opacity: 0.5;
        border-radius: 1rem;
      }
    }
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
`;

//! Rooms//
export const Rooms = styled(B.Section)`
  background-color: #f2f6f9;
`;

export const RoomsGrid = styled(B.Grid)`
  & .grid-item {
    /* image */
    & .image-wrap {
      position: relative;
      height: 25rem;
    }

    & .image-wrap > .room-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & .image-wrap > .room-name {
      position: absolute;
      bottom: 2rem;
      left: 0;
      color: white;
      z-index: 1;
      font-size: 2rem;
      font-weight: 800;
      background-color: ${({ theme }) => theme.colors.pointColorYello};
      padding: 0.5rem 2rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
    }

    & .image-wrap::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.purple};
      opacity: 0.5;
    }

    /* room-info */
    & .room-info-wrap > .room-price {
      display: block;
      font-size: 3.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.pointColorYello};
      & .per-night {
        color: ${({ theme }) => theme.colors.grayFour};
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 1rem;
      }
    }
  }
`;

//@ media
export const Media = styled.div``;
