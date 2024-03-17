import "./App.css";

import React from "react";
import addNotification from "react-push-notification";
import logo from "./images/logo.jpg";

function App() {
  const clickToNotify = () => {
    addNotification({
      title: "code with mami",
      message: "this is message",
      duration: 4000,
      icon: logo,
      native: true,
      onClick: () => window.location = "https://www.youtube.com/watch?v=SiWlUmkPmkU"
    });
  };

  return (
    <div className="App">
      <div className="">
        <h1>Name</h1>
        <input type="text" placeholder="name" />
        <button onClick={clickToNotify}>Send</button>
      </div>
    </div>
  );
}

export default App;
