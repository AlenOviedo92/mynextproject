"use client" //Agrego este string para evitar error por añadir onClick, useState ... Para manejar el compoente del lado cliente
import { useEffect } from "react";  //No es necesario volver a poner "user client", porque el componente Users se renderiza dentro del componente HomePage que ya está marcado como "user client"

function Users() {
    useEffect(() => {
        alert('Loaded')
    }, [])

    return(
        <div>
            Users
        </div>
    )
}

export default Users;