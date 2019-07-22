import React from 'react'

const SearchForm = () => {

    const handleChange = () => {

    }

    return (
        <form>
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="PE">Perú</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />
            </div>
        </form>
    )
}

export default SearchForm
