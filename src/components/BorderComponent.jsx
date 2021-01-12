import React from 'react'

const BorderComponent = ({ borders, setBorders }) => {

    const { topLeft, topRight, bottomLeft, bottomRight } = borders;

    const handleInputChange = e => {
        setBorders({
            ...borders,
            [ e.target.name ] : e.target.value
        });
    }

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
            <div className="form-group">
                <label htmlFor="" className="form-label">Border top lef</label>
                <input 
                    type="number" 
                    className="form-input"
                    name="topLeft"
                    value={ topLeft }
                    onChange= { handleInputChange }
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="" className="form-label">Border top rigth</label>
                <input 
                    type="number" 
                    className="form-input"
                    name="topRight"
                    value={ topRight }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="form-label">Border bottom lef</label>
                <input 
                    type="number" 
                    className="form-input"
                    name="bottomLeft"
                    value={ bottomLeft }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="form-label">Border bottom rigth</label>
                <input 
                    type="number" 
                    className="form-input"
                    name="bottomRight"
                    value={ bottomRight }
                    onChange= { handleInputChange }
                />
            </div>

            <button 
                className="form-clear"
                onClick={ handleReset }
            >Limpiar Campos</button>

        </form>
    );
}
 
export default BorderComponent;