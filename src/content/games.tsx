import LtrRtl from "../components/ltr_rtl";
import endless from "../../public/logo jogo-min.png";
import "aos/dist/aos.css";

export default function Games() {
  return (
    <section
      style={{
        paddingTop: 100,
        margin: "auto",
        maxWidth: "70vw",
      }}
      id="games"
    >
      <h1>Games</h1>
      <LtrRtl
        content={[
          <article data-aos="slide-up">
            <h2>Endless Chase</h2>
            <p>
              Endless Chase is a Sci-fi punk with time travel in Real Time RPG
              bringing a differentiated gameplay experience using 5 core loops
              strategically distributed in the 4 acts of the Kishotenketsu
              narrative integrated into the game's Lore.
            </p>
            <button className="button_action">More Info</button>
          </article>,
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={endless} alt="" style={{ width: "100%" }} />
          </span>,
        ]}
        side="ltr"
      />
      <LtrRtl
        content={[
          <article>
            <h2>Endless Chase</h2>
            <p>
              Endless Chase is a Sci-fi punk with time travel in Real Time RPG
              bringing a differentiated gameplay experience using 5 core loops
              strategically distributed in the 4 acts of the Kishotenketsu
              narrative integrated into the game's Lore.
            </p>
            <a
              href="/enhanced-of-shadows"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button className="button_action" style={{ cursor: "pointer" }}>
                More Info
              </button>
            </a>
          </article>,
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={endless} alt="" style={{ width: "100%" }} />
          </span>,
        ]}
        side="rtl"
      />
    </section>
  );
}
