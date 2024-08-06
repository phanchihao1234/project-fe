import React from 'react'

import { Col } from 'reactstrap'

export default function Product(props) {
    const { index, item, error } = props
    return (
        <Col xl={4} lg={6} key={index}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={item.images ? item.images : "/images/best-product-1.jpg"} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute " style={{ top: 10, left: 10 }} >%</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{item.name ? item.name : ""}</h4>
                    <p>{item.description ? item.description : ""}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    )
}
