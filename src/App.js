import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/pages/Home_page/Home";
import Companiespage from "./Components/pages/Companies_page/Companiespage";
import Toolspage from "./Components/pages/Tools_page/Toolspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter here
import Simulatorpage from "./Components/pages/Simulators_page/Simulatorspage";
import WorkingPeoplepage from "./Components/pages/Workingpeople_page/Workingpeoplepage";
import WorkingPeopleIndiapage from "./Components/pages/Workingpeople_page/WorkingPeopleIndiapage";
import Articlespage from "./Components/pages/Articles_page/Articlespage";
import Researchpaperpage from "./Components/pages/Researchpaper_page/Researchpaperpage"
import Bookspage from "./Components/pages/Tutorials_page/Bookspage"
import Workshopspage from "./Components/pages/Workshops_page/Workshopspage";
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
        <Researchpaperpage/>

      </section>
    </>
  );
};

const Tools = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Toolspage/>
        
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

const YouTubeContent = () => {
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
const Courses = () => {
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
const Books = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Bookspage/>
      </section>
    </>
  );
};
const Simulators = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Simulatorpage/>
      </section>
    </>
  );
};

const Workshops = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Workshopspage/>
      </section>
    </>
  );
};


const WorkingPeople = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <WorkingPeoplepage/>
      </section>
    </>
  );
};

const WorkingPeopleIndia = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <WorkingPeopleIndiapage/>
      </section>
    </>
  );
};
const Patents = () => {
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
const Articles = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Articlespage/>
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
      
        <Route path="/youtubecontent" element={<YouTubeContent />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/books" element={<Books />} />
       

        <Route path="/simulators" element={<Simulators />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workingpeople" element={<WorkingPeople />} />
        <Route path="/workingpeopleindia" element={<WorkingPeopleIndia />} />

        <Route path="/patents" element={<Patents />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
};

export default App;
