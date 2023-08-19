import Avatar from "./avatars/avatar";
import TextBox from "./text-box/text-box";
import styleSheet from "@/styles/dist/message.module.css";

interface IMessage {
  text: string;
  avatarSrc: string;
  isSelf: boolean;
}

const Message: React.FC<IMessage> = ({ text, avatarSrc, isSelf }) => {
  return (
    <div
      className={`${styleSheet.container} ${isSelf ? styleSheet.isSelf : ""}`}
    >
      <Avatar src={avatarSrc} />
      <TextBox isSelf={isSelf} text={text} />
    </div>
  );
};

export default Message;
