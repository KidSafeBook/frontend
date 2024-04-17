import React from "react";
import "../styles/App.css";
import Main from "./main.js";
import Menu from "./menu.js";
import Footer from "./footer.js";
import FriendListSideBar from "./friendListSideBar.js";
import FunctionalitiesSideBar from "./functionalitiesSideBar.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <div id="root-body">
        <FunctionalitiesSideBar />
        <Main />
        <FriendListSideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
