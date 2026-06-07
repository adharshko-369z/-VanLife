import { useContext } from "react";
import { VanDetailsContext } from "./HostVanDetails";

export default function Pricing(){

    const { HostVan } = useContext(VanDetailsContext)

    return(
        <div className="price-section">
            <p><strong>{`$${HostVan[0].price}`}</strong>/day</p>
        </div>
    )
}