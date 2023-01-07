import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Header = () => {
    return (
        <>
            <section className='header' id='#'>
        <Container>
            <Row>
            <Col  lg={7} md={7} sm={12}>
            <div  className='sec1'>
                <div>
                <p>Chase The New Flavour</p>
                <img src="/Images/spoon.png" alt="" />
                </div>
                <h1>The Key To <br/> Fine Dining</h1>
                <h5>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</h5>
                <button>Explore Menu</button>
            </div>

            </Col>
            <Col lg={5} md={5} sm={12}>
            <div className='welcome_img'>
            <img src="/Images/welcome.png" alt="" />
            </div>
            </Col>
            </Row>
        </Container>
    </section>
        </>
    )
}
export default Header