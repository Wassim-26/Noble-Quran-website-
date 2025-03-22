import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Hero.css";
import quranLight from "../../img/quranGreen.png";
import quranDark from "../../img/quranblue.png";
import icon from "../../img/icon.png";
import loader from "../../img/loader2.gif";
import { useStore } from "../../lib/store";
export default function Hero() {
  const [surah, setsurah] = useState([]);
  const darkMode = useStore((state) => state.darkMode);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setloading(false);
      });
  }, []);
  if (loading)
    return (
      <div className={`loader  ${darkMode ? "dark-mode" : "light-mode"}`}>
        <img src={loader} alt="loader" />
      </div>
    );
  return (
    <div className="hero">
      {darkMode === false ? (
        <img src={quranLight} alt="quran" width={320} height={320} />
      ) : (
        <img
          className="img-dark"
          src={quranDark}
          alt="quran"
          width={320}
          height={320}
        />
      )}
      <input type="search" placeholder="What do you want read ?" />{" "}
      <div className="surah-container">
        {surah.map((surates) => (
          <div
            className="surah"
            onClick={() => {
              navigate(`/Sourate/${surates.number}`);
            }}
          >
            <div className="left">
              <div className="number-of-surah">
                <h1>{surates.number}</h1>
                <img src={icon} width={62} height={62} />
              </div>
              <h2>{surates.englishName}</h2>
            </div>
            <div className="right">
              <p>{surates.numberOfAyahs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
