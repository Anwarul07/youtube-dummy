import React, { useEffect } from "react";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "./Utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const ApiSet = setInterval(() => {
      console.log("Api pooling test");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(18),
        })
      );
    }, 2000);

    return () => clearInterval(ApiSet);
  }, []);

  return (
    <>
      <div className="w-full h-[420px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2  border-black border-2"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("on foerm submit "  +liveMessage)



          dispatch(
            addMessage({
              name: "Anwarul Haque",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-80 border-none outline-none"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />

        <button className="px-2 mx-2 bg-green-300 font-bold rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
