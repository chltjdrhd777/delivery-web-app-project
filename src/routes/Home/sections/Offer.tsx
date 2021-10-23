import React from "react";
import { B } from "components/styled";
import { Offer, OfferContent } from "components/styled/Home.styled";
import Rating from "components/Home/Rating";

function index() {
  return (
    <Offer>
      <B.Container>
        <OfferContent>
          <div className="offer-discount">40% off</div>
          <h5 className="hotel-name">The Paradise</h5>
          <Rating rating={5} className="hotel-rating" />

          <p>
            This it great chance to leave your break time. please enjoy another world with us, "The
            Paradise"
          </p>

          <B.Button className="gradient">Redeem Offer</B.Button>
        </OfferContent>
      </B.Container>
    </Offer>
  );
}

export default index;
