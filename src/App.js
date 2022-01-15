import {useState} from 'react'
import Home from './pages/home'
import './App.css'
import Container from './container'
import Footer from './footer'


import Components from './components/components'

const App = () =>{
  // const [component,setComponent ] = useState(true)
  // const [home,setHome] =  useState(true)

  return <>
   {/* { home && <Home/>  }  */}
   <Home/>
    <Container/>
    <Footer/>
  </>
}

export default App