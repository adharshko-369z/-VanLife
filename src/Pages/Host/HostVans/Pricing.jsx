import { useOutletContext } from "react-router-dom";

export default function Pricing(){

    const [ HostVan ] = useOutletContext()

    return(
        <div className="price-section">
            <p><strong>{`$${HostVan[0].price}`}</strong>/day</p>
        </div>
    )
}