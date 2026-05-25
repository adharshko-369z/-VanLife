export default function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}

Card.Title = function CardTitle({children}){
    return <h2 className="card-title">{children}</h2>
}