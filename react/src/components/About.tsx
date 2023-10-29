// About.tsx
import React, { useState } from "react";
import { chat } from "./chat"; // chat.tsのインポート
import './About.css';

const About: React.FC = () => {
  const [message, setMessage] = useState<string>(""); // メッセージの状態管理用
  const [answer, setAnswer] = useState<string>(""); // 回答の状態管理用

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const responseText = await chat(message);
    setAnswer(responseText || "Error getting response");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            rows={5}
            cols={50}
            value={message}
            onChange={handleMessageChange}
          />
        </label>
        <div>
          <button type="submit">質問する</button>
        </div>
      </form>
      {answer && (
        <div>
          <h2>回答:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default About;
