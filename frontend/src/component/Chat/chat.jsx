import React, { useState } from 'react';

function ChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, type: 'received', text: 'Hi !! This is message from Riya . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis similique quisquam eveniet pariatur commodi modi voluptatibus iusto omnis harum illum iste distinctio expedita illo!', timestamp: '18:06 PM | July 24', userImage: 'user2.png' },
    { id: 2, type: 'sent', text: 'Hi riya , Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis deleniti earum magni recusandae assumenda.', timestamp: '18:30 PM | July 24', userImage: 'user1.png' },
    { id: 3, type: 'received', text: 'Hi !! This is message from John Lewis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. iste distinctio expedita illo!', timestamp: '18:31 PM | July 24', userImage: 'user2.png' },
    { id: 4, type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sequi.', timestamp: '18:34 PM | July 24', userImage: 'user1.png' }
  ]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      type: 'sent',
      text: message,
      timestamp: new Date().toLocaleTimeString(),
      userImage: 'user1.png'
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="container">
      <div className="msg-header">
        <div className="container1">
          <img src="user1.png" className="msgimg" alt="User profile" />
          <div className="active">
            <p>User name</p>
          </div>
        </div>
      </div>

      <div className="chat-page">
        <div className="msg-inbox">
          <div className="chats">
            <div className="msg-page">
              {messages.map((msg) => (
                <div key={msg.id} className={msg.type === 'received' ? 'received-chats' : 'outgoing-chats'}>
                  <div className={msg.type === 'received' ? 'received-chats-img' : 'outgoing-chats-img'}>
                    <img src={msg.userImage} alt="Chat user" />
                  </div>
                  <div className={msg.type === 'received' ? 'received-msg' : 'outgoing-msg'}>
                    <div className={msg.type === 'received' ? 'received-msg-inbox' : 'outgoing-chats-msg'}>
                      <p>{msg.text}</p>
                      <span className="time">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="msg-bottom">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Write message..."
              value={message}
              onChange={handleMessageChange}
            />
            <span className="input-group-text send-icon" onClick={handleSendMessage}>
              <i className="bi bi-send"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;