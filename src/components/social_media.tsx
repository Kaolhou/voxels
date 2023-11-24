// import { FaSteam } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

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
      {/* <span className="icon icon-steam">
        <a href="/" aria-label="Steam Page">
          <FaSteam size="2.3rem" color={"#fff"} />
        </a>
      </span> */}
      <span className="icon icon-linkedin">
        <a
          href="https://www.linkedin.com/company/voxels-entertainment-and-games-ltda/?viewAsMember=true"
          target="_blank"
          aria-label="Linkedin Page"
        >
          <FaLinkedin size="2.3rem" color={"#fff"} />
        </a>
      </span>
      <span className="icon icon-youtube">
        <a
          href="https://www.youtube.com/@voxelsentertainmentandgame9389"
          target="_blank"
          aria-label="Youtube Channel"
        >
          <FaYoutube size="2.3rem" color={"#fff"} />
        </a>
      </span>
      {/* <span className="icon icon-insta">
        <a href="/" aria-label="Instagram Page">
          <FaInstagram size="2.3rem" color={"#fff"} />
        </a>
      </span> */}
    </div>
  );
}
