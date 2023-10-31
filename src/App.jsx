import { Box } from '@chakra-ui/react'
import './App.css'
import { Footer } from './components/footer/Footer'
import Header from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Products } from './components/products/Products'

function App() {

  return (
   <Box justifyContent={'space-between'} height={'100vh'}>
   <Header/>
   <Hero/>
   <Products></Products>
   <Footer/>
   </Box>
  )
}

export default App
