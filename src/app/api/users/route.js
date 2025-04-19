import { NextResponse } from "next/server";

console.log(process.env.TOKEN)

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?apikey=' + process.env.TOKEN)
    console.log('https://jsonplaceholder.typicode.com/users?apikey=' + process.env.TOKEN)
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST(request) {
    const { nombre, apellido} = await request.json() //Esta es la info que el cliente le envía al back, la info que viene desde el front
    console.log(nombre)
    console.log(apellido)
    return NextResponse.json({
        message: "Creando datos"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "Editando datos"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "Eliminando datos"
    })
}