import React from 'react'
let model="g123"
export const LearnComponent1 = () => {
    return (
        <>
        <h1>hellocomponent 1</h1>

        <h1>Price: {10 + 20}</h1>
        <h1> LG {model}</h1>
        <h1 className='bbg-primary'></h1>
        <h1 className={model}> Component model value</h1>
        </>
        
    );
};