import React, { useState } from "react";

const CopyToClipboard: React.FC<{ text: string }> = ({ text }) => {
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
      <span className="tooltip">{copied ? "✔️" : "📋"}</span>
      <span>{text}</span>
    </div>
  );
};

export default CopyToClipboard;
