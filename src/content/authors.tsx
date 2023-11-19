import Card from "../components/card";
import ghoff from "../../public/persons/1699970851412.jpg";
import rafarossi from "../../public/persons/1697203944607.jpg";
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
        name="Gabriel Hoffman"
        email="gabrielhoffmannrr@voxels3dstudio.page"
        photo={ghoff}
      />
      <Card
        name="Rafael Rossi"
        email="rafaelrossi@voxels3dstudio.page"
        photo={rafarossi}
      />
      <Card
        email="flavioerr@voxels3dstudio.page"
        name="Flavio Ribeiro"
        photo={rafarossi}
      />
    </section>
  );
}
