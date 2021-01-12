import React from 'react'

const BorderComponent = () => {
    return (
        <form className="form">
            <div className="form-group">
                <label htmlFor="" className="form-label">Border top lef</label>
                <input 
                    type="number" 
                    className="form-input"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="" className="form-label">Border top rigth</label>
                <input 
                    type="number" 
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="form-label">Border bottom lef</label>
                <input 
                    type="number" 
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="form-label">Border bottom rigth</label>
                <input 
                    type="number" 
                    className="form-input"
                />
            </div>

        </form>
    );
}
 
export default BorderComponent;