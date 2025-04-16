import Users from "../components/Users";
// import { useState } from "react";

//El metadata solo funciona en componentes del lado del servidor
export const metadata = {
    title: 'Mi página especial HOME'
}

export default function HomePage() {
    // server component
    return <section>
        {/* <h1>Fuck world!</h1>
        <button onClick={() => {console.log('Hice click en el botón')}}>
            Click
        </button>
        {
            window.localStorage.getItem('token')
        } */}
        {/* Client component */}
        <Users />
    </section>
}