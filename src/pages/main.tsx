/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../components/header";
import About from "../content/about";
import Games from "../content/games";
import Footer from "../components/footer";
import Authors from "../content/authors";
import SocialMedia from "../components/social_media";
import VideoSplit from "../components/video_splitted";
import { useEffect, useState } from "react";
import { languages } from "../utils/types";

export default function Main({
  locale,
  setLang,
}: {
  setLang: (...any: any) => void;
  locale: languages;
}) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsTop(scrollTop < 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <main style={{ overflow: "hidden" }}>
      <SocialMedia isTop={isTop} setLang={setLang} />
      <Header isTop={isTop} locale={locale} />
      <VideoSplit />
      <About locale={locale} />
      <Games locale={locale} />
      <Authors locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
