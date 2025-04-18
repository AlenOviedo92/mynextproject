import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export default async function Page(props) {

    const params = await props.params; // 👈 ¡Esperamos primero!
    const { postId } = params;
    console.log('postId:', postId)

    const post = await loadPost(postId)

    return(
        <div>
            <h1>{post.id}. { post.title }</h1>
            <p>{ post.body }</p>
            <hr />
            <h3>Otras Publicaciones</h3>
            <Suspense fallback={<div>Cargando publicaciones...</div>}>
                <Posts />
            </Suspense>
        </div>
    )
}