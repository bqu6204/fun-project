import styleSheet from "@/styles/dist/neumorphism-textarea.module.css";
import { useRef, useEffect, useState, ChangeEventHandler } from "react";
import Image from "next/image";

interface INeumorphismTextArea {
  className?: string;
  onSubmit?: <R>(text: string) => void | Promise<R>;
  onError?: <E>(error: E) => void | Promise<void>;
}

const NeumorphismTextArea: React.FC<INeumorphismTextArea> = ({
  className,
  onSubmit,
  onError,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px"; // Reset the height first
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.target.value;
    setNewMessage(value);
  };

  const handleSubmit = async () => {
    if (onSubmit) {
      try {
        await onSubmit(newMessage);
      } catch (error) {
        if (onError) await onError(error);
      }
    }
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`${styleSheet.container} ${className}`}>
      <textarea
        ref={textareaRef}
        className={`${styleSheet.textarea} ${
          newMessage ? styleSheet.newMessage : ""
        }`}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={newMessage}
      />
      <div className={styleSheet.imageBox}>
        <Image
          src="/icons/send.png"
          alt="send message"
          title="send"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default NeumorphismTextArea;
