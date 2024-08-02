import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { IoLocation, IoLocationOutline, IoMailSharp } from "react-icons/io5";

import "./header.css"
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [isShadow, setIsShadow] = useState(false);
    const [topOffset, setTopOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const width = window.innerWidth;
            const scrollTop = window.scrollY;

            if (width < 990) {
                if (scrollTop > 60) {
                    setIsShadow(true);
                } else {
                    setIsShadow(false);
                }
            } else {
                if (scrollTop > 60) {
                    setIsShadow(true);
                    setTopOffset(-60);
                } else {
                    setIsShadow(false);
                    setTopOffset(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        // class="container-fluid fixed-top shadow"
        <Container className={`fixed-top ${isShadow ? 'shadow' : ''}`} style={{ top: topOffset }} fluid>
            <Container className="topbar  d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><IoLocationOutline size={20} className=' ' /> <a href="#" className="text-white">123 Street, New York</a></small>
                        <small className="me-3"><IoMailSharp size={20} className=' ' /><a href="#" className="text-white"> Email@Example.com</a></small>
                    </div>
                    <div className="top-link pe-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </Container>
            <Container className=' px-0'>
                <Navbar className='navbar navbar-expand-lg' >
                    <NavbarBrand href="/"><h1 style={{ color: '#81c408', }}>Hao</h1> </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto " navbar>
                            <NavItem>
                                <Link className='nav-link' >Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link'>
                                    Shop
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Pages
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Link to={"/contact"} className='nav-link'>
                                    Contact
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ms-5" navbar>
                            <NavItem className='d-flex'>
                                <Input placeholder='Search here' className='rounded-5 w-50 ms-2' />
                                <Button className="btn-search btn border border-success btn-md-square rounded-circle bg-white ms-4"><FaSearch className='my-auto iconR' size={18} /></Button>
                                <Link className=" ms-2 my-auto"><FaShoppingBag size={35} className='iconR' /></Link>
                                <Link className=" ms-2 my-auto"><FaUser size={35} className='iconR' /></Link>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>
            </Container>
        </Container>
    )
}
