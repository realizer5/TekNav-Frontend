import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Button,
} from "reactstrap";
import '../css/componants/navbar.css'

const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="custom-navbar">
            <NavbarBrand href="/" className="brand-logo">
                <img
                    src="https://via.placeholder.com/50" // Replace with your logo URL
                    alt="MyApp Logo"
                    className="logo-img"
                />
                MyApp
            </NavbarBrand>

            {/* Toggler for Mobile */}
            <NavbarToggler onClick={toggleNavbar} className={`toggler ${isOpen ? "open" : ""}`} />

            {/* Links and Login */}
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto nav-links" navbar>
                    <NavItem>
                        <NavLink href="/" className="nav-link-custom">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" className="nav-link-custom">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/services" className="nav-link-custom">
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact" className="nav-link-custom">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ms-auto">
                    <NavItem>
                        <Button color="primary" href="/login" className="login-button">
                            Login
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
