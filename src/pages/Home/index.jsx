/**
 * @author Saka
 * @name Landing-page
 */

import React from "react";
import Hero from "./hero";
import More from "./more";
import Banner from "./banner";
import About from "./about";
import Contact from "./contact";

function Home() {
  return (
    <>
      <Hero />
      <More />
      <About />
      <Banner />
      <Contact />
    </>
  );
}

export default Home;
