import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import React, {useState } from 'react'
import { First } from './First'
import { Third } from './Third'
import { Usestate } from './hooks/Usestate'
import { UseEffect } from './hooks/UseEffect'
import { Apintegration } from './hooks/Apintegration'





export const App = () => {
    const[searchname, setSearchname] = useState('')
    const [arraydata, setArraydata] = useState([])
    console.log(arraydata);
    
    function handlesubmit(e) {
        e.preventDefault();
               axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchname}`).then((output)=>{            
            setArraydata(output.data[0].meanings)
            console.log(output.data[0].meanings);
            
        })
    }
  // let myname = "madhumitha"
  // let myage = 20
  return (
    <>
    {/* <First conent={myname}></First>
    <Third conent={myname}></Third> */}
    {/* <Usestate></Usestate>
    <UseEffect></UseEffect> */}
    {/* <Apintegration></Apintegration> */}
    {/* <Dictionary></Dictionary> */}
       <div className='container'>
        <h2 className='dic'>GLOSSARY</h2>
        <p className='para'>"Discover the meaning of any word instantly with our free online dictionary.Enhance your vocabulary and language skills with our easy-to-use dictionary."</p>
    <form onSubmit={handlesubmit} className='formtag'>

        <input type="text" className='inputtype' placeholder='Enter some word...' onChange={(e)=>setSearchname(e.target.value)}/>
        <button type='submit' className='button'>Search</button>
    </form>
        <h2 className='word'>{searchname.toUpperCase()}</h2>
        {arraydata.length > 0 && (
        <div className="card">
  {
  arraydata.map((value, index) => (
    <div className="cardsec" key={index}>
      <h2 className="parts">{value.partOfSpeech.toUpperCase()}</h2>
      {
      value.definitions.map((data, id) => (
        <p className="definition" key={id}>{data.definition}</p>
          
      ))
      }
    </div>
  ))
  }
</div>

        )}

    </div>
    </>
  )
}



export default App
