"use client"
import Link from "next/link";

// Este es un React Client Component RCC
function PostCard({ post }) {
    return(
        <div>
            <Link href={`/posts/${post.id}`}>
                <h3>{ post.id }. { post.title}</h3>
            </Link>
            <p>{ post.body }</p>
            <button onClick={() => {console.log(`Click en el post número ${post.id}`)}}>
                Click
            </button>
        </div>
    )
}

export default PostCard;