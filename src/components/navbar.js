import {Link } from 'react-router-dom'


function Navbar(){

    return (
        <>
        <nav className="navbar">
            <h1>The Dogo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="cb"> Create blog</Link>
                <Link to="/signin"> Sign-in</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar