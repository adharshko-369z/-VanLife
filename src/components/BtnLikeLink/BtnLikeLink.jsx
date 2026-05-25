import { Link } from "react-router-dom";

export default function BtnLikeLink({children,path,variant}){
    return <Link className={` btn-link ${variant}`} to={path}>{children}</Link>
}