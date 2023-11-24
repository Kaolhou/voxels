import { FaLinkedin } from "react-icons/fa6";
import CopyToClipboard from "./copy_to_clipboard";
interface CardProps {
  name: string;
  email?: string;
  photo: string;
  linkedin?: string;
}
export default function Card({ name, email, photo, linkedin }: CardProps) {
  return (
    <div className="card">
      <picture>
        <img src={photo} alt={name} />
      </picture>
      <span className="card_content">
        <h2
          className="f_larger"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {name}
        </h2>
        <span className="card_social">
          {email ? (
            <CopyToClipboard
              isSpan
              text={email}
              size="f_small"
              isTop={false}
              style={{ paddingTop: 10, paddingBottom: 10 }}
            />
          ) : null}
          <span>
            {linkedin ? (
              <a
                href={linkedin}
                aria-label={`${name}'s Linkedin`}
                target="_blank"
                className="social_media"
              >
                <FaLinkedin size={"3rem"} />
              </a>
            ) : null}
          </span>
        </span>
      </span>
    </div>
  );
}
