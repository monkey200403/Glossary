import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { First } from './First'
import { Third } from './Third'
import { Usestate } from './hooks/Usestate'
import { UseEffect } from './hooks/UseEffect'
import { Apintegration } from './hooks/Apintegration'

import { Dictionary } from './Dictionaryproject/Dictionary'




export const App = () => {

  // let myname = "madhumitha"
  // let myage = 20
  return (
    <>
    {/* <First conent={myname}></First>
    <Third conent={myname}></Third> */}
    <Usestate></Usestate>
    <UseEffect></UseEffect>
    {/* <Apintegration></Apintegration> */}
    <Dictionary></Dictionary>
   
    </>
  )
}



export default App
