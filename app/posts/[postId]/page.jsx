async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export default async function Page({ params }) {
    console.log(params)

    const post = await loadPost(params.postId)
    return(
        <div>
            <h1>{post.id}. { post.title }</h1>
            <p>{ post.body }</p>
        </div>
    )
}