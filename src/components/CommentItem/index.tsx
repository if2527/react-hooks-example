import React from "react";
import { IComment } from "../../interfaces";
import './index.css'

export const CommentItem: React.FC<{ comments: IComment[] }> = ({ comments }) => {
  return (
    <ul>
      {comments &&
        comments.map((comment) => {
          return (
            <li className='comment-item' key={comment.id}>
              <h3>{comment.name}</h3>
              <small><i>{comment.email}</i></small>
              <p>{comment.body}</p>
            </li>
          );
        })}
    </ul>
  );
};
