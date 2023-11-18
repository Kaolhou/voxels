import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ButtonArrowProps {
  side: "l" | "r";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (...a: any[]) => any;
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
        <BsChevronLeft size={20} color={"#fff"} />
      ) : side == "r" ? (
        <BsChevronRight size={20} color={"#fff"} />
      ) : (
        "?"
      )}
    </button>
  );
}
