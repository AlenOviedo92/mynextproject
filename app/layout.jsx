//Éste es el contenedor de toda la App

// export const metadata = {
//   	title: 'Next.js',
//   	description: 'Generated by Next.js',
// }

import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
	//La etiqueta html solo se crea en el layout inicial
    <html lang="en">
		{/* 
		Esto no es necesario porque Next.js lo agrega con metadata
		<head>
			<title>My App</title>
		</head> 
		*/}
      	<body>
			<Navbar />
			{children}
		</body>
    </html>
  )
}
