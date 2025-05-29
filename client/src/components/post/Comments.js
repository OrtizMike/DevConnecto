import React from 'react';
import CommentItem from './CommentItem';

const Comments = ({ post: { _id, comments }}) => {
  return (
    <div className='comments'>
        {comments.length > 0 ? (
        comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={_id} />
        ))
    ) : "No comments yet."}
</div>
  )
}

export default Comments;