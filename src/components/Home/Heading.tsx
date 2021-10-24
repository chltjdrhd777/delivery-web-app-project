import React from "react";
import styled from "@emotion/styled/macro";

export const MainHeading = styled.h5`
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

interface HeadingProps {
  title: string;
  subTitle: string;
  className: string;
}

function index({ title, subTitle, className }: HeadingProps) {
  return (
    <MainHeading className={className}>
      <span className="heading">{title}</span>
      <span className="sub-heading">{subTitle}</span>
    </MainHeading>
  );
}

export default index;
