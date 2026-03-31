import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import StatsSection from './ui/StatsSection'
import Tab from './ui/Tab'
import Card from './ui/Card'

const getProduct = async() =>{
  const res = await fetch("/Products.json");
  return res.json();
}
 const productPromise = getProduct();

function App() {
  const [isBuy,setIsBuy] = useState("Products")
  const [cards,SetCards] = useState([]);

return (
  <>
  <nav>
<NavBar></NavBar>
  </nav>

  <main>
   <Hero></Hero> 
   <StatsSection></StatsSection>
   <Tab isBuy={isBuy} setIsBuy={setIsBuy} cards= {cards} />
   {
    isBuy === "Products" &&  <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
    <Products productPromise = {productPromise}  cards = {cards} SetCards = {SetCards} ></Products>
   </Suspense>
   }

   {
    isBuy === "Card" && <Card isBuy = {isBuy} setIsBuy = {setIsBuy}   cards={cards} 
    SetCards={SetCards}  ></Card>
   }

  </main>

  <footer></footer>
  </>
  )
}

export default App
