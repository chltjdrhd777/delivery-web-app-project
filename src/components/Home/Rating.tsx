import React from "react";
import styled from "@emotion/styled/macro";

interface RatingProps {
  rating: number;
  className?: string;
}

const RatingContainer = styled.div<{ className?: string }>`
  & i {
    color: ${({ theme }) => theme.colors.pointColorYello};
  }

  & .rating:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

function Rating({ rating, className }: RatingProps) {
  const integer = Math.trunc(rating);
  const decimal = rating % 1;

  return (
    <RatingContainer className={className}>
      {Array.from({ length: integer }, () => (
        <i className="fas fa-star rating"></i>
      ))}
      {decimal >= 0.5 && <i className="fas fa-star-half rating"></i>}
    </RatingContainer>
  );
}

export default Rating;
