import React from 'react'; 

const Items = () => { 
    const [counter, setCounter] = React.useState(0);
    return(
    <div className="Component">
        <button onClick={() => setCounter(counter + 1)}> + </button>
        <button>{counter}</button>
        <button onClick={() => setCounter(counter - 1)}> - </button>
    </div>
    );
}; 

export default Items;