interface LinkListProps {
  url?: string;
  content: string;
  bold?: boolean;
  className?: string;
}

export default function LinkList({
  content,
  url,
  bold,
  className,
}: LinkListProps) {
  if (url)
    return (
      <li className={`link_list ${bold ? "bold" : ""} ${className}`}>
        <a href={url}>{content}</a>
      </li>
    );
  return (
    <li
      className={`link_list ${bold ? "bold" : ""} ${className}`}
      style={{ cursor: "default" }}
    >
      {content}
    </li>
  );
}
