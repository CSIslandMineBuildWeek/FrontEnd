import React from 'react';

const Navbar = () => {
    return (
        <div className="navBar">
            <section className="logo">LOGO</section>
            <section className="title"><b>LAMBDA TREASURE HUNT</b></section>
            <section className="navbar-links">
                <div className="button map">MAP</div>
                <div className="button">HELP</div>
            </section>
        </div>
    )
}

export default Navbar;