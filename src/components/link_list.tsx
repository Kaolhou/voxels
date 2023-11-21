interface LinkListProps {
  url?: string;
  content: string;
  bold?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function LinkList({
  content,
  url,
  bold,
  className,
  style,
  onClick,
}: LinkListProps) {
  if (url)
    return (
      <li
        className={`link_list ${bold ? "bold" : ""} ${className} `}
        style={{ ...style }}
        onClick={onClick}
      >
        <a href={url}>{content}</a>
      </li>
    );
  return (
    <li
      className={`link_list ${bold ? "bold" : ""} ${className}`}
      style={{ cursor: "default", ...style }}
      onClick={onClick}
    >
      {content}
    </li>
  );
}
