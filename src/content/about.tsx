import LtrRtl from "../components/ltr_rtl";
import voxels from "../../public/logos/VOXELSmarcafinal.png";

export default function About() {
  return (
    <section
      style={{
        paddingTop: 150,
        margin: "auto",
        maxWidth: "70vw",
      }}
      id="about"
    >
      <h1>About</h1>
      <LtrRtl
        content={[
          <>
            <p>
              From an early age, games have been our main form of entertainment.
              We love them so much that we decided to create our own and share
              our joy with other gamers.
            </p>
            <p>
              Our products are the result of our experience playing a variety of
              styles, seeking to bring out the best in our experiences.
            </p>
            <p>
              Our contagious dream became a reality and our own families
              believed and invested, helping us to produce the Demo of our first
              game.
            </p>
          </>,
          <span
            style={{
              minWidth: 180,
              maxWidth: 500,
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={voxels} alt="voxels" style={{ width: "100%" }} />
          </span>,
        ]}
        side="rtl"
      />
    </section>
  );
}
