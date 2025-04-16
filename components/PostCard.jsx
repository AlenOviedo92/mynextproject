"use client"

function PostCard({ post }) {
    return(
        <div>
            <h3>{ post.id }. { post.title}</h3>
            <p>{ post.body }</p>
            <button onClick={() => {console.log(`Click en el post número ${post.id}`)}}>
                Click
            </button>
        </div>
    )
}

export default PostCard;