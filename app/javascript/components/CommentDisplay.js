import React from "react";
import PropTypes from "prop-types";

import CommentReplies from "./CommentReplies.js";

// this component swaps visibility with edit form depending on isEditFormVisible, see Comment.js
const CommentDisplay = ({
  commentId,
  htmlCommentText,
  isReplyFormVisible,
  nodeAuthorId,
  replies,
  replyCommentForm,
  replyTo,
  setIsReplyFormVisible,
  setTextAreaValues,
  user,
  userCommentedText
}) => {

  return (
    <div
        id={"c" + commentId + "show"}
        style={{
          border: "1px solid #e7e7e7",
          padding: "36px"
        }}
      >
        <div 
          id={"comment-body-" + commentId} 
          className="comment-body"
        >
          {htmlCommentText}
          {/* partial has a contain_trimmed_body bit ? */}
          {/* is this a question? post it to the questions page */}
          {/* breakout questions */}
          {/* have you attempted or completed this activity? */}
        </div>
        {/* only comments that DO NOT have a replyTo will have a reply section */}
        {replyTo ?
          "" :
          <CommentReplies 
            commentId={commentId}
            currentUser={user}
            isReplyFormVisible={isReplyFormVisible}
            handleReplyFormToggle={() => setIsReplyFormVisible(!isReplyFormVisible)}
            nodeAuthorId={nodeAuthorId}
            replies={replies}
            replyCommentForm={replyCommentForm}
            setTextAreaValues={setTextAreaValues}
            userCommentedText={userCommentedText}
          />
        }
        {/* emojis section - can decide which <div> this should nest into, in non-React version, this is right after the closing </div> tag below */}
      </div>
  );
}

CommentDisplay.propTypes = {
  commentId: PropTypes.number.isRequired,
  htmlCommentText: PropTypes.string.isRequired,
  isReplyFormVisible: PropTypes.bool,
  nodeAuthorId: PropTypes.number.isRequired,
  replies: PropTypes.array,
  replyCommentForm: PropTypes.element,
  replyTo: PropTypes.number,
  setIsReplyFormVisible: PropTypes.func,
  setTextAreaValues: PropTypes.func.isRequired,
  user: PropTypes.object,
  userCommentedText: PropTypes.string.isRequired
}

export default CommentDisplay;
