import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import MastHead from "../components/MastHead";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const LandingPage = () => {
  return (
    <div>
      <Navigation />

      {/* must head */}
      <MastHead />

      {/* About */}
      <About />

      {/* projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2021 - Company Name
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
