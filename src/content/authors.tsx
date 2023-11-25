import Card from "../components/card";
import ghoff from "../assets/persons/hoffmann.jpg";
import rafarossi from "../assets/persons/rafa.jpg";
import flavio from "../assets/persons/flavio.jpg";
import en from "../locale/en.json";
import pt from "../locale/pt.json";
import { languages } from "../utils/types";

export default function Authors({ locale }: { locale: languages }) {
  return (
    <section
      style={{
        margin: "auto",
        maxWidth: "70vw",
      }}
    >
      <h1 style={{ fontSize: "3.5rem" }}>
        {locale == "en" ? en["us"] : pt["us"]}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Card
          name="Gabriel Hoffmann"
          email="gabrielhoffmannrr@voxels3dstudio.page"
          photo={ghoff}
          linkedin="https://www.linkedin.com/in/gabriel-hoffmann-450567116"
        />
        <Card
          name="Rafael Rossi"
          email="rafaelrossi@voxels3dstudio.page"
          photo={rafarossi}
          linkedin="https://www.linkedin.com/in/rafael-rossi-1a4503296/"
        />
        <Card
          email="flavioerr@voxels3dstudio.page"
          name="Flavio Ribeiro"
          photo={flavio}
        />
      </div>
    </section>
  );
}
