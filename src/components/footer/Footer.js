import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import './footer.css'
import payment from './images/payment.png';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This ensures smooth scrolling
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            <Container fluid className=" text-white-50 footer pt-5 mt-5">
                <Container className="py-5">
                    <div className="pb-4 mb-4" >
                        <Row className='g-5'>
                            <Col lg="3">
                                <a href="#">
                                    <h1 className=" mb-0">Fruitables</h1>
                                    <p className=" mb-0" style={{ color: '#ffb524' }} >Fresh products</p>
                                </a>
                            </Col>
                            <Col lg="6">
                                <div className=" mx-auto" style={{ position: 'relative' }}>
                                    <Input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type='email' placeholder='Your Email' />
                                    <button type="submit" className="btn-sub-now border-0 border-secondary py-3 px-4 rounded-pill text-white "
                                        style={{ position: "absolute", top: 0, right: 0 }} >Subscribe Now</button>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><FaTwitter size={23} /></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><FaFacebook size={23} /></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><FaYoutube size={23} /></a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><FaLinkedin size={23} /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className='my-2 g-5'>
                        {/* <div class="col-lg-3 col-md-6"> */}
                        <Col lg={3} md={6}>
                            <div class="footer-item">
                                <h4 class="text-light mb-3">Why People Like us!</h4>
                                <p class="mb-4">typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                                <a href="" class="btn py-2 px-4 rounded-pill ">Read More</a>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div class="d-flex flex-column text-start footer-item">
                                <h4 class="text-light mb-3">Shop Info</h4>
                                <a class="btn-link" href="">About Us</a>
                                <a class="btn-link" href="">Contact Us</a>
                                <a class="btn-link" href="">Privacy Policy</a>
                                <a class="btn-link" href="">Terms & Condition</a>
                                <a class="btn-link" href="">Return Policy</a>
                                <a class="btn-link" href="">FAQs & Help</a>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div class="d-flex flex-column text-start footer-item">
                                <h4 class="text-light mb-3">Account</h4>
                                <a class="btn-link" href="">My Account</a>
                                <a class="btn-link" href="">Shop details</a>
                                <a class="btn-link" href="">Shopping Cart</a>
                                <a class="btn-link" href="">Wishlist</a>
                                <a class="btn-link" href="">Order History</a>
                                <a class="btn-link" href="">International Orders</a>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div class="footer-item">
                                <h4 class="text-light mb-3">Contact</h4>
                                <p>Address: 1429 Netus Rd, NY 48247</p>
                                <p>Email: Example@gmail.com</p>
                                <p>Phone: +0123 4567 8910</p>
                                <p>Payment Accepted</p>
                                <img src={payment} class="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {isVisible &&
                (
                    <Button className="btn btn-primary border-3 rounded-circle back-to-top"
                        onClick={() => scrollToTop()}
                    >
                        <FaArrowUp />
                    </Button>
                )
            }

        </>
    )
}
