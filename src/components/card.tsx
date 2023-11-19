interface CardProps {
  name: string;
  email?: string;
  photo: string;
}
export default function Card({ name, email, photo }: CardProps) {
  return (
    <div className="card">
      <picture>
        <img src={photo} alt={name} />
      </picture>
      <h2 className="f_larger">{name}</h2>
      {email ? (
        <p
          className="link_list f_small"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigator.clipboard.writeText(email);
            alert("email copiado para o clipboard");
          }}
        >
          {email}
        </p>
      ) : null}
    </div>
  );
}
