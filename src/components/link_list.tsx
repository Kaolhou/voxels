interface LinkListProps {
  url?: string;
  content: string;
  bold?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isSpan?: boolean;
}

export default function LinkList({
  content,
  url,
  bold,
  className,
  style,
  isSpan,
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
  if (isSpan)
    return (
      <span
        className={`link_list ${bold ? "bold" : ""} ${className}`}
        style={{ cursor: "default", ...style, display: "block" }}
        onClick={onClick}
      >
        {content}
      </span>
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
