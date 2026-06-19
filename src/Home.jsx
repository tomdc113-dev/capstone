import Navbar from "./LandingPage/Navbar";
import Hero from "./LandingPage/Hero";
import About from "./LandingPage/About";
import Trainers from "./LandingPage/Trainers";
import Membership from "./LandingPage/Membership";
import Location from "./LandingPage/Location";
import Footer from "./LandingPage/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Trainers />
      <Membership />
      <Location />
      <Footer />
    </>
  );
}

export default Home;