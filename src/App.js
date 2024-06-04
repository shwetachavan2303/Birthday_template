
import React,{useState} from 'react'
import Data from './Data'
import './App.css'
const App = () => {
    const [data,setData]=useState(Data)

  return (
    <div className='App'>
    <section>
      <main>
      <p>Today Birthday {data.length} 😊</p>
      {Data && Data.map((x)=>{
        return(
         <div className='Cards' key={x.image}>
          <img src={x.image} alt="" height={'50px'} width={'50px'} />
          <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
         </div>
     )})}
      
   
   <button onClick={()=>setData([])}>Clear</button>
    </main>
    </section>
    </div>
  )
}

export default App
