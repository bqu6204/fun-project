import styleSheet from "@/styles/dist/section3-message-input.module.css";
import PlusButton from "@/components/buttons/plus/plus-button";

import NeumorphismTextArea from "@/components/inputs/textarea/neumorphism-textarea";
import { useContext } from "react";
import { ChatContext } from "../chatroom-store";
import { EMessageAction } from "../chatroom-store";

const Section3MessageInput: React.FC = () => {
  const chatroomInfo = useContext(ChatContext);

  return (
    <div className={styleSheet.container}>
      <NeumorphismTextArea
        className={styleSheet.textInput}
        onSubmit={(text) => {
          if (!text) return;
          chatroomInfo.setMessageList({
            type: EMessageAction.SENDTEXT,
            payload: {
              userId: chatroomInfo.currentUserId,
              avatarSrc: chatroomInfo.currentUserAvatarSrc,
              text,
            },
          });
        }}
      />
      <PlusButton className={styleSheet.plus} />
    </div>
  );
};

export default Section3MessageInput;
