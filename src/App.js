import React from "react";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Projects from "./Components/Projects/Projects";
import Skillset from "./Components/Skillset/Skillset";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skillset />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
