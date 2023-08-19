import styleSheet from "@/styles/dist/section3-message-input.module.css";
import PlusButton from "@/components/buttons/plus/plus-button";

import { ChangeEvent, useRef, useState } from "react";

const Section3MessageInput: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height first
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styleSheet.container}>
      <textarea
        ref={textareaRef}
        className={styleSheet.inputText}
        onChange={handleChange}
      />
      <PlusButton />
    </div>
  );
};

export default Section3MessageInput;
