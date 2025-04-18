"use client"
import { useRouter, useParams, useSearchParams } from "next/navigation"; 

// export const metadata = {
// 	title: "Acerca de nosotros - Faztweb",
// }

function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>About</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis rem quas corporis laboriosam doloribus, veniam placeat earum quisquam unde ab tenetur quibusdam ratione, est nemo vel distinctio doloremque reprehenderit aliquam sint corrupti? Ipsum ducimus vitae omnis error. Harum necessitatibus et minus quidem incidunt, modi libero illum, minima enim voluptates ipsa. Debitis facere ea enim quod neque iusto consequuntur provident numquam, odit blanditiis? Dolor, officia aspernatur quas quisquam nemo pariatur vitae expedita corporis voluptatem voluptates velit, exercitationem impedit aut nesciunt natus nisi beatae magnam officiis veniam laboriosam inventore perferendis porro explicabo! Dicta aperiam error incidunt non. Dolores sit dolorum officia magnam.</p>
    
        <button 
            className="bg-sky-400 px-3 py-2 rounded-md"
            onClick={() => {
                alert("Executing code!!!")     //Este código se ejecuta antes de redireccionar
                router.push("/")               //Método para cambiar de página, entre (va la ruta a la cual quiero ir)
            }}
        >
            Click
        </button>
    </section> 
}

export default AboutPage;