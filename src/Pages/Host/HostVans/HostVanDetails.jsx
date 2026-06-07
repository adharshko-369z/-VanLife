import { useState,useEffect, createContext } from "react"
import { useParams, Outlet, NavLink } from "react-router-dom"
import Badge from "../../../components/Badge"

const VanDetailsContext = createContext()

export default function HostVanDetails(){
    const [HostVan,setHostVan] = useState(null)
    const param = useParams()
    
    useEffect(()=>{
        fetch(`/api/host/vans/${param.id}`)
        .then(res => res.json())
        .then(data => setHostVan(data.vans))
    },[param.id])

    return (
    HostVan && <div className="host-van-page">
        <div className="host-van-detail">
            <div className="van-summary-view">
                <img src={HostVan[0].imageUrl} alt="" />
                <div className="van-summary-details">
                    <Badge variant={HostVan[0].type}>{HostVan[0].type}</Badge>
                    <h1>{HostVan[0].name}</h1>
                    <p><strong>${HostVan[0].price}</strong>/day</p>
                </div>
            </div>
            <nav className="navbar host-nav">
                    <NavLink to={`/host/vans/${param.id}`}
                    className={({isActive}) => isActive ? "active-link" : null} end>
                        Details
                    </NavLink>
                    
                    <NavLink to={`/host/vans/${param.id}/pricing`}
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Pricing
                    </NavLink>

                    <NavLink to={`/host/vans/${param.id}/photos`}
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Photos
                    </NavLink>
            </nav>
            <VanDetailsContext.Provider value={{HostVan}}>
                <Outlet />
            </VanDetailsContext.Provider>
        </div>
    </div>
)
}

export { VanDetailsContext }