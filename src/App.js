import React, { useState } from 'react';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm'

function App() {

	const [ciudad, guardarCiudad] = useState('')
	const [pais, guardarPais] = useState('')

	const datosConsulta = datos => {
		// validacion de datos
		if (datos.ciudad === '' || datos.pais === '') {
			
			return
		}

		guardarCiudad(datos.ciudad)
		guardarPais(datos.pais)
	}

	return (
		<div className="App">
			<Header titulo="Hola Hooks" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<SearchForm datosConsulta={datosConsulta} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
