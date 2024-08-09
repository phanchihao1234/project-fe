import React, { useEffect, useState } from 'react'
import { Link, NavLink, } from 'react-router-dom';
import {
    Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle,
    Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown
} from 'reactstrap';
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { IoLocation, IoLocationOutline, IoMailSharp } from "react-icons/io5";

import "./header.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, findProducts } from '../../redux/productsSlice';
export default function Header() {
    const { carts } = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const handle_search = () => {
        dispatch(findProducts(keyword))
        setKeyword("")
    }


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
                        <small className="me-3"><IoLocationOutline size={20} className=' ' /> <a href="#" className="text-white">123 Hai Bà Trưng, TP. HCM</a></small>
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
                <Navbar className='navbar navbar-expand-xl' >
                    <NavLink to={"/"} className={"nav-link"}><h1 style={{ color: '#81c408' }}>Hao</h1> </NavLink>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar >
                            <NavItem>
                                <Link className='nav-link' to={"/"}>Trang chủ</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to={"/product"}>
                                    Sản phẩm
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/contact"} className='nav-link'>
                                    Liên hệ
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"*"} className='nav-link'>
                                    Tin tức
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="m-auto" navar>
                            <NavItem className='d-flex justify-content-center me-1'>
                                <Input placeholder='Tìm kiếm' className='rounded-5 w-100 '
                                    value={keyword} onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key == "Enter") {
                                            if (keyword == "") {
                                                dispatch(fetchProducts(currentPage))
                                                // navigate('/product')
                                            } else {
                                                handle_search()
                                            }
                                        }
                                    }}
                                />
                                <Button className="btn-search btn border border-success btn-md-square rounded-circle bg-white ">
                                    <FaSearch className='my-auto iconR' size={18} />
                                </Button>
                            </NavItem>
                            <NavItem>
                                <div className='shopping-cart ms-2'>
                                    <Link to={"/cart"} className=""><FaShoppingBag size={30} className='iconR' /></Link>
                                    <span className="qty rounded-circle d-flex align-items-center justify-content-center text-dark ">
                                        {carts.length}
                                    </span>
                                </div>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <Link className="ms-5 my-auto"><FaUser size={30} className='iconR' /></Link>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><NavLink to={"/login"} className={"nav-link"}>Đăng nhập</NavLink></DropdownItem>
                                        <DropdownItem><NavLink to={"*"} className={"nav-link"}>Thông tin user</NavLink></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem><NavLink to={"/"} className={"nav-link"}>Đăng xu</NavLink></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>

        </Container>
    )
}
