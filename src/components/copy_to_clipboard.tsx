import React, { useState } from "react";
import LinkList from "./link_list";

const CopyToClipboard: React.FC<{
  text: string;
  size?: "f_small" | "f_medium" | "f_large";
  isTop?: boolean;
}> = ({ text, size = "f_medium", isTop = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Lógica para copiar o texto para a área de transferência
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) =>
        console.error("Erro ao copiar para a área de transferência:", err)
      );
  };

  const resetCopiedState = () => {
    setCopied(false);
  };

  return (
    <div
      className="copy-to-clipboard-text-container"
      onClick={handleCopyClick}
      onMouseEnter={resetCopiedState}
    >
      <span className={`tooltip ${isTop ? "top" : "bottom"}`}>
        {copied ? "✅" : "📋"}
      </span>
      <LinkList content={text} className={size}></LinkList>
    </div>
  );
};

export default CopyToClipboard;
