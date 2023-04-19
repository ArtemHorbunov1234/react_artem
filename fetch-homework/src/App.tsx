import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { queryClient } from './queryClient';

function AddPost() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [img, setImg] = useState('');

    function convertString(value: string) {
        const numValue = Number(value);
        if (numValue === 0) {
            return '';
        } else {
            return numValue;
        }
    }

    const createMutation = useMutation({
        mutationFn: postShop,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getAllPosts'] }),
    });

    function postShop() {
        const newPost = {
            title: title,
            price: price,
            url: img,
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
        <div className='post--input'>
            <label>
                Title:
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Price:
                <input type='number' value={price} onChange={e => setPrice(convertString(e.target.value))} />
            </label>
            <label>
                Url:
                <input type='text' value={img} onChange={e => setImg(e.target.value)} />
            </label>
            <button className='post_btn--push' onClick={() => createMutation.mutate()}>
                Push
            </button>
        </div>
    );
}

type Post = {
    id: number;
    title: string;
    price: number;
    url: string;
};

function PostList() {
    const [comment, setComment] = useState('');
    const [hiddenComment, setHiddenComment] = useState(false);
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

    const commentsMutation = useMutation({
        mutationFn: postComment,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getAllComments'] }),
    });

    function postComment() {
        const newComment = {
            comment: comment,
        };
        return fetch('http://localhost:3000/comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    // type Comment = {
    //     comment: string;
    //     id: number;
    // };
    // function getAllComments(): Promise<Comment[]> {
    //     return fetch('http://localhost:3000/comments').then(response => response.json());
    // }
    // const { data: comments } = useQuery({
    //     queryKey: ['getAllComments'],
    //     queryFn: getAllComments,
    //     initialData: [],
    // });
    // let textComment;
    // if (hiddenComment) {
    //     textComment = (
    //         <div>

    //         </div>
    //     );
    // } else if (!hiddenComment) {
    //     return;
    // }

    return (
        <div className='post__container'>
            {posts.map(post => (
                <div key={post.id}>
                    <div>{post.title}</div>
                    <div>Price: {post.price} UAH</div>
                    <div>
                        <img className='post--img' src={post.url} />
                    </div>
                    <button className='post--btn' onClick={() => deleteMutation.mutate(post.id)}>
                        Del
                    </button>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <div>{comment.comment}</div>
                        </div>
                    ))}
                    <textarea
                        value={post.id}
                        placeholder='Comment'
                        className='post__comment'
                        onChange={e => setComment(e.target.value)}
                    ></textarea>

                    <button onClick={() => commentsMutation.mutate()}>Comment Push</button>
                </div>
            ))}
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
