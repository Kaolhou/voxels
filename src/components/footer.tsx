import LinkList from "./link_list";

export default function Footer() {
  return (
    <footer
      style={{
        MozBoxSizing: "border-box",
        backgroundColor: "#09090b",
        marginTop: "5rem",
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
            <LinkList content="Home" url="#home" className={"f_large"} />
            <LinkList content="About" url="#about" className={"f_large"} />
            <LinkList content="Games" url="#games" className={"f_large"} />
            <LinkList content="PressKit" url="#games" className={"f_large"} />
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
