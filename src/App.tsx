import React, { useState, useEffect } from "react";
import "./App.css";

import { IComment, IPost } from "./interfaces";
import { Posts } from "./components/Posts/index";
import { Context } from "./context";
import { CommentsList } from "./components/CommentsList";

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[] | any>([]);
  const [idActivePost, setIdActivePost] = useState<number | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  const body = document.getElementsByTagName("body")[0];
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let postsData = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_start=1&_limit=10"
        );
        postsData = await postsData.json();

        setPosts(postsData);
      } catch (e) {
        console.log('.....', e);
      }
    }

    fetchMyAPI();
  }, []);

  const clickPost = (id: number): void => {
    if (!body.classList.contains("no-scroll")) {
      body.classList.add("no-scroll");
    }

    setIdActivePost(id);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((dataComments) => setComments(dataComments));
  };

  const closeModal = () => {
    setComments([]);
    setIdActivePost(null);
    if (body.classList.contains("no-scroll")) {
      body.classList.remove("no-scroll");
    }
  };

  return (
    <Context.Provider value={{ clickPost, closeModal, idActivePost }}>
      <div className="wrapper">
        <h1 style={{textAlign: 'center'}}>Posts: </h1>
        {!posts.length ? (
          <p>You do not have any posts!</p>
        ) : (
          <Posts posts={posts} />
        )}
        {comments.length > 0 && <CommentsList comments={comments} />}
      </div>
    </Context.Provider>
  );
};
export default App;
