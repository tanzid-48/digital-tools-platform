import './App.css'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import StatsSection from './ui/StatsSection'
import Tab from './ui/Tab'

function App() {
return (
  <>
  <nav>
<NavBar></NavBar>
  </nav>

  <main>
   <Hero></Hero> 
   <StatsSection></StatsSection>
   <Products></Products>
   <Tab></Tab>
  </main>

  <footer></footer>
  </>
  )
}

export default App
