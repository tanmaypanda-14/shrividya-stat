import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Teachers from "../../components/Teachers/Teachers";
import Courses from "../../components/Courses/Courses";
import Workshops from "../../components/Workshops/Workshops";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Teachers />
      <Courses />
      <Workshops />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
