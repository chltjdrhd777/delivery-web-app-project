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

    &.room-btn {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.grayFour};
      padding: 0;
      transition: color 0.5s;
      &:hover {
        color: ${({ theme }) => theme.colors.pointColorYello};
      }
    }
  `,
  Form: styled.form``,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2.5rem;
  `,
  P: styled.p`
    color: ${({ theme }) => theme.colors.grayThree};
    font-size: 1.5rem;
    margin: 2.5rem;
  `,
};
