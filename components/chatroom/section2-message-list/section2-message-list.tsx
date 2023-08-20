import Message from "../message/message";
import styleSheet from "@/styles/dist/section2-message-list.module.css";
import { ChatContext } from "../chatroom-store";
import { useRef, useEffect, useContext } from "react";

const Section2MessageList: React.FC = () => {
  const chatroomInfo = useContext(ChatContext);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom of the message container when a new message arrives
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [chatroomInfo.messageList]);

  return (
    <div ref={messageContainerRef} className={styleSheet.container}>
      {chatroomInfo.messageList?.map(({ avatarSrc, text, userId }, idx) => {
        return (
          <Message
            key={idx}
            avatarSrc={avatarSrc}
            text={text}
            isSelf={userId === chatroomInfo.currentUserId}
          />
        );
      })}
    </div>
  );
};

export default Section2MessageList;
