import Card from "../components/card";
import ghoff from "../../public/persons/hoffmann.jpg";
import rafarossi from "../../public/persons/1697203944607.jpg";
import flavio from "../../public/persons/flavio.jpg";
export default function Authors() {
  return (
    <section
      style={{
        margin: "auto",
        maxWidth: "70vw",
      }}
    >
      <h1 style={{ fontSize: "3.5rem" }}>Who we are</h1>
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
