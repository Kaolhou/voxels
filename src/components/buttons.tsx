import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ButtonArrowProps {
  side: "l" | "r";
  onClick?: (...a: unknown[]) => unknown;
  className?: string;
}
export default function ButtonArrow({
  side,
  onClick,
  className,
}: ButtonArrowProps) {
  return (
    <button onClick={onClick} className={className}>
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
