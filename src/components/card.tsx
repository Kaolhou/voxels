interface CardProps {
  name: string;
  email: string;
  photo: string;
}
export default function Card({ name, email, photo }: CardProps) {
  return (
    <div className="card">
      <picture>
        <img src={photo} alt={name} />
      </picture>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
