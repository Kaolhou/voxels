interface ContainerProps {
  title?: string;
  background?: string;
  content?: string | React.ReactNode;
  paddingTop?: number;
  id?: string;
}

export default function Container({
  title,
  background,
  content,
  paddingTop,
  id,
}: ContainerProps) {
  return (
    <section
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: 20,
        paddingTop,
      }}
      id={id}
    >
      <h1
        style={{
          margin: 0,
        }}
      >
        {title}
      </h1>
      {typeof content == "string" ? <div>{content}</div> : content}
    </section>
  );
}
