import React from "react";

import AttitudeSpeech from "./components/AttitudeSpeech";
import SuscribePtim from "./components/SuscribePtim";
import RsaMFPAY from "./components/RsaMFPAY";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AttitudeSpeech />
      <SuscribePtim />
      <RsaMFPAY />
      <Footer />
    </>
  );
};

export default App;
