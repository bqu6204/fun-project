import Chatroom from "@/components/chatroom/chatroom";
import { TMessageList } from "@/components/chatroom/type";
import Image from "next/image";

const Q3Content: React.FC = () => {
  const messageList: TMessageList = [
    {
      avatarSrc: "/images/avatar/bot.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userId: "bot",
    },
    {
      avatarSrc: "/images/avatar/user.png",
      text: "Diam ut venenatis tellus in metus vulputate eu. ",
      userId: "user0",
    },
    {
      avatarSrc: "/images/avatar/bot.png",
      text: "Suscipit adipiscing bibendum est ultricies integer. ",
      userId: "bot",
    },
    {
      avatarSrc: "/images/avatar/user.png",
      text: "Imperdiet dui accumsan sit amet.",
      userId: "user0",
    },
    {
      avatarSrc: "/images/avatar/bot.png",
      text: "Cursus sit amet dictum sit amet justo donec enim.",
      userId: "bot",
    },
    {
      avatarSrc: "/images/avatar/user.png",
      text: "Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Cursus eget nunc scelerisque viverra mauris. Tincidunt dui ut ornare lectus sit amet est placerat in. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Enim ut tellus elementum sagittis vitae et leo. Adipiscing elit duis tristique sollicitudin nibh sit amet.",
      userId: "user0",
    },
    {
      avatarSrc: "/images/avatar/bot.png",
      text: "Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. ",
      userId: "bot",
    },
    {
      avatarSrc: "/images/avatar/user.png",
      text: " Eget egestas purus viverra accumsan in nisl nisi. Tortor condimentum lacinia quis vel eros donec ac odio tempor. ",
      userId: "user0",
    },
    {
      avatarSrc: "/images/avatar/bot.png",
      text: "Vitae tempus quam pellentesque nec. ",
      userId: "bot",
    },
    {
      avatarSrc: "/images/avatar/user.png",
      text: "Quis enim lobortis scelerisque fermentum. ",
      userId: "user0",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-auto gap-8 ">
      <div className="mt-12 flex flex-col-reverse lg:flex-col">
        <h3 className="mt-12 text-center text-4xl font-bold text-gray-600 ">
          <i>Try the chatroom!</i>
        </h3>
        <div
          className="relative flex-1"
          style={{ minWidth: "300px", minHeight: "300px" }}
        >
          <Image
            src="/images/component-structure.png"
            fill
            alt="This demonstrates the component structure of the chatroom "
            title="component-structure"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
      <div className="m-auto lg:mt-12">
        <Chatroom
          messageList={messageList}
          currentUserId="user0"
          currentUserAvatarSrc="/images/avatar/user.png"
        />
      </div>
    </div>
  );
};

export default Q3Content;
