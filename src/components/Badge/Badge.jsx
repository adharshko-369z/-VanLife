export default function Badge({children,variant}){
    return(
        <p className={`badge ${variant}`}>{children}</p>
    )
}