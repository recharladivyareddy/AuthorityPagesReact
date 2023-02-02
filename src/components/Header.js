import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar  navbar-expand-sm  navbar-dark xx ">
                    <div className="container-fluid ">
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
                            aria-controls="navbarTog">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="">Road Transport Dept <i className="fa-solid fa-road"></i></a>
                        <div className="navbar-collapse collapse" id="navbarTog">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="homepage.html"><i style={{margin: "10px"}}
                                        className="fa-solid fa-house-user"></i>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="loginpage.html"><i style={{margin: "10px"}}
                                        className="fa-solid fa-right-from-bracket"></i>Logout</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}
