import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans(){

    const[HostVans,setHostVans] = useState([])

    useEffect(()=>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
            .catch(err => console.log(err))
    },[])

    const vansList = HostVans.map(van =>{
        return( 
            <Link className="host-van" to={van.id} key={van.id}>
                <img src={van.imageUrl} alt={`${van.name} van`} />
                <div className="van-detail">
                    <h2>{van.name}</h2>
                    <p>{`$${van.price}/day`}</p>
                </div>
            </Link>
            )
    })

    console.log(HostVans)

    return (
        
        <div className="host-vans-list">
            <h1>Your listed vans</h1>
            { vansList }
        </div>
        
    )
  
}