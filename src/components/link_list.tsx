interface LinkListProps {
  url?: string;
  content: string;
  bold?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function LinkList({
  content,
  url,
  bold,
  className,
  style,
}: LinkListProps) {
  if (url)
    return (
      <li
        className={`link_list ${bold ? "bold" : ""} ${className} `}
        style={{ ...style }}
      >
        <a href={url}>{content}</a>
      </li>
    );
  return (
    <li
      className={`link_list ${bold ? "bold" : ""} ${className}`}
      style={{ cursor: "default", ...style }}
    >
      {content}
    </li>
  );
}
