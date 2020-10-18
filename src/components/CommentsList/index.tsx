import React, { useContext } from "react";
import { Context } from "../../context";
import { IComment } from "../../interfaces";
import { CommentItem } from "../CommentItem";
import "./index.css";

export const CommentsList: React.FC<{ comments: IComment[] }> = ({ comments }) => {
  const { closeModal } = useContext(Context);
  return (
    <div className="modal-wrap" onClick={() => closeModal()}>
      <div className="modal">
        <div className="modal-header">
          <h2>Comments:</h2>
          <button className='close' onClick={() => closeModal()}>&times;</button>
        </div>
        <div className="modal-body">
          <CommentItem comments={comments} />
        </div>
      </div>
    </div>
  );
};
