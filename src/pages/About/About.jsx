import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import { useStore } from "../../lib/store";
import insta from "../../img/insta.jpg";
import whatsApp from "../../img/WhatsApp.qr.jpg";
export default function About() {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <div className={`head ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div className="about-container">
        <div className={`me ${darkMode ? "me-dark" : "me-light"}`}>
          <div className="left">
            <h1
              style={{
                color: darkMode ? "#8AA9F8" : "#40e2a4",
              }}
            >
              About Me
            </h1>
            <p style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>
              Hey I'm Wassim Abderrahmane Hamitouche a Medical student with a
              deep passion for knowledge (especially in the new technologies)
              and sharing valuable information.So I decided to learn and create
              My first website.My aim is to make it easy for everyone to read,
              study, listen ,and learn The Noble Quran.
            </p>
          </div>
          <div className="right">
            <h1
              style={{
                color: darkMode ? "#8AA9F8" : "#40e2a4",
              }}
            >
              {" "}
              Contact Me{" "}
            </h1>
            <div className="img-container">
              <p>
                {" "}
                <a href="https://wa.me/213556085568">
                  <img
                    src={whatsApp}
                    alt="whatsApp"
                    width={72}
                    height={72}
                    style={{ borderRadius: "6px", border: "3px solid red" }}
                  />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/wassim_hm.09/">
                  <img
                    src={insta}
                    alt="insta"
                    width={72}
                    height={72}
                    style={{ borderRadius: "6px", border: "3px solid red" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="paragraph">
          <p style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>
            This website is a Sadaqah Jariyah .So , pray for me and for my
            parents . Thank's .
          </p>
        </div>
      </div>
    </div>
  );
}
