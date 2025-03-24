import React, { useEffect, useState } from "react";
import "./Reciter.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../lib/store";
import icon from "../../img/quran_icon.png";
import loader from "../../img/loader2.gif";

export default function Reciter() {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    const fetchReciters = async () => {
      try {
        const response = await fetch(
          "https://api.alquran.cloud/v1/edition?format=audio"
        );
        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          const indices = [0, 1, 6];
          const filteredReciters = data.data.filter((_, index) =>
            indices.includes(index)
          );
          setReciters(filteredReciters);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des récitateurs :", error);
      }
    };

    fetchReciters();
  }, []);

  if (loading)
    return (
      <div className={`loader ${darkMode ? "dark-mode" : "light-mode"}`}>
        <img src={loader} alt="loader" />
      </div>
    );

  return (
    <div className={`head ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div className="reciter-container">
        <div className="reciter-header-title">
          <img src={icon} alt="icon" />
          <h1>Quran Reciters</h1>
          <img src={icon} alt="icon" />
        </div>
        <div className="reciter-cards-container">
          {reciters.map((reciter) => (
            <div
              key={reciter.identifier}
              className="reciter-card"
              onClick={() => navigate(`/Reciters/${reciter.identifier}`)}
            >
              <h2>{reciter.englishName}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
