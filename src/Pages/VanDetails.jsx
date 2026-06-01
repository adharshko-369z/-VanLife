import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Badge from "../components/Badge"
import Button from "../components/Button"

export default function VanDetails(){
    const [van,setVan] = useState(null)
    const params = useParams()
    
    useEffect (()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
            .catch(err => console.log(err))
    },[params.id])

return(
    van ?<div className="van-details-page">
            <img src={van.imageUrl} alt="" />
            <Badge variant={van.type}>{van.type}</Badge>
            <h1>{van.name}</h1>
            <p className="price"><strong>${van.price}</strong>/day</p>
            <p>{van.description}</p>
            <Button variant="primary-btn">Rent this van</Button>
        </div> : <h1>Loading...</h1>
)
}