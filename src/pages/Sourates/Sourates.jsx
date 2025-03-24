import { useState, useEffect } from "react";
import "./Sourates.css";
import { useParams } from "react-router";
import star from "../../img/islam-star.png";
import loader from "../../img/loader2.gif";
import { useStore } from "../../lib/store";
import Navbar from "../../components/Navbar/Navbar";

export default function Sourates() {
  const [surah, setsurah] = useState(null);
  const [Edition, setEdition] = useState([]);
  const [LoadingEdition, setLoadingEdition] = useState(true);
  const [LoadingSurah, setLoadingsurah] = useState(true);
  const [CurrentEdition, setCurrentEdition] = useState("ar.alafasy");
  const params = useParams();
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    fetch(
      `https://api.alquran.cloud/v1/surah/${params.numberSourat}/${CurrentEdition}`
    )
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setLoadingsurah(false);
      });

    fetch("https://api.alquran.cloud/v1/edition")
      .then((response) => response.json())
      .then((data) => {
        setEdition(data.data);
        setLoadingEdition(false);
      });
  }, [CurrentEdition]);

  if (LoadingSurah || LoadingEdition)
    return (
      <div className={`loader  ${darkMode ? "dark-mode" : "light-mode"}`}>
        <img src={loader} alt="loader" width={186} height={186} />
      </div>
    );
  return (
    <div className={`sourates ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div className="star-text-container">
        <img src={star} width={52} height={52} />
        <h1> {surah.name} </h1>
        <img alt="star" src={star} width={52} height={52} />
      </div>
      <div className="select-ayat-container">
        <div className="select-container">
          <p>Choose Edition</p>
          <select
            className={`${darkMode ? "dark-mode" : "light-mode"}`}
            dir="ltr"
            onChange={(event) => {
              setCurrentEdition(event.target.value);
            }}
          >
            {Edition.map((edition) => (
              <option key={edition.identifier} value={edition.identifier}>
                {edition.name} - {edition.language.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <section id="container-of-ayats">
          <div className="ayat-box-container">
            {surah?.ayahs?.map((aya) => (
              <div className="aya">
                <img
                  className="ayat-png"
                  src={`https://cdn.islamic.network/quran/images/high-resolution/${surah.number}_${aya.numberInSurah}.png`}
                  alt="ayat"
                />
                <audio controls>
                  <source
                    src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${aya.number}.mp3`}
                    type="audio/mpeg"
                  />
                </audio>
                <p>{aya.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
