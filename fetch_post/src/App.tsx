import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { queryClient } from './queryClient';

function InputPost() {
    const [post, setPost] = useState('');

    const createMutation = useMutation({
        mutationFn: postShop,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getAllPosts'] }),
    });

    function postShop() {
        const newPost = {
            post: post,
        };
        return fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    function inputText() {
        if (post.length > 3 && post.length <= 28) {
            createMutation.mutate();
        } else if (post.length <= 3) {
            alert('The text must be longer than 3 letters');
        } else if (post.length >= 28) {
            alert('The length cannot be more than 28 letters long');
        }
    }

    return (
        <div>
            <input type='text' placeholder='text...' value={post} onChange={e => setPost(e.target.value)} />
            <button className='btn__input' onClick={() => inputText()}>
                Push
            </button>
        </div>
    );
}
function PostComment() {
    type Post = {
        post: string;
        id: number;
    };

    function getAllPosts(): Promise<Post[]> {
        return fetch('http://localhost:3000/posts').then(response => response.json());
    }
    const { data: posts } = useQuery({
        queryKey: ['getAllPosts'],
        queryFn: getAllPosts,
        initialData: [],
    });

    const deleteMutation = useMutation({
        mutationFn: (id: number) =>
            fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE',
            }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getAllPosts'] }),
    });

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className='post-text'>
                    <div>{post.post}</div>
                    <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
function App() {
    return (
        <div className='App'>
            <h1 className='header-text'>Notes</h1>
            <InputPost />
            <PostComment />
        </div>
    );
}

export default App;
