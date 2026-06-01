import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="header">
            <Link to="/">
                <span className="brand-name">#VANLIFE</span>
           </Link>
           <nav className="navbar">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
           </nav>

        </header>
    )
}

