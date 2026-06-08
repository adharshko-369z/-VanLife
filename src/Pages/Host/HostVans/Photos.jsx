import { useOutletContext } from "react-router-dom";

export default function Photos(){

    const [ HostVan ] = useOutletContext()

    return(
        <div className="photos-section">
            <img src={HostVan[0].imageUrl} alt={`${HostVan[0].name} van`} />
        </div>
    )
}