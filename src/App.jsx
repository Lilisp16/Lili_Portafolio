import { useState } from 'react'

import './App.css'
import './index.css';
import Header from './components/Header'
import Acerca from './sections/Acerca';
import Portafolio from './sections/Portafolio';
import Habilidades from './sections/Habilidades';
import Reflexion from './sections/Reflexion';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />



  {/* Contenido de la página */}
      <main className="pt-20">
          <Acerca/>
    
        <Portafolio/>
    
         <Habilidades/>

         <Reflexion/>
   


    
      </main>

        <Footer/>
     


 

   
    </>
  )
}









export default App
