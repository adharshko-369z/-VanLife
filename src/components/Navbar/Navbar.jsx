import { Link } from "react-router-dom"

export default function Navbar({children}){
    return <header className="navbar">{children}</header>
}

Navbar.Logo = function NavbarBrandname({children,path}){
    return (
        <Link to={path}>
            <span className="brand-name">{children}</span>
        </Link>
    )
}

Navbar.Nav = function Nav({children}){
    return <nav className="navbar-items">{children}</nav>
}

Navbar.NavItem = function NavItem({children ,path}){
    return <Link to={path}>{children}</Link>
    
}