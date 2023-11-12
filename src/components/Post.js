import React from 'react';

const Post = ({ post }) => (
    <div>
        <h2>{post.title}</h2>
        <p>{post.selftext}</p>
    </div>
);

export default Post;
