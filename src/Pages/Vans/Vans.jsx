import Badge from "../../components/Badge"
import Button from "../../components/Button"

import { useState,useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans(){
    const [searchParams,setSearchParams] = useSearchParams()
    const [vansDetails , setVansDetails] = useState([])

    const typeFilter = searchParams.get("type")

    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data=>{
                setVansDetails(data.vans)
            })
            .catch(err => console.log(err))
    },[])

    const displayVansDetails = typeFilter ? vansDetails.filter(van => typeFilter === van.type) : vansDetails

    const vansOptions = displayVansDetails.map(van =>{         
        return (
                <Link to={van.id} key={van.id} className="van-card" 
                state={{search:searchParams.toString(),type:typeFilter}}> 
                    <img src={van.imageUrl} alt={`${van.name} van`} />
                        <div className="van-text-container">
                            <h2>{van.name}</h2>
                            <p><strong>${van.price}</strong>/day</p>
                        </div>
                    <Badge variant={van.type}>{van.type}</Badge>
                </Link> 
        )
    })

    function handleFilterChange(key,value){
        setSearchParams(prevParams=>{
            if(value===null){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }
            return prevParams
        })
    }
 
    return(
        <section className="vans-page">
            <h1>Explore our van options</h1>
            <div className="filter-btns">    
                <Button variant= {`filter-btn filter-btn-simple
                    ${typeFilter==="simple"? "selected" : ""} `}
                    onClick={()=>handleFilterChange("type","simple")}>
                    simple
                </Button>
                <Button variant= {`filter-btn filter-btn-luxury
                    ${typeFilter==="luxury"? "selected" : ""}`} 
                    onClick={()=>handleFilterChange("type","luxury")}>
                    luxury
                </Button>
                <Button variant= {`filter-btn filter-btn-rugged
                    ${typeFilter==="rugged"? "selected" : ""}`} 
                    onClick={()=>handleFilterChange("type","rugged")}>
                    rugged
                </Button>
                {typeFilter && <Button variant= {`clear-filters-btn`}
                    onClick={()=>handleFilterChange("type",null)}>
                    clear filters
                </Button>}
            </div>
           <div className="vans-options">
                {vansOptions}  
            </div>
        </section>
    )
}