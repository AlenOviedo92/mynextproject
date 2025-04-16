import PostCard from "../../components/PostCard";

async function loadPosts() {    //Esta fn hace la petición al backend
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

async function PostPages() {    //Este es el componente que renderiza en el frontend
    const posts = await loadPosts()
    console.log(posts)          //Este console.log se muestra en la consola del browser
    return(
        <div>
            { posts.map(post => (
                <PostCard post={ post } key={ post.id } />
            )) }
        </div>
    )
}

export default PostPages;