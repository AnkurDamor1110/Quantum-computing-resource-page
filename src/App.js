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

const Researchpapers = () => {
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

const Tools = () => {
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

const Tutorials = () => {
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

const Projects  = () => {
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

const Workshops = () => {
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


const WorkingPeople = () => {
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
        <Route path="/researchpapers" element={<Researchpapers />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workingpeople" element={<WorkingPeople />} />

      </Routes>
    </Router>
  );
};

export default App;
