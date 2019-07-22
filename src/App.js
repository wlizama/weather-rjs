import React, { useState } from 'react';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm'
import Error from './Components/Error';

function App() {

	const [ciudad, guardarCiudad] = useState('')
	const [pais, guardarPais] = useState('')
	const [error, guardarError] = useState('')

	const datosConsulta = datos => {
		// validacion de datos
		if (datos.ciudad === '' || datos.pais === '') {
			guardarError(true)
			return
		}

		guardarCiudad(datos.ciudad)
		guardarPais(datos.pais)
		guardarError(false)
	}

	let ErrorComp = error ? <Error mensaje='Ambos campos son obligatorios' /> : null

	return (
		<div className="App">
			<Header titulo="Hola Hooks" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<SearchForm datosConsulta={datosConsulta} />
						</div>
						<div className="col s12 m6">
							{ErrorComp}
						</div>						
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
