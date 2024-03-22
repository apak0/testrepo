import "./App.css";

import React from "react";
import addNotification from "react-push-notification";

function App() {
  const clickToNotify = () => {
    addNotification({
      title: "code with mami",
      message: "this is message",
      duration: 4000,

      native: true,
      onClick: () =>
        console.log("asd")
    });
  };

  return (
    <div className="App">
      <div className="">
        <h1>First Name</h1>
        <input type="text" placeholder="name" />
        <button onClick={clickToNotify}>Send</button>
      </div>
    </div>
  );
}

export default App;
