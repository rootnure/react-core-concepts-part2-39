import { useEffect, useState } from "react"

export default function Posts() {
    // 1. Create a state to store the data
    const [posts, setPosts] = useState([]);

    // 2. Crete useEffect with no dependency
    useEffect(() => {
        // 3. Use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []); // empty array means no dependency

    return(
        <div className="">
            <h3>Posts: {posts.length}</h3>
        </div>
    )
}

/**
 * 1. Create a state to store the data
 * 2. Create useEffect with no dependency
 * 3. Use fetch to load data
 */