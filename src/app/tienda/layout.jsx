import Link from "next/link";

//En cada Layout(o cualquier componente) puedo configurar propiedades metadata
export const metadata = {
	title: "Tienda Oficial",
}

function TiendaLayout({ children }) {
    return <>
        <nav>
            <h3>Sección Tienda</h3>

            <ul>
                <li>
                    <Link href="/tienda/categorias">Categorías</Link>
                </li>
                <li>
                    <Link href="/tienda/categorias/computadoras">Computadoras</Link>
                </li>
            </ul>
        </nav>
        { children }
    </>
}

export default TiendaLayout;
