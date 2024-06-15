import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Chat = ({ mentorId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userctx = useContext(UserContext);
  const { userId } = userctx;

  const backendURI = import.meta.env.VITE_BACKEND_URI;

  useEffect(() => {
    const fetchChat = async () => {
      const res = await axios.post(`${backendURI}/api/chats`, {
        userId,
        mentorId,
      });
      const chat = res.data;

      const messagesRes = await axios.get(
        `${backendURI}/api/chats/${chat._id}/messages`
      );
      setMessages(messagesRes.data);
    };

    fetchChat();
  }, [userId, mentorId]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const chatRes = await axios.post(`${backendURI}/api/chats`, {
      userId,
      mentorId,
    });
    const chat = chatRes.data;

    const res = await axios.post(
      `${backendURI}/api/chats/${chat._id}/messages`,
      {
        senderId: userId,
        content: newMessage,
      }
    );

    setMessages([...messages, res.data]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 bg-gray-200">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`p-2 ${
              message.sender._id === userId ? "text-right" : "text-left"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <p className="text-xs text-gray-600">{message.sender.name}</p>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={sendMessage}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
