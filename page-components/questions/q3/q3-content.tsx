import Chatroom from "@/components/chatroom/chatroom";

const Q3Content: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12">
      <div></div>
      <div className="">
        <Chatroom />
      </div>
    </div>
  );
};

export default Q3Content;
