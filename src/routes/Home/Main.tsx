import React from "react";
import Hero from "./sections/Hero";
import Booking from "./sections/Booking";
import Hotel from "./sections/Hotels";
import Offer from "./sections/Offer";
import Rooms from "./sections/Rooms";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function HomeMain() {
  return (
    <main>
      <Hero />
      <Booking />
      <Hotel />
      <Offer />
      <Rooms />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomeMain;
