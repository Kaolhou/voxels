import LtrRtl from "../components/ltr_rtl";
import endless from "../assets/logo jogo-min.png";
import inheritance from "../assets/inheritance.avif";
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useEffect, useState } from "react";
import Button from "../components/buttons";
import { languages } from "../utils/types";
import en from "../locale/en.json";
import pt from "../locale/pt.json";

export default function Games({ locale }: { locale: languages }) {
  return (
    <section
      style={{
        paddingTop: "5rem",
        margin: "auto",
        maxWidth: "78vw",
      }}
      id="games"
    >
      <h1 style={{ fontSize: "3.5em" }}>
        {locale == "en" ? en["header.games"] : pt["header.games"]}
      </h1>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={
          <Button
            side="r"
            style={{ zIndex: 999 }}
            label={locale == "en" ? en["label.next"] : pt["label.next"]}
          />
        }
        prevArrow={
          <Button
            side="l"
            style={{ zIndex: 999 }}
            label={locale == "en" ? en["label.prev"] : pt["label.prev"]}
          />
        }
      >
        <article className="slide-container">
          <LtrRtl
            padding="0 1.1rem"
            content={[
              <div data-aos="slide-up">
                <h2 className="f_larger">Endless Chase</h2>
                <p className="f_medium" style={{ textAlign: "justify" }}>
                  {locale == "en"
                    ? en["endless.content"]
                    : pt["endless.content"]}
                </p>
                <button className="button_action">
                  {locale == "en" ? en["button.more"] : pt["button.more"]}
                </button>
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
            padding="0 1.1rem"
            content={[
              <div>
                <h2 className="f_larger">Inheritance of Shadows </h2>
                <p className="f_medium" style={{ textAlign: "justify" }}>
                  {locale == "en"
                    ? en["inheritance.content"]
                    : pt["inheritance.content"]}
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
                    {locale == "en" ? en["button.more"] : pt["button.more"]}
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
