import React, { Component, useContext, useState } from 'react';
import Home from "./pages/Home/"
import Contact from "./pages/Contact/Contact"
import Batch from "./pages/Batch"


const App = () => {

  const [textState, setTextState] = useState("test value");



  return (
    <div>
      <Home />




      <Contact />

      <Batch sentGender="boy" batchmateName="Pushpinder" />





    </div>
  )
}


export default App;


