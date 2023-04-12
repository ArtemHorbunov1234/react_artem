import { useEffect, useState } from 'react';

type PlaceholderPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function PostsPlaceholder() {
    const [posts, setPosts] = useState<PlaceholderPost[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <>
            {posts.map(post => (
                <div>{post.title}</div>
            ))}
        </>
    );
}

type Post = {
    id: number;
    title: string;
    author: string;
};

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    function deletePost(id: number) {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
        }).then(res => console.log(res));
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <div>Title: {post.title}</div>
                    <div>Author: {post.author}</div>
                    <button onClick={() => deletePost(post.id)}>Del</button>
                </div>
            ))}
        </div>
    );
}

function AddPost() {
    const [postTitle, setPostTitle] = useState('');
    const [postAuthor, setPostAuthor] = useState('');

    function addPost() {
        const newPost = {
            title: postTitle,
            author: postAuthor,
        };

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return (
        <div>
            <input type='text' value={postTitle} onChange={e => setPostTitle(e.target.value)} />
            <input type='text' value={postAuthor} onChange={e => setPostAuthor(e.target.value)} />
            <button onClick={addPost}>Add post</button>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <AddPost />
            <PostList />
        </div>
    );
}

export default App;
