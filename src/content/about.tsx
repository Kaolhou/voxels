import LtrRtl from "../components/ltr_rtl";
import voxels from "../assets/logos/VOXELSmarcafinal.svg";
import { languages } from "../utils/types";
import en from "../locale/en.json";
import pt from "../locale/pt.json";

export default function About({ locale }: { locale: languages }) {
  return (
    <section
      style={{
        paddingTop: 150,
        margin: "auto",
        maxWidth: "70vw",
      }}
      id="about"
    >
      <h1 style={{ fontSize: "3.5rem" }}>
        {locale == "en" ? en["header.about"] : pt["header.about"]}
      </h1>
      <LtrRtl
        content={[
          <>
            <p className="f_medium">
              {locale == "en" ? en["about.content.1"] : pt["about.content.1"]}
            </p>
            <p className="f_medium">
              {locale == "en" ? en["about.content.2"] : pt["about.content.2"]}
            </p>
            <p className="f_medium">
              {locale == "en" ? en["about.content.3"] : pt["about.content.3"]}
            </p>
          </>,
          <span
            style={{
              minWidth: "10rem",
              maxWidth: "50rem",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={voxels}
              alt="voxels"
              style={{ width: "100%", maxWidth: "20rem" }}
            />
          </span>,
        ]}
        side="rtl"
      />
    </section>
  );
}
