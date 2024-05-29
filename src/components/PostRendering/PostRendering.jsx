import { useState, useEffect } from "react"


function PostRendering() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    

    return (
        <div>
            <h1>Post Rendering</h1>
            <ol>
            {posts === null ? "loading..." : posts.map(post => (
                <li key={post.id} style={{ border: '2px solid black', padding: '10px', marginBottom: '10px' }}>
                    <h1>{post.title}</h1>
                    <p style={{ fontSize: '20px'}}>{post.body}</p>
                </li>
            ))}
            </ol>
        </div>
    )
}

export default PostRendering