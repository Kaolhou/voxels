interface LinkListProps {
  url?: string;
  content: string;
}

export default function LinkList({ content, url }: LinkListProps) {
  if (url)
    return (
      <li className={`link_list `}>
        <a href={url}>{content}</a>
      </li>
    );
  return (
    <li className={`link_list`} style={{ cursor: "default" }}>
      {content}
    </li>
  );
}
