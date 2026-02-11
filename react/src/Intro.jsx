import { useState, useEffect } from "react";

export default function CareerStats() {

  const [xuXin, setXuXin] = useState(null);

  async function getXuXin() {
    const response = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/Xu_Xin_(table_tennis)"
    );
    const data = await response.json();
    setXuXin(data); 
  }

  useEffect(() => {
    getXuXin();
  }, []);

  //Protection --- if API does not respond in time, do not load so that
  // react wouldnt report error
  if (!xuXin) {
    return (
      <div id="intro">
        <h2>Xu Xin</h2>
        <p>...</p>
      </div>
    );
  }

  return (

    <section id="intro">
      <div className="intro-text">
        <h2>Introduction to Xu Xin</h2>

        <p>
          Xu Xin, who is known for his incredible penhold technique and creative
          playstyle, is one of the most iconic athletes throughout the table tennis
          history. His performance in doubles is particularly amazing.
        </p>

        <p>
          With his great footwork and strategic intelligence, he earned global
          recognition as a world-class competitor, inspiring countless fans
          and players worldwide and winning respect from every audience.
        </p>

        <p>
          His achievements include world championships, Olympic medals, and
          multiple international titles. These all prove his mastery in "creative playing".
          Which further shows his title of "Table Tennis Artist".
        </p>
      </div>

    <div id="xuxin-card">
      <h3>Xu Xin Profile (Data via API)</h3>

      <img
        src={xuXin.thumbnail.source}
        alt={xuXin.title}
      />

      <p><b>Player:</b> {xuXin.title}</p>
      <p><b>Description:</b> {xuXin.description}</p>
      <p>{xuXin.extract}</p>
    </div>
    
    </section>
  );
}
