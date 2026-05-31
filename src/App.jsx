import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"


function App() {

  return (
    <main>
     <BrowserRouter>
      <Navbar>
        <Navbar.Logo path="/">#VANLIFE</Navbar.Logo>
        <Navbar.Nav>
          <Navbar.NavItem path="/about">About</Navbar.NavItem>
          <Navbar.NavItem path="/vans">Vans</Navbar.NavItem>
        </Navbar.Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans/>} />
        <Route path="/vans/:id" element={<VanDetails/>} />
      </Routes> 
      <Footer>Ⓒ 2026 #VANLIFE</Footer>
    </BrowserRouter>
    </main>
  )
}

export default App
