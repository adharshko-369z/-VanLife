import { BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"


function App() {

  return (
    <main>
     <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans/>} />
          <Route path="/vans/:id" element={<VanDetails/>} />
        </Route>
      </Routes> 
    </BrowserRouter>
    </main>
  )
}

export default App
