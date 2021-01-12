import React, { useRef } from 'react'

const BorderClasses = ({ borders }) => {

    const refClass = useRef();
    const toastRef = useRef();

    const { topLeft, topRight, bottomLeft, bottomRight } = borders;

    const handleCopy = () => {
        if( refClass.current.textContent.trim() !== ''){
            const styless = refClass.current.textContent.split('E');
    
            navigator.clipboard.writeText(styless[0]);
    
            toastRef.current.textContent= "Copiado"
            toastRef.current.classList.add('copied', 'fadein');
    
            setTimeout(() => {
                toastRef.current.classList.remove('copied', 'fadein')
                toastRef.current.textContent= null
            }, 3000);
        }
    }
    return (
        <>
            <div 
                className="container-class"
                ref={ refClass }
            >
                { ( topLeft === topRight && topLeft === bottomLeft && topLeft === bottomRight ) ? 
                    <p> { topLeft > 0 ? `border-radius: ${ topLeft }px;` : null } </p>
                :
                    ( topLeft === bottomRight && topRight === bottomLeft ) ? 
                    <p>border-radius: { `${ topLeft }px` } { topRight > 0 ? `${ topRight }px;` : '0;' }</p> 
                :
                    <p>border-radius: 
                        { topLeft > 0 ? ` ${ topLeft }px ` : ' 0 ' } 
                        { topRight > 0 ? `${ topRight }px ` : ' 0 ' } 
                        { bottomLeft > 0 ? `${ bottomLeft }px ` : ' 0 ' } 
                        { bottomRight > 0 ? `${ bottomRight }px; ` : ' 0 ' } 
                    </p>
                }
                <button 
                    className="button-copy"
                    onClick={ handleCopy }
                >
                    <i className="fas fa-copy"></i>
                </button>

                <p 
                    ref={ toastRef }
                ></p>
            </div>
        </>
    );
}
 
export default BorderClasses;