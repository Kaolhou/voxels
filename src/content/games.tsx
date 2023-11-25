import LtrRtl from "../components/ltr_rtl";
import endless from "../assets/logo jogo-min.png";
import inheritance from "../assets/inheritance.avif";
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useEffect, useState } from "react";
import Button from "../components/buttons";

export default function Games() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        margin: "auto",
        maxWidth: "78vw",
      }}
      id="games"
    >
      <h1 style={{ fontSize: "3.5em" }}>Games</h1>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        infinite
        nextArrow={
          <Button side="r" style={{ zIndex: 999 }} label="Next item" />
        }
        prevArrow={
          <Button side="l" style={{ zIndex: 999 }} label="Previous item" />
        }
      >
        <article className="slide-container">
          <LtrRtl
            content={[
              <div data-aos="slide-up">
                <h2 className="f_larger">Endless Chase</h2>
                <p className="f_medium" style={{ textAlign: "justify" }}>
                  Endless Chase is a Sci-fi punk with time travel in Real Time
                  RPG bringing a differentiated gameplay experience using 5 core
                  loops strategically distributed in the 4 acts of the
                  Kishotenketsu narrative integrated into the game's Lore.
                </p>
                <button className="button_action">More Info</button>
              </div>,
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={endless}
                  alt="Endless Chase Logo"
                  style={{ width: "100%" }}
                />
              </span>,
            ]}
            side="ltr"
          />
        </article>
        <article className="slide-container">
          <LtrRtl
            padding="0 20px"
            content={[
              <div>
                <h2 className="f_larger">Inheritance of Shadows </h2>
                <p className="f_medium" style={{ textAlign: "justify" }}>
                  Welcome to New Age, a company where technology hides
                  intriguing mysteries! Help Kale solve this riddle that begins
                  with the dark death of his uncle Hassam. Major shareholder and
                  creator of ultra-advanced automatons sold by the company,
                  Hassam had no direct heirs and so Kale took over as director
                  in his place. Obstinate and determined, Kale decides to
                  explore the company at night so as not to arouse suspicion. On
                  the first night, he finds a cassette tape with instructions
                  recorded by Hassam on how to restore damaged automatons, how
                  many nights will it take to solve this puzzle? Discover all
                  this and much more through the New Age Company's secret rooms
                  and areas!!!
                </p>
                <a
                  href="/inheritance"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  aria-label="More information about"
                >
                  <button
                    className="button_action"
                    style={{ cursor: "pointer" }}
                  >
                    More Info
                  </button>
                </a>
              </div>,
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  minWidth: "10rem",
                  maxWidth: "45rem",
                }}
              >
                <img
                  src={inheritance}
                  alt="Inheritance of Shadows logo"
                  style={{ width: "100%" }}
                />
              </span>,
            ]}
            side="rtl"
          />
        </article>
      </Slider>
    </section>
  );
}
