import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
return (
    <>
        <section className='contact' id='Contact'>
        <Container>
            <Row>
            <Col  lg={7} md={7} sm={12}>
            <div  className='sec1'>
                <div>
                <p>Contact</p>
                <img src="/Images/spoon.png" alt="" />
                </div>
                <h1>Find Us</h1>
                <h5>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</h5>
                <h3>Opening Hours</h3>
                <h6>Mon - Fri: 10:00 Am - 02:00 Am</h6>
                <h6>Sat - Sun: 10:00 Am - 03:00 Am</h6>
                <button>Visit Us</button>
            </div>

            </Col>
            <Col lg={5} md={5} sm={12}>
            <div className='insta_img'>
            <img src="/Images/findus.png" alt="" />
            </div>
            </Col>
            </Row>
        </Container>
    </section>
    </>
)
}

export default Contact