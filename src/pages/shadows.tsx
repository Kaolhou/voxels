import { useEffect } from "react";
import ButtonLogo from "../components/button_logo";
import catarse from "../assets/logos/catarse.svg";

export default function Shadows() {
  useEffect(() => {
    document.title = "Inheritance of Shadows";
  }, []);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 15,
        width: "100vw",
      }}
    >
      <h1 style={{ fontSize: "3.5rem" }}>Inheritance of Shadows</h1>
      <iframe
        style={{
          border: 0,
          aspectRatio: "16 / 9",
          maxWidth: "90%",
          flex: 1,
        }}
        src="https://www.youtube-nocookie.com/embed/Ts-kDhRoFoo?autoplay=1&rel=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <ButtonLogo text="Become a backer" logo={catarse} />
    </main>
  );
}
