import { useEffect } from "react";

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
      <span>teste</span>
    </main>
  );
}
