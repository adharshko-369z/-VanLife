import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans/Vans"
import VanDetails from "./Pages/Vans/VanDetails"

import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"
import HostVans from "./Pages/Host/HostVans/HostVans"
import HostVanDetails from "./Pages/Host/HostVans/HostVanDetails"
import NotFound from "./Pages/NotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import Details from "./Pages/Host/HostVans/Details"
import Pricing from "./Pages/Host/HostVans/Pricing"
import Photos from "./Pages/Host/HostVans/Photos"


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans/>} />
          <Route path="vans/:id" element={<VanDetails/>} />
          
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans/>} />
            <Route path="vans/:id" element={<HostVanDetails />} >
              <Route index element={<Details/>} />
              <Route path="pricing" element={<Pricing/>} />
              <Route path="photos" element={<Photos/>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
