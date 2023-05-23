import React from "react";

import "./App.css";
import UserCard from "./components/RCT101-E1-Typesc/UserCard";

function App() {
  return (
    <div className="App">
      <UserCard
        name="Deadpool"
        avatar="https://wallpapers.com/images/featured/tzhfez1w8ud2z8aw.jpg"
        posts={200}
        followers={999}
        address="Marvel x-men"
      />
    </div>
  );
}

export default App;
