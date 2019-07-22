import React from 'react';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm'

function App() {
	return (
		<div className="App">
			<Header titulo="Hola Hooks" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<SearchForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
