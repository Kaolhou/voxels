import { languages } from "../utils/types";
import CopyToClipboard from "./copy_to_clipboard";
import LinkList from "./link_list";
import en from "../locale/en.json";
import pt from "../locale/pt.json";

export default function Footer({ locale }: { locale: languages }) {
  return (
    <footer
      style={{
        MozBoxSizing: "border-box",
        backgroundColor: "#09090b",
        marginTop: "5rem",
        paddingTop: "5rem",
        paddingBottom: "2rem",
      }}
    >
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "80vw",
          margin: "auto",
          justifyContent: "space-evenly",
          borderBottom: "2px solid #e4e4e7",
          marginBottom: "2rem",
          paddingBottom: "1rem",
        }}
      >
        <article>
          <h2>{locale == "en" ? en["footer.nav"] : pt["footer.nav"]}</h2>
          <ul>
            <LinkList
              content={locale == "en" ? en["header.home"] : pt["header.home"]}
              url="#home"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content={locale == "en" ? en["header.about"] : pt["header.about"]}
              url="#about"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content={locale == "en" ? en["header.games"] : pt["header.games"]}
              url="#games"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content={
                locale == "en" ? en["header.presskit"] : pt["header.presskit"]
              }
              url="https://impress.games/press-kit/voxels-entertainment/endless-chase"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
          </ul>
        </article>
        <article>
          <h2>{locale == "en" ? en["footer.follow"] : pt["footer.follow"]}</h2>
          <ul>
            <LinkList
              content="Linkedin"
              url="https://www.linkedin.com/company/voxels-entertainment-and-games-ltda/?viewAsMember=true"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
              target="_blank"
            />
            <LinkList
              content="YouTube"
              target="_blank"
              url="https://www.youtube.com/@voxelsentertainmentandgame9389"
              className="f_medium"
              style={{ lineHeight: "3rem" }}
            />
          </ul>
        </article>
        <article>
          <h2>
            {locale == "en" ? en["footer.contact"] : pt["footer.contact"]}
          </h2>
          <ul>
            <CopyToClipboard
              isLi={true}
              isSpan={true}
              text="contact@voxels3dstudio.page"
            />
          </ul>
        </article>
      </section>
      <section style={{ textAlign: "center" }}>
        <span>{locale == "en" ? en["footer.copy"] : pt["footer.copy"]}</span>
      </section>
    </footer>
  );
}
