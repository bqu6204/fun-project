import Section1TopNav from "./section1-top-nav/section1-top-nav";
import Section2MessageList from "./section2-message-list/section2-message-list";
import Section3MessageInput from "./section3-message-input/section3-message-input";
import styleSheet from "@/styles/dist/chatroom.module.css";

const Chatroom: React.FC = () => {
  return (
    <div>
      <div className={styleSheet.container}>
        <Section1TopNav />
        <Section2MessageList />
        <Section3MessageInput />
      </div>
    </div>
  );
};

export default Chatroom;
