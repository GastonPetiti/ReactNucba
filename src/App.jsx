import './App.css'
import CategoryWidget from './components/categories/categoryWidget'
import { Footer } from './components/footer/Footer'
import Header from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { ProductWidget } from './components/products/product_widget/product_widget'


function App() {

  return (
  <>
   <Header/>
   <Hero/>
   <CategoryWidget/>
   <ProductWidget/>
   <Footer/>
  </>
  )
}

export default App
