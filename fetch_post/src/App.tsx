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

    return (
        <div>
            <input type='text' value={post} onChange={e => setPost(e.target.value)} />
            <button onClick={() => createMutation.mutate()}>Push</button>
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
                <div key={post.id}>
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
            <InputPost />
            <PostComment />
        </div>
    );
}

export default App;
