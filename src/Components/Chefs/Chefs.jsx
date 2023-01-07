import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Chefs = () => {
    return (
        <>
<section className='chefs' id='#'>
        <Container>
            <Row>
            <Col lg={7} md={7} sm={12}>
            <div className='welcome_img'>
            <img src="/Images/chef.png" alt="" />
            </div>
            </Col>
            <Col  lg={5} md={5} sm={12}>
            <div  className='sec1'>
                <div>
                <p>Chef's Word</p>
                <img src="/Images/spoon.png" alt="" />
                </div>
                <h1>What We Believe In</h1>
                <h5>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</h5>

            </div>
            <div className="chef">
                <h4>Sayed Osama</h4>
                <p>Chef & Founder</p>
            </div>

            </Col>

            </Row>
        </Container>
    </section>
        </>
    )
}
export default Chefs