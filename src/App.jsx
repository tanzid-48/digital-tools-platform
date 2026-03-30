import { Suspense } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import StatsSection from './ui/StatsSection'
import Tab from './ui/Tab'

const getProduct = async() =>{
  const res = await fetch("/Products.json");
  return res.json();
}

function App() {

  const productPromise = getProduct();


return (
  <>
  <nav>
<NavBar></NavBar>
  </nav>

  <main>
   <Hero></Hero> 
   <StatsSection></StatsSection>
   
   <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
    <Products productPromise = {productPromise}></Products>
   </Suspense>

  </main>

  <footer></footer>
  </>
  )
}

export default App
