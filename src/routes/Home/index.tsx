import React from "react";
import { HomeMedia } from "components/styled/Home.styled";
import HomeHeader from "./Header";
import HomeMain from "./Main";
import Scroll from "components/common/Scroll";

function Home() {
  return (
    <HomeMedia>
      <HomeHeader />
      <HomeMain />
      <Scroll />
    </HomeMedia>
  );
}

export default Home;
