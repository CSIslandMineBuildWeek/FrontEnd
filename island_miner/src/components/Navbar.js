import React from 'react';

const Navbar = () => {
    const logout = ev => {
        localStorage.removeItem("token");
        window.location = "/";
      };

    return (
        <div className="navBar">
            <section className="logo"><img src="./resources/logo.jpg" alt="Logo" /></section>
            <section className="titleSection"><b>LAMBDA TREASURE HUNT</b></section>
            <section className="navbar-links">
                <div className="button map">MAP</div>
                <div className="button">ABOUT</div>
                <div className="button" onClick={logout}>LOG OUT</div>
            </section>
        </div>
    )
}

export default Navbar;