import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Hero.css";
import quranLight from "../../img/quranGreen.png";
import quranDark from "../../img/quranblue.png";
import icon from "../../img/icon.png";
import loader from "../../img/loader2.gif";
import { useStore } from "../../lib/store";

export default function Hero() {
  const [surah, setSurah] = useState([]);
  const [search, setSearch] = useState(""); // État pour la recherche
  const darkMode = useStore((state) => state.darkMode);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setSurah(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement des sourates :", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className={`loader ${darkMode ? "dark-mode" : "light-mode"}`}>
        <img src={loader} alt="loader" width={66} height={66} />
      </div>
    );

  // Vérifier si `surah` est bien un tableau avant de filtrer
  const filteredSurahs = Array.isArray(surah)
    ? surah.filter((s) =>
        s.englishName.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="hero">
      {darkMode ? (
        <img
          className="img-dark"
          src={quranDark}
          alt="quran"
          width={320}
          height={320}
        />
      ) : (
        <img src={quranLight} alt="quran" width={320} height={320} />
      )}

      {/* Champ de recherche */}
      <input
        type="search"
        placeholder="What do you want read ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Mise à jour de l'état
      />

      <div className="surah-container">
        {filteredSurahs.length > 0 ? (
          filteredSurahs.map((surates) => (
            <div
              key={surates.number} // Ajout d'une clé unique
              className="surah"
              onClick={() => navigate(`/Sourate/${surates.number}`)}
            >
              <div className="left">
                <div className="number-of-surah">
                  <h1>{surates.number}</h1>
                  <img src={icon} width={62} height={62} alt="icon" />
                </div>
                <h2>{surates.englishName}</h2>
              </div>
              <div className="right">
                <p>{surates.numberOfAyahs}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            No results found .
          </p>
        )}
      </div>
    </div>
  );
}
