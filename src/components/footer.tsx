import LinkList from "./link_list";

export default function Footer() {
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
        }}
      >
        <article>
          <ul>
            <LinkList
              content="Home"
              url="#home"
              className={"f_large"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="About"
              url="#about"
              className={"f_large"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="Games"
              url="#games"
              className={"f_large"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="PressKit"
              url="#games"
              className={"f_large"}
              style={{ lineHeight: "3rem" }}
            />
          </ul>
        </article>
        <article>
          <ul>
            <LinkList content="teste" />
          </ul>
        </article>
        <article>
          <ul>
            <LinkList content="teste" />
          </ul>
        </article>
      </section>
    </footer>
  );
}
