import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ButtonArrowProps {
  side: "l" | "r";
  onClick?: (...a: unknown[]) => unknown;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}
export default function ButtonArrow({
  side,
  onClick,
  className,
  style,
  label,
}: ButtonArrowProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={style}
      aria-label={label}
    >
      {side == "l" ? (
        <BsChevronLeft size={"1.5rem"} color={"#fff"} />
      ) : side == "r" ? (
        <BsChevronRight size={"1.5rem"} color={"#fff"} />
      ) : (
        "?"
      )}
    </button>
  );
}
