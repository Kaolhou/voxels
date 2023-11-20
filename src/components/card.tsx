import { FaLinkedin } from "react-icons/fa6";
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
      <h2 className="f_larger">{name}</h2>
      {email ? (
        <p
          className="link_list f_small"
          style={{
            cursor: "pointer",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            navigator.clipboard.writeText(email);
            alert("email copiado para o clipboard");
          }}
        >
          {email}
        </p>
      ) : null}
      <span>
        {linkedin ? (
          <a href={linkedin} target="_blank" className="social_media">
            <FaLinkedin size={50} />
          </a>
        ) : null}
      </span>
    </div>
  );
}
