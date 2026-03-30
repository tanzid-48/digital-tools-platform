import './App.css'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import StatsSection from './ui/StatsSection'

function App() {
return (
  <>
  <nav>
<NavBar></NavBar>
  </nav>

  <main>
   <Hero></Hero> 
   <StatsSection></StatsSection>
  </main>

  <footer></footer>
  </>
  )
}

export default App
