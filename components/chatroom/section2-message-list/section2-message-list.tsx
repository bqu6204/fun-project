import Message from "../message/message";
import styleSheet from "@/styles/dist/section2-message-list.module.css";

const Section2MessageList: React.FC = () => {
  return (
    <div className={styleSheet.container}>
      <Message
        avatarSrc="/images/avatar/bot.png"
        isSelf={false}
        text="asodfjoaisfjoasjdfoa"
      />
      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoa"
      />
      <Message
        avatarSrc="/images/avatar/bot.png"
        isSelf={false}
        text="asodfjoaisfjoasjdfoa"
      />

      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoa"
      />

      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoa"
      />

      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoa"
      />

      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoa"
      />

      <Message
        avatarSrc="/images/avatar/user.png"
        isSelf={true}
        text="asodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoaasodfjoaisfjoasjdfoa"
      />
    </div>
  );
};

export default Section2MessageList;
