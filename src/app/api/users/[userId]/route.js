import { NextResponse } from "next/server";

export async function GET(request, props) {
    const params = await props.params
    console.log(params)
    //Para extraer las querys
    const { searchParams } = new URL(request.url) //Toma la información de la URL que es un string y la transforma en un obj
    console.log(searchParams)
    console.log(searchParams.get('nombre'))
    console.log(searchParams.get('apellido'))
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()
    return NextResponse.json(data)
}