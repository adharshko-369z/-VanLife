import { useContext } from "react";
import { VanDetailsContext } from "./HostVanDetails";

export default function Details(){

    const { HostVan } = useContext(VanDetailsContext)

    return(
        <div className="details-section">
            <p><strong>Name:</strong>{HostVan[0].name}</p>
            <p><strong>Category:</strong>{HostVan[0].type}</p>
            <p><strong>Description:</strong>{HostVan[0].description}</p>
        </div>
    )
}