import styled from "@emotion/styled/macro";

//commonly used component
export const B = {
  Container: styled.div`
    width: 100%;
    max-width: 100%;
    padding: 1.7rem;
  `,
  Header: styled.header``,
  Main: styled.main``,
  Footer: styled.footer``,
  Aside: styled.aside``,
  Section: styled.section``,
  Ul: styled.ul``,
  Nav: styled.nav``,
  Button: styled.button`
    border: none;
    border-radius: 5rem;
    background-color: transparent;
    cursor: pointer;
    padding: 2rem;
    transition: color 0.5s;
    font-weight: bold;

    &.active {
      background-color: black;
      color: white;
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
