import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import { useStore } from "../../lib/store";
import insta from "./insta.jpg";
import telegram from "./telegram.jpg";
export default function About() {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <div className={`head ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div className="about-container">
        <div className="me">
          <div className="left">
            <h1>About Me</h1>
            <p>
              Hey I'm Wassim Abderrahmane Hamitouche a Medical student with a
              deep passion for knowledge (especially the new technologies) and
              sharing valuable information.So I decided to learn and create My
              first website.My aim is to make it easy for everyone to read,
              study, listen ,and learn The Noble Quran.
            </p>
          </div>
          <div className="right">
            <h1> Contact Me </h1>
            <div className="img-container">
              <p>
                <img src={telegram} alt="telegrame" width={72} height={72} />
              </p>
              <p>
                <img src={insta} alt="insta" width={72} height={72} />
              </p>
            </div>
          </div>
        </div>
        <div className="paragraph">
          <p>
            This website is a Sadaqah Jariyah .So , pray for me and for my
            parents . Thank's .
          </p>
        </div>
      </div>
    </div>
  );
}
