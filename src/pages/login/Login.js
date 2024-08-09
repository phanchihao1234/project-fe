import React from 'react'
import "./login.css"
import Images from '../../images/Images'
import { Button, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <Container fluid className="bg-login-page" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5" style={{ color: "#ffb524" }}>Sign in</h3>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Pwd' />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <Link className='nav-link'>Forgot password?</Link>
                                    </div>
                                    <Col xs={12}>
                                        <Button className="button-login-page border-0 btn-lg w-100 " type="submit">Login</Button>
                                    </Col>

                                    <hr className="my-4" />

                                    <Row>
                                        <Col xs={6}>
                                            <Button className="button-login-page border-0 btn-lg w-100" type="submit">Facebook</Button>
                                        </Col>
                                        <Col xs={6}>
                                            <Button className="button-login-page border-0 btn-lg w-100" type="submit">Facebook</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}
