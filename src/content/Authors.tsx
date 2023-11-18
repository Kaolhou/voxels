import Card from "../components/card";
import photo from "../../public/logos/Voxels_logo_img.png";

export default function Authors() {
  return (
    <section
      style={{
        maxWidth: "70vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Card name="Gabriel Hoffman" email="sla@gmail.com" photo={photo} />
      <Card name="Gabriel Hoffman" email="sla@gmail.com" photo={photo} />
    </section>
  );
}
