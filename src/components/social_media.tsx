import { FaSteam } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocialMedia({ isTop }: { isTop: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        top: "50%",
        left: isTop ? -999 : 20,
        transition: ".3s",
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <span className="icon icon-steam">
        <a href="/" aria-label="Steam Page">
          <FaSteam size="2.3rem" color={"#fff"} />
        </a>
      </span>
      <span className="icon icon-linkedin">
        <a href="/" aria-label="Linkedin Page">
          <FaLinkedin size="2.3rem" color={"#fff"} />
        </a>
      </span>
      <span className="icon icon-insta">
        <a href="/" aria-label="Instagram Page">
          <FaInstagram size="2.3rem" color={"#fff"} />
        </a>
      </span>
    </div>
  );
}
