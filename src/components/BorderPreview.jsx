import React, { useEffect, useRef } from 'react'
import BorderClasses from './BorderClasses';

const BorderPreview = ({ borders }) => {

    // Props
    const { topLeft, topRight, bottomLeft, bottomRight } = borders;

    // Referencia para actualizar el borde del elemento .border-preview
    const borderRef = useRef();

    // Función para actualizar el borde del elemento .border-preview
    const handleClaseInput = () => {
        if( topLeft > 0 ){
            borderRef.current.style.borderTopLeftRadius = topLeft + "px";
        }

        if( topRight > 0 ){
            borderRef.current.style.borderTopRightRadius = topRight + "px";
        }
        
        if( bottomLeft > 0 ){
            borderRef.current.style.borderBottomLeftRadius = bottomLeft + "px";
        }

        if( bottomRight > 0 ){
            borderRef.current.style.borderBottomRightRadius = bottomRight + "px";
        }

        if( topLeft === '' && topLeft === topRight && topLeft === bottomLeft && topLeft === bottomRight ){
            borderRef.current.style.borderRadius = '0';
        }

    }

    useEffect( () => {
        handleClaseInput();

        // eslint-disable-next-line
    }, [ topLeft, topRight, bottomLeft, bottomRight ]);

    return (  
        <div 
            className="border-preview"
            ref={ borderRef }
        >
            <div className="border-code">
                <BorderClasses 
                    borders={ borders }
                />
            </div>
        </div>
    );
}
 
export default BorderPreview;