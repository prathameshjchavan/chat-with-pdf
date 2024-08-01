interface ChatToFilePage {
  params: {
    id: string;
  };
}

const ChatToFilePage = ({ params: { id } }: ChatToFilePage) => {
  return <div>ChatToFilePage - {id}</div>;
};

export default ChatToFilePage;
