import React, { useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../../images/Cana.png";
import "./navbar.css";

export default function Navbar2() {
    const LogOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("username", "");
        localStorage.setItem("userEmail", "");
        localStorage.setItem("cartItems", "");
    };
    console.log("NAVBAR RENDER");
    return (
        <>
            {/* <div className="logoBg">
                <a href="/">
                    <img className="logo1" src={logo} />
                </a>
            </div> */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/livrare">Delivery</Nav.Link>
                            <Nav.Link href="/Shop2">Shop</Nav.Link>
                        </Nav>
                        <Nav>
                            {localStorage.getItem("token") ? (
                                <Nav.Link href="/savedItems">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-heart-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                        />
                                    </svg>
                                </Nav.Link>
                            ) : null}

                            <NavDropdown
                                title="Account"
                                id="collasible-nav-dropdown"
                            >
                                {!localStorage.getItem("token") && (
                                    <>
                                        <NavDropdown.Item href="/login1">
                                            Log In
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/register">
                                            Sign Up
                                        </NavDropdown.Item>
                                    </>
                                )}

                                {localStorage.getItem("token") ? (
                                    <NavDropdown.Item href="/" onClick={LogOut}>
                                        Log Out
                                    </NavDropdown.Item>
                                ) : null}

                                {localStorage.getItem("token") ? (
                                    <NavDropdown.Item href="/myAccount">
                                        My Account
                                    </NavDropdown.Item>
                                ) : null}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
