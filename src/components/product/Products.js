import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
import Product from './Product'
import "./products.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/productsSlice'

export default function Products() {
    const { products, status, error } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "start") {
            dispatch(fetchProducts())
        }
    }, [])
    console.log(products)
    return (
        <Container fluid className='py-5 fruite'>
            <Container className='py-3'>
                <h1 className="mb-4">Fresh fruits shop</h1>
                <Row className='g-4'>
                    <Col lg={12}>
                        <Row className="g-4">
                            <Col xl={3}>
                                <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><FaSearch /></span>
                                </div>
                            </Col>
                            <Col xs={7}></Col>
                            <Col xl={2}>
                                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label for="fruits">Lọc:</label>
                                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="">Min - Max</option>
                                        <option value="">Max - Min</option>
                                        <option value="">A-Z</option>
                                        <option value="">Z-A</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="g-4">
                            <Col lg={3}>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <h4>Danh mục</h4>
                                        <ul className="list-unstyled fruite-categorie">
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Apples</a>
                                                    <span>(3)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Oranges</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Strawbery</a>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Banana</a>
                                                    <span>(8)</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between fruite-name">
                                                    <a href="#">Pumpkin</a>
                                                    <span>(5)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <h4>Khuyến mãi</h4>
                                        <div class="d-flex align-items-center justify-content-start">
                                            <div class="rounded me-4" style={{ width: 100, height: 100 }}>
                                                <img src="/images/featur-3.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">Name</h6>
                                                {/* <div class="d-flex mb-2">
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star"></i>
                                                </div> */}
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">2.99 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={9}>
                                <Row className='g-4 justify-content-center'>
                                    {/* product here */}

                                    {
                                        products.map((item, index) => (<Product item={item} index={index} />))
                                    }

                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
