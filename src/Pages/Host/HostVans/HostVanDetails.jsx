import { useState,useEffect} from "react"
import { useParams, Outlet, NavLink, Link } from "react-router-dom"
import Badge from "../../../components/Badge"

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
        <Link to=".." relative="path" className="back-btn-like-link">
            <span className="back-arrow">&larr;</span><span>Back to all vans</span>
        </Link>
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
                    <NavLink to="."
                    className={({isActive}) => isActive ? "active-link" : null} end>
                        Details
                    </NavLink>
                    
                    <NavLink to="pricing"
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Pricing
                    </NavLink>

                    <NavLink to="photos"
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Photos
                    </NavLink>
            </nav>
                <Outlet context={[HostVan]}/>
        </div>
    </div>
)
}

