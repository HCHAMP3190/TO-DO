import { useState } from 'react'
import './App.css'
function App() {
  const[inputtext,setInputtext]=useState("");//to handle inputtext
  const [items, setItems] = useState([]);//to re render items
  const [dialog,setDialog]=useState();//for showing click to remove

  //updating value of inputtext
  const handleChange=(event)=>{
    setInputtext(event.target.value);
  }
 
  //add items to list
  const addItem = () => {
    if(inputtext=="")
    {
      alert("Enter a task");
      return;
    }
    const newItem =inputtext;
    setItems([...items, newItem]);
    setInputtext("");
  };

  //removeitem from list
  const removeItem=(index)=>{
    items.splice(index,1);
    setItems([...items]);
  }

  //for showing dialog box of "click to remove"
  const handlemouseover=()=>{
    setDialog(<div style={{margin:'10px',display:'inline',color:'red',height:'5px',width:'50px'
    ,fontSize:'10px'
    }}>
      click to remove!
    </div>);
  }

  // Handling click to remove appearance
  const handlemouseleave=()=>{
    setDialog("");
  }

  // adding item to list on clicking enter
  const handleKeyDown=(event)=>{
    if(event.key==='Enter')
    {
      addItem();
    }
  }
  return (
    
    <div className='parent'>
      <div className='header'>TO-DO LIST</div>
      <div className='outer'>
        <div className='inner'>
          <input className='input' type="text" placeholder='Enter the task...'
          value={inputtext}
          onChange={handleChange}
          onKeyDown={handleKeyDown}/>
          <button className='button' type='submit'
          onClick={addItem}>Add</button>
          </div>
          <div className='add'>
          <ol>
          {items.map((item,index) => (
          <li key={index} onMouseEnter={()=>handlemouseover()}
          onMouseLeave={()=>handlemouseleave()}
          onClick={() => removeItem(index)}>{item}
          {dialog}
          </li>
          ))}
        </ol>
      </div>
    </div>
      <p className='para'>Developed by HD</p>
   </div>
  )
}

export default App
