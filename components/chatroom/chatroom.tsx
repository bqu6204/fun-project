import Section1TopNav from "./section1-top-nav/section1-top-nav";
import Section2MessageList from "./section2-message-list/section2-message-list";
import Section3MessageInput from "./section3-message-input/section3-message-input";
import styleSheet from "@/styles/dist/chatroom.module.css";
import { ChatContext } from "./chatroom-store";
import { TMessageList } from "./type";
import { useReducer } from "react";
import { messageListReducer } from "./chatroom-store";

interface IChatroom {
  messageList: TMessageList;
  currentUserId: string;
  currentUserAvatarSrc: string;
}

const Chatroom: React.FC<IChatroom> = ({
  messageList,
  currentUserId,
  currentUserAvatarSrc,
}) => {
  const [messageListState, messageListDispatch] = useReducer(
    messageListReducer,
    messageList
  );

  return (
    <ChatContext.Provider
      value={{
        messageList: messageListState,
        currentUserId,
        currentUserAvatarSrc,
        setMessageList: messageListDispatch,
      }}
    >
      <div>
        <div className={styleSheet.container}>
          <Section1TopNav />
          <Section2MessageList />
          <Section3MessageInput />
        </div>
      </div>
    </ChatContext.Provider>
  );
};

export default Chatroom;
