import React from 'react'; 
import  Items  from './components/Items.js'; 

function App() { 

  const [component, setComponent] = React.useState([]); 

  const addItem = () => { 
    const value = [...component,[]]
    setComponent(value) 
    
  } 
  
  return ( 
    <div> 
      <button onClick = { () => addItem() } > Add to Cart </ button>
      <div> Selected Items</div>
      {component.map((item) => ( <Items /> ))}
    </div> 
    
  ) 
  
}
export default App;