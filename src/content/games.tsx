import LtrRtl from "../components/ltr_rtl";
import endless from "../assets/logo jogo-min.png";
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
      <h1 style={{ fontSize: "3.5em" }}>Games</h1>
      <LtrRtl
        content={[
          <article data-aos="slide-up">
            <h2 className="f_larger">Endless Chase</h2>
            <p className="f_medium">
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
            <h2 className="f_larger">Inheritance of Shadows </h2>
            <p className="f_medium">
              Welcome to New Age, a company where technology hides intriguing
              mysteries! Help Kale solve this riddle that begins with the dark
              death of his uncle Hassam. Major shareholder and creator of
              ultra-advanced automatons sold by the company, Hassam had no
              direct heirs and so Kale took over as director in his place.
              Obstinate and determined, Kale decides to explore the company at
              night so as not to arouse suspicion. On the first night, he finds
              a cassette tape with instructions recorded by Hassam on how to
              restore damaged automatons, how many nights will it take to solve
              this puzzle? Discover all this and much more through the New Age
              Company's secret rooms and areas!!!
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
