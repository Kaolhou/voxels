import { BiArrowToTop } from "react-icons/bi";

export default function ScrollToTop({ isTop }: { isTop: boolean }) {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "3rem",
        right: isTop ? "-7rem" : "1rem",
        transition: ".2s",
      }}
      value="scroll to top"
      className="button_to_top"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <BiArrowToTop size={"25rem"} color={"#080808"} />
    </button>
  );
}
