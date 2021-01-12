import React from 'react'

const BorderClasses = ({ borders }) => {

    const { topLeft, topRight, bottomLeft, bottomRight } = borders;

    return (
        <>
            { ( topLeft === topRight && topLeft === bottomLeft && topLeft === bottomRight ) ? 
                <p>border-radius: { topLeft > 0 ? `${ topLeft }px;` : null } </p>
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
        </>
    );
}
 
export default BorderClasses;