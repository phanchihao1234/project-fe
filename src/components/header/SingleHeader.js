import React from 'react'
import { Container } from 'reactstrap'

export default function SingleHeader(props) {
    const { item } = props
    return (
        <>
            <Container fluid className=" page-header py-5">
                <h1 className="text-center text-white display-6">{item}</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">{item}</li>
                </ol>
            </Container>
        </>
    )
}
