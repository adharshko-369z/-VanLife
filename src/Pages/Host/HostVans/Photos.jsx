import { useContext } from "react";
import { VanDetailsContext } from "./HostVanDetails";

export default function Photos(){

    const { HostVan } = useContext(VanDetailsContext)

    return(
        <div className="photos-section">
            <img src={HostVan[0].imageUrl} alt={`${HostVan[0].name} van`} />
        </div>
    )
}