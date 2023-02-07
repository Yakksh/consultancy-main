import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {  NavLink  } from "react-router-dom";
import tickleminds from "../assets/img/tickleminds.png";

export const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <div className='navBar'>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand className="ticklemindslogo" href="/">
                        <img src={tickleminds} alt="TickleMinds" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto main__navbar-links_container">
                            <NavLink className='navbar-link' to='/'>Home</NavLink>
                            <NavLink className='navbar-link' to="/about">About</NavLink>
                            <NavLink className='navbar-link' to="/services">Services</NavLink>
                            <NavLink className='navbar-link' to="/technologies">Technologies</NavLink>
                            <NavLink className='navbar-link' to="/portfolio">Portfolio</NavLink>
                            <NavLink className='navbar-link' to="/blog">Blog</NavLink>
                            <NavLink className='navbar-link' to="/contact">Contact</NavLink>
                            <button className="main__navbar-sign">Sign up</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
