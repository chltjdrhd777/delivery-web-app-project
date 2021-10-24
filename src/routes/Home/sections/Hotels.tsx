import React from "react";
import { B } from "components/styled";
import { Hotel, HotelList, HotelGrid } from "components/styled/Home.styled";
import FeaturedHotelImg from "assets/images/hotel_astro_resort.jpg";
import GardenImg from "assets/images/hotel_the_enchanted_garden.jpg";
import ParadiseImg from "assets/images/hotel_the_paradise.jpg";
import Rating from "components/Home/Rating";
import HotelHeading from "components/Home/Heading";

function Hotels() {
  return (
    <Hotel>
      <B.Container>
        <HotelList>
          <HotelHeading title="explore" subTitle="Our beautiful hotels" className="hotel-heading" />

          <HotelGrid>
            <div className="grid-item featured-hotels">
              <img src={FeaturedHotelImg} alt="featured" />
              <h5 className="hotel-name">Astro Hotel</h5>
              <span className="hotel-price">From $200/night</span>
              <Rating rating={4.5} className="hotel-rating" />

              <B.Button className="gradient ">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>

            <div className="grid-item">
              <img src={GardenImg} alt="garden" />
              <h5 className="hotel-name">Enchanted Garden</h5>
              <span className="hotel-price">From $300/night</span>
              <Rating rating={3.7} className="hotel-rating" />

              <B.Button className="gradient">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>

            <div className="grid-item">
              <img src={ParadiseImg} alt="paradise" />
              <h5 className="hotel-name">The Paradise</h5>
              <span className="hotel-price">From $350/night</span>
              <Rating rating={5} className="hotel-rating" />

              <B.Button className="gradient">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>
          </HotelGrid>
        </HotelList>
      </B.Container>
    </Hotel>
  );
}

export default Hotels;
