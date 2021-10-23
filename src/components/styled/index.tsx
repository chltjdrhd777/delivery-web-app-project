import styled from "@emotion/styled/macro";

//commonly used component
export const B = {
  Container: styled.div`
    width: 100%;
    max-width: 100%;
    padding: 3rem;
  `,
  Header: styled.header``,
  Main: styled.main``,
  Footer: styled.footer``,
  Aside: styled.aside``,
  Section: styled.section``,
  Ul: styled.ul``,
  Nav: styled.nav``,
  Button: styled.button`
    /* base */
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.7rem 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 10rem;
    line-height: 1;
    cursor: pointer;

    /* reuse */
    &.gradient {
      background-image: ${({ theme }) => theme.colors.gradient};
      display: inline-flex;
      align-items: center;

      .dots {
        font-size: 2.4rem;
        margin-left: 0.5rem;
        opacity: 0.75;
      }

      &:hover {
        background-image: ${({ theme }) => theme.colors.gradientAlt};
      }
    }

    &.form-btn {
      margin-top: 2.5rem;
      cursor: pointer;
    }

    &.btn-purple {
      background-color: ${({ theme }) => theme.colors.purple};
      &:hover {
        background-color: ${({ theme }) => theme.colors.pointColorYello};
        color: ${({ theme }) => theme.colors.indigo};
      }
    }
  `,
  Form: styled.form``,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2.5rem;

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

      & img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        object-fit: cover;
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
  `,
};
