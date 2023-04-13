import { useCallback, useEffect, useState } from 'react';
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
    function postShop() {
        const newPost = {
            title: title,
            price: price,
            url: img,
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

            <button className='post_btn--push' onClick={postShop}>
                Push
            </button>
        </div>
    );
}
type List = {
    id: number;
    title: string;
    price: number;
    url: string;
};
function PostList() {
    const [posts, setPosts] = useState<List[]>([]);

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
        <div className='post__container'>
            {posts.map(post => (
                <div key={post.id}>
                    <div>{post.title}</div>
                    <div>Price: {post.price} UAH</div>
                    <div>
                        <img className='post--img' src={post.url} />
                    </div>
                    <button className='post--btn' onClick={() => deletePost(post.id)}>
                        Del
                    </button>
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
