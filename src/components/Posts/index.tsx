import React, { useContext } from "react";
import { Context } from "../../context";
import { IPost } from "../../interfaces";
import { Post } from "../Post";

interface IPostsComponent {
  posts: IPost[];
}

export const Posts: React.FC<IPostsComponent> = ({ posts }) => {
  const { idActivePost } = useContext(Context);

  return (
    <>
      <ol>
        {posts &&
          posts.map((post: IPost) => {
            return (
              <Post
                active={post.id === idActivePost}
                key={post.id}
                post={post}
              />
            );
          })}
      </ol>
    </>
  );
};
