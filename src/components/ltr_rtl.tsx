import Aos from "aos";
import { useEffect, useState } from "react";

export default function LtrRtl({
  content,
  side,
}: {
  content: [React.ReactElement, React.ReactElement];
  side: "ltr" | "rtl";
}) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    Aos.init({
      duration: 1600,
      once: true,
    });
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobile = dimensions.width < 750;

  return (
    <div
      style={{
        flexDirection: isMobile
          ? "column"
          : side == "ltr"
          ? "row"
          : "row-reverse",
        display: "flex",
        marginBottom: 100,
        gap: 30,
      }}
    >
      {content.map((component, index) => (
        <div
          data-aos={
            isMobile
              ? ""
              : !(side == "rtl")
              ? index == 0
                ? "fade-left"
                : "fade-right"
              : index == 1
              ? "fade-right"
              : "fade-left"
          }
          style={{
            flex: index == 1 ? "0 0 50%" : undefined,
            display: index == 1 ? "flex" : undefined,
            flexWrap: "wrap",
            justifyContent: index == 1 ? "center" : undefined,
          }}
          key={index}
        >
          {component}
        </div>
      ))}
    </div>
  );
}
