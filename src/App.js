import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/pages/Home_page/Home";
import Companiespage from "./Components/pages/Companies_page/Companiespage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter here

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <HomePage/>
      </section>
    </>
  );
};

const Companies = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Companiespage/>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1></h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1></h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
