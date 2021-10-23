import React from "react";
import Hero from "./sections/Hero";
import Booking from "./sections/Booking";
import Hotel from "./sections/Hotels";
import Offer from "./sections/Offer";

function HomeMain() {
  return (
    <main>
      <Hero />
      <Booking />
      <Hotel />
      <Offer />
    </main>
  );
}

export default HomeMain;
