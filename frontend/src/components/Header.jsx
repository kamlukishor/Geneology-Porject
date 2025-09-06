import React from "react"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{padding:"50px"}}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-success" href="#">Parampara</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Find Tree</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <form className="d-flex me-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <div className="d-flex">
                            <a href="#" className="btn btn-outline-primary me-2">Register</a>
                            <a href="#" className="btn btn-success">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header