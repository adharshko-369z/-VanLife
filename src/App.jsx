import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"


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
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage />} />
      </Routes> 
      <Footer>Ⓒ 2026 #VANLIFE</Footer>
    </BrowserRouter>
    </main>
  )
}

export default App
