import React from "react";
import { Rooms, RoomsGrid } from "components/styled/Home.styled";
import { B } from "components/styled";
import RoomsHeading from "components/Home/Heading";
import { rooms } from "data";

function index() {
  return (
    <Rooms>
      <B.Container>
        <RoomsHeading title="Luxurious" subTitle="Affordable rooms" className="room-heading" />

        <RoomsGrid>
          {rooms.map((e) => (
            <div className="grid-item featured-rooms" key={e.roomImg}>
              <div className="image-wrap">
                <img src={e.roomImg} alt="" className="room-image" />
                <h5 className="room-name">{e.roomName}</h5>
              </div>

              <div className="room-info-wrap">
                <span className="room-price">
                  ${e.price}
                  <span className="per-night">Per night</span>
                </span>

                <B.P className="room-p">{e.description}</B.P>

                <B.Button className="room-btn">Book now</B.Button>
              </div>
            </div>
          ))}
        </RoomsGrid>
      </B.Container>
    </Rooms>
  );
}

export default index;
