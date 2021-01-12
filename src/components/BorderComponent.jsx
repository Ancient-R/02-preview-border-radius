import React from 'react'

const BorderComponent = ({ borders, setBorders }) => {

    //  Props
    const { topLeft, topRight, bottomLeft, bottomRight } = borders;

    // Función para actualizar el estado del input
    const handleInputChange = e => {
        setBorders({
            ...borders,
            [ e.target.name ] : e.target.value
        });
    }

    //  Función para reestablecer todo el formulario
    const handleReset = (e) => {
        e.preventDefault();
        setBorders({
            topLeft: '',
            topRight: '',
            bottomLeft: '',
            bottomRight: ''
        });
    }


    return (
        <form className="form">
            <h2 className="form-title">Valores de los bordes</h2>
            <div className="form-group">
                <input 
                    type="number" 
                    className="form-input"
                    placeholder="Border top lef"
                    name="topLeft"
                    value={ topLeft }
                    onChange= { handleInputChange }
                />
            </div>
                <input 
                    type="number" 
                    className="form-input"
                    placeholder="Border top right"
                    name="topRight"
                    value={ topRight }
                    onChange= { handleInputChange }
                />
            <div className="form-group">
            </div>

            <div className="form-group">
                <input 
                    type="number" 
                    className="form-input"
                    placeholder="Border bottom lef"
                    name="bottomLeft"
                    value={ bottomLeft }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="number" 
                    className="form-input"
                    placeholder="Border bottom right"
                    name="bottomRight"
                    value={ bottomRight }
                    onChange= { handleInputChange }
                />
            </div>

            <button 
                className="form-clear"
                onClick={ handleReset }
            >
                <i className="fas fa-backspace"></i>
            </button>

        </form>
    );
}
 
export default BorderComponent;