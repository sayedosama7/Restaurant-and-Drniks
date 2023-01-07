import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const AboutUs = () => {
    return (
        <>
<section className='about' id='About'>
        <Container>
            <Row>
                <Col lg={3} md={3} sm={12}>
                <div className='sec2_div'>
                    <h1 className='sec2_h1'>About Us</h1>
                    <img className='spoon' src="/Images/spoon.png" alt="" />
                    <p className='sec2_p'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                    <button className='sec2_button'>Know More</button>
                </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <div className='images'>
                    <img className='g' src="/Images/G.png" alt="" />
                    <img className='knife' src="/Images/knife.png" alt="" />
                </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                <div className='sec2_left'>
                    <h1>Our History</h1>
                    <img  className='spoon2' src="/Images/spoon.png" alt="" />
                    <p>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
                    <button >Know More</button>
                </div>
                </Col>
                
            </Row>
        </Container>
        </section>
        </>
    )
}
export default AboutUs