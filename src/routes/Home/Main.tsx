import React from "react";
import Hero from "./sections/Hero";
import Booking from "./sections/Booking";
import Hotel from "./sections/Hotels";
import Offer from "./sections/Offer";
import Rooms from "./sections/Rooms";

function HomeMain() {
  return (
    <main>
      <Hero />
      <Booking />
      <Hotel />
      <Offer />
      <Rooms />
    </main>
  );
}

export default HomeMain;
