import React, { useEffect, useState } from 'react';
import Post from './Post';
import { fetchPosts } from '../api/RedditAPI';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts('popular').then(setPosts);
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostList;
