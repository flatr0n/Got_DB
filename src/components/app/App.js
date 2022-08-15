import GotApi from "../../services/got-api.js";
import Header from "../header/Header.js";
import Post from "../post/Post.js";
import PostList from "../post-list/PostList.js";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [id, setId] = useState(1);
  const onClick = (id) => {
    setId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
          <PostList onClick={onClick} />
          <Post id={id} />
        </div>
      </div>
    </div>
  );
}

export default App;
