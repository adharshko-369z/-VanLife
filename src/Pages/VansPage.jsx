import Badge from "../components/Badge/Badge"

import { useState,useEffect } from "react"

export default function VansPage(){

    const [vansDetails , setVansDetails] = useState([])

    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data=>{
                setVansDetails(data.vans)
            })
            .catch(err => console.log(err))
    },[])


    const vansOptions = vansDetails.map(van =>{
        
        return (
            <div key={van.id} className="van-card">
                <img src={van.imageUrl} alt={`${van.name} van`} />
                    <div className="van-text-container">
                        <h2>{van.name}</h2>
                        <p><strong>${van.price}</strong>/day</p>
                    </div>
                <Badge variant={van.type}>{van.type}</Badge>    
            </div>
        )
    })
 
    return(
        <section className="vans-page">
            <h1>Explore our van options</h1>
           <div className="vans-options">
                {vansOptions}  
            </div>
        </section>
    )
}