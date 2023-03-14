import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            {/* HEADER START  */}
            <section>
                <div className="header ">
                    {/*  TOP BAR START  */}
                    <div className="topbar bg-dark text-light py-2">
                        <div className="container-fluid">
                            <div className="topbar-text text-center">
                                <Link className="navbar-brand"> Click and Collect is now available at select stores.
                                    Enjoy complimentary carbon neutral shipping on orders over HK$400 <span className='fw-bold ps-2'>+</span></Link>
                            </div>
                        </div>
                    </div>

                    {/*  TOP BAR END  */}

                    {/*  NAVBAR START  */}
                    <nav className="navbar navbar-expand-lg bg-white py-4">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                        <Link className="nav-link active" to="">Skin Care</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Body & Hand</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Hair</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Fragrance</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Kits & Travel</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Gifts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Read</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Stores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to=""><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    </li>
                                </ul>
                                <div className="d-flex" role="search">
                                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Cabinet</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Cart</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/*  NAVBAR END */}
                </div>
            </section>
            {/*  HEADER END  */}

        </>
    )
}

export default Navbar