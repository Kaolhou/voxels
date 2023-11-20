import Card from "../components/card";
import ghoff from "../../public/persons/hoffmann.jpg";
import rafarossi from "../../public/persons/flavio.jpg";
export default function Authors() {
  return (
    <section
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: 20,
        flexWrap: "wrap",
        maxWidth: "70vw",
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
        photo={rafarossi}
      />
    </section>
  );
}
