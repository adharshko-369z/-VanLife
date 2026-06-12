export default function Button({children,variant,onClick}){
    return(
        <button className={`btn ${variant} `} onClick={onClick}>{children}</button>
    )
}