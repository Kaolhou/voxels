interface ButtonLogoProps {
  logo: string;
  text: string;
  alt?: string;
}

export default function ButtonLogo({
  logo,
  text,
  alt = `${text} image`,
}: ButtonLogoProps) {
  return (
    <button
      className="button_action"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        cursor: "pointer",
        margin: 15,
      }}
      aria-label={text}
      onClick={() =>
        window.open(
          "https://www.catarse.me/inheritance_of_shadows_b982?ref=ctrse_explore_pgsearch"
        )
      }
    >
      <img src={logo} alt={alt} width={25} />
      <span>{text}</span>
    </button>
  );
}
