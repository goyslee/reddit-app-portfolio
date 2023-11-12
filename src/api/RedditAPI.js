// Example API call function
export const fetchPosts = async (subreddit) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        return json.data.children.map((post) => post.data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

// RedditAPI.js
export const fetchComments = async (subreddit, postId) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
        const json = await response.json();
        // The first array contains the post, and the second array contains the comments
        return json[1].data.children.map((comment) => comment.data);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
};

