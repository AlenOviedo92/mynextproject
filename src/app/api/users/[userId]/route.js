import { NextResponse } from "next/server";

export async function GET(request, props) {
    const params = await props.params
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()
    return NextResponse.json(data)
}