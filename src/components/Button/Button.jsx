export default function Button({children,variant}){
    return(
        <button className={`btn ${variant}`}>{children}</button>
    )
}