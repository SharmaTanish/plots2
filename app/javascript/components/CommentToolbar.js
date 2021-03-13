/* eslint-disable complexity */
import React from "react";
import PropTypes from "prop-types";

import CommentToolbarButton from "./CommentToolbarButton";

const CommentToolbar = ({
  authorId,
  currentUser,
  handleEditFormToggle,
  nodeAuthorId
}) => {
  // 1. edit button
  const editIcon = <i className="fa fa-pencil"></i>;
  const editButton = (currentUser && authorId === currentUser.id) ?
    <CommentToolbarButton 
      icon={editIcon} 
      onClick={handleEditFormToggle}
    /> :
    "";

  // 2. mark spam button (for moderators) OR flag as spam (for all users)
  const markSpamIcon = <i className="fa fa-ban"></i>;
  const flagSpamIcon = <i className="fa fa-flag"></i>;
  const markSpamButton = (currentUser && currentUser.canModerate) ?
    <CommentToolbarButton icon={markSpamIcon} /> :
    <CommentToolbarButton icon={flagSpamIcon} />;
  // original Rails view's conditionals include logged_in_as['admin', 'moderator']
  // don't know if this is completely equivalent to user.canModerate

  // 3. delete comment button
  const deleteIcon = <i className='icon fa fa-trash'></i>;
  const deleteButton = (
    currentUser && authorId === currentUser.id ||
    currentUser && currentUser.canModerate ||
    authorId === nodeAuthorId
  ) ?
    <CommentToolbarButton icon={deleteIcon} /> :
    "";

  // 4. leave an emoji reaction button
  const emojiIcon = <i className='far fa-heart'></i>;
  const emojiButton = currentUser ?
    <CommentToolbarButton icon={emojiIcon} /> :
    "";

  return (
    <div
      className="navbar-text float-right"
      style={{
        marginRight: 0,
        paddingRight: "10px"
      }}
    >
      {/* placeholder: role icon for admins and moderators--but it's commented out in the original partial? */}
      {/* placeholder: this comment was posted by email */}
      {editButton}
      &nbsp;
      {markSpamButton}
      &nbsp;
      {deleteButton}
      &nbsp;
      {emojiButton}
    </div>
  );
}

CommentToolbar.propTypes = {
  authorId: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
  handleEditFormToggle: PropTypes.func.isRequired,
  nodeAuthorId: PropTypes.number.isRequired
};

export default CommentToolbar;
