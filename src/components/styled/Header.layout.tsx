import React, { PropsWithChildren, useState } from "react";
import {} from "components/styled/Home.styled";
import { B } from "components/styled";
import { Link } from "react-router-dom";
import LogoImg from "assets/images/Logo.png";
import styled from "@emotion/styled/macro";
import { usePathContext } from "App";

export const HeaderContainer = styled.header`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 9rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  & img {
    width: 8rem;
  }
`;

export const HeaderNavItems = styled.div`
  font-weight: bold;
  & .nav-item {
    padding: 0.7rem 2rem;
    border-radius: 5rem;
  }

  & .nav-item.active {
    transition: all 0.5s;
    background-color: black;
    color: white;
  }

  & .nav-item:first-of-type {
    margin-right: 1.5rem;
  }
`;

export const HeaderChildrenWrapper = styled.div`
  transform: translateY(9rem);
`;

function Index({ children }: PropsWithChildren<{}>) {
  const { path } = usePathContext();

  return (
    <>
      <HeaderContainer>
        <B.Container>
          <HeaderNav>
            <HeaderLogo>
              <img src={LogoImg} alt="" className="logo" />
            </HeaderLogo>

            <HeaderNavItems>
              <Link to="/delivery" className={`nav-item ${path === "/delivery" ? "active" : ""}`}>
                Delivery
              </Link>
              <Link to="/pickup" className={`nav-item ${path === "/pickup" ? "active" : ""}`}>
                Pick Up
              </Link>
            </HeaderNavItems>
          </HeaderNav>
        </B.Container>
      </HeaderContainer>

      <HeaderChildrenWrapper>
        <B.Container>{children}</B.Container>
      </HeaderChildrenWrapper>
    </>
  );
}

export default Index;
