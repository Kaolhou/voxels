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
      }}
    >
      <h1>Inheritance of Shadows</h1>
      <iframe
        style={{ border: 0, maxHeight: 315, maxWidth: 560 }}
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Ts-kDhRoFoo?autoplay=1&rel=0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* <iframe
        style={{ border: 0 }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ts-kDhRoFoo?si=TDASxiJZC9aA_XkC?autoplay=1&rel=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <span>teste</span>
    </main>
  );
}
