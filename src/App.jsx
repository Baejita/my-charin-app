import AttitudeSpeech from "./components/AttitudeSpeech";
import SuscribePtim from "./components/SuscribePtim";
import RsaMFPAY from "./components/RsaMFPAY";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import NavBarClickHam from "./components/NavBarClickHam";
import NavHam from "./components/NavHam";

import ButtonHam from "./components/ButtonHam";

const App = () => {
  return (
    <>
      <Navbar />
      <NavHam className="nav-ham"></NavHam>
      <ButtonHam className="hamber-z" />
      {/* <NavBarClickHam></NavBarClickHam> */}
      <Hero />
      <AttitudeSpeech />
      <SuscribePtim />
      <RsaMFPAY />
      <Footer />
    </>
  );
};

export default App;
