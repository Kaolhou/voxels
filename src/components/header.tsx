import LinkList from "./link_list";
import img from "../assets/logos/Voxels_logo_img.svg";
import sign from "../assets/logos/Voxels_logo_sign.svg";
import ScrollToTop from "./scroll_to_top";
import { languages } from "../utils/types";
import en from "../locale/en.json";
import pt from "../locale/pt.json";
export default function Header({
  isTop,
  locale,
}: {
  locale: languages;
  isTop: boolean;
}) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute("href")!)!.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        padding: 10,
        zIndex: 20,
        backgroundColor: isTop ? "#ffffff00" : "#18181b",
        transition: ".3s ease",
        boxShadow: `0px 4px 8px rgba(0, 0, 0, ${isTop ? "0" : "0.1"})`,
      }}
    >
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <span>
          <img src={sign} alt="logo" style={{ height: "7rem" }} />
          <img src={img} alt="logo" style={{ height: "7rem" }} />
        </span>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
          }}
          className="list-child"
        >
          <LinkList
            content={locale == "en" ? en["header.home"] : pt["header.home"]}
            url="#home"
            className={"f_medium"}
            bold={true}
          />
          <LinkList
            content={locale == "en" ? en["header.about"] : pt["header.about"]}
            url="#about"
            className={"f_medium"}
            bold={true}
          />
          <LinkList
            content={locale == "en" ? en["header.games"] : pt["header.games"]}
            url="#games"
            className={"f_medium"}
            bold={true}
          />
          <LinkList
            className={"f_medium"}
            content="Press Kit"
            url="https://impress.games/press-kit/voxels-entertainment/endless-chase"
            bold={true}
            target="_blank"
          />
        </ul>
      </main>
      <aside>
        <ScrollToTop isTop={isTop} />
      </aside>
    </header>
  );
}
