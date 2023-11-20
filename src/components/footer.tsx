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
          <h2>Navigation</h2>
          <ul>
            <LinkList
              content="Home"
              url="#home"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="About"
              url="#about"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="Games"
              url="#games"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
            <LinkList
              content="PressKit"
              url="#games"
              className={"f_medium"}
              style={{ lineHeight: "3rem" }}
            />
          </ul>
        </article>
        <article>
          <h2>Follow us</h2>
          <ul>
            <LinkList
              content="Linkedin"
              url="https://www.linkedin.com/company/voxels-entertainment-and-games-ltda/?viewAsMember=true"
              className="f_medium"
            />
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
