// src/components/CommentList.js
import React, { useState, useEffect } from 'react';
import { fetchComments } from '../api/RedditAPI';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (postId) {
            fetchComments(postId).then(setComments);
        }
    }, [postId]);

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
