import React, { useContext } from "react";
import "./index.css";
import { IPost } from "../../interfaces";
import { Context } from "../../context";

interface IPostComponent {
  post: IPost;
  active: boolean;
}

export const Post: React.FC<IPostComponent> = ({ post, active }) => {
  const { clickPost } = useContext(Context);
  const classes:string[] = ['post-item'];
  if (active) {
    classes.push('active');
  }
  return (
    <li className={classes.join(' ')} onClick={() => clickPost(post.id)}>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
    </li>
  );
};
