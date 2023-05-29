import React, { useState, useEffect } from "react";
import "./Chat.css";
import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, "messages"), orderBy("time")), (doc) => {
      const messagesNumber = doc.docs.length;

      setMessages(
        doc.docs.map((doc, index) => {
          return doc.data().message;
        })
      );
    });
  }, []);

  return (
    <>
      <div class="main-block chat">
        <div class="chat__messages">
          {/* Cообщения юзеров */}
          <div className="chat__container">
            {messages.map((message) => {
              return <Post messageClass message={message} />;
            })}
            <Form
              makeSubmit={() => console.log(123)}
              placeholder={"Введите сообщение.."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
