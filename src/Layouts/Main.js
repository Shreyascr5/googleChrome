import React from "react";
import "./Main.css";
import Logo from "../Images/Google-logo.png";

export default function Main() {
  return (
    <div className="main">
      {" "}
      <img id="logo" src={Logo} alt="logo" height="105" width="272" />
      <input type="text" placeholder="Search Google or type URL" />
      <div className="buttonContainer">
        <button>Google Search</button>
        <button>I'm feeling lucky</button>
      </div>
     <p>Google offered in: <a href="/nothing"> हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</a></p>
    </div>
  );
}
