import React from "react";
import "./Audio.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useStore } from "../../lib/store";
import Navbar from "../../components/Navbar/Navbar";
import loader from "../../img/loader2.gif";
export default function Audio() {
  const [surahs, setsurahs] = useState([]);
  const [loading, setloading] = useState(true);
  const params = useParams();
  const darkMode = useStore((state) => state.darkMode);
  useEffect(() => {
    const fetchQuran = async () => {
      try {
        const response = await fetch(
          "https://api.alquran.cloud/v1/quran/en.asad"
        );
        const data = await response.json();
        setsurahs(data.data.surahs);
      } catch (error) {
        console.error("Erreur de chargement du Coran :", error);
      } finally {
        setloading(false);
      }
    };

    fetchQuran();
  }, []);

  if (loading)
    return (
      <div className={`loader  ${darkMode ? "dark-mode" : "light-mode"}`}>
        <img src={loader} alt="loader" />
      </div>
    );
  return (
    <div className={` ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div className="audio-parent-container">
        <div className="audio-parent">
          {surahs.map((sourate) => {
            return (
              <div className="audio-container">
                <div className="surate">{sourate.englishName}</div>
                <div className="audio">
                  <audio controls>
                    <source
                      src={`https://cdn.islamic.network/quran/audio-surah/128/${params.identifier}/${sourate.number}.mp3`}
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
