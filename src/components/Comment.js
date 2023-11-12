// src/components/Comment.js
import React from 'react';

const Comment = ({ comment }) => (
    <div>
        <p>{comment.body}</p>
        {/* Add more details as needed */}
    </div>
);

export default Comment;
