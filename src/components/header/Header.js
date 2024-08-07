import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { IoLocation, IoLocationOutline, IoMailSharp } from "react-icons/io5";

import "./header.css"
export default function Header() {
    const [isShadow, setIsShadow] = useState(false);
    const [topOffset, setTopOffset] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const handleScroll = () => {
            const width = window.innerWidth;
            const scrollTop = window.scrollY;

            if (width < 990) {
                setTopOffset(0)
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
    }, [setTopOffset]);
    return (
        // class="container-fluid fixed-top shadow"
        <Container className={`fixed-top ${isShadow ? 'shadow ' : ''}`} style={{ top: topOffset, }} fluid>
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
                                <Link className='nav-link' to={"/"}>Trang chủ</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to={"/product"}>
                                    Sản phẩm
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
                                    Liên hệ
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"*"} className='nav-link'>
                                    Đăng nhập
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ms-5" navbar>
                            <NavItem className='d-flex'>
                                <Input placeholder='Tìm kiếm' className='rounded-5 w-50 ms-2' />
                                <Button className="btn-search btn border border-success btn-md-square rounded-circle bg-white ms-4"><FaSearch className='my-auto iconR' size={18} /></Button>
                                <div className='shopping-cart'>
                                    <Link to={"/cart"} className=" ms-2 my-auto"><FaShoppingBag size={35} className='iconR' /></Link>
                                    <span className="qty rounded-circle d-flex align-items-center justify-content-center text-dark px-1">
                                        1
                                    </span>
                                </div>
                                <Link className=" ms-2 my-auto"><FaUser size={35} className='iconR' /></Link>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>
            </Container>
        </Container>
    )
}
