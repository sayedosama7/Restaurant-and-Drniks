import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Awards = () => {
    return (
        <>
            <section className='awards' id='Awards'>
        <Container>
            <Row>
            <Col  lg={7} md={7} sm={12}>
            <div  className='sec1'>
                <div>
                <p>Awards & Recognition</p>
                <img src="/Images/spoon.png" alt="" />
                </div>
                <h1>Our Laurels</h1>
            </div>
            <div className="awards_num">
                <div>
                <img src="/Images/award02.png" alt="" /></div>
                <div>
                <h6>Bib Gourmond</h6>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                </div>
                <div>
                <img src="/Images/award01.png" alt="" /></div>
                <div>
                <h6>Rising Star</h6>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                </div>
                <div>
                <img src="/Images/award03.png" alt="" /></div>
                <div>
                <h6>AA Hospitality</h6>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                </div>
                <div>
                <img src="/Images/award05.png" alt="" /></div>
                <div>
                <h6>Outstanding Chef</h6>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                </div>
            </div>
            </Col>

            <Col  lg={5} md={5} sm={12}>
            <img className="awards_img" src="/Images/laurels.png" alt="" />
            </Col>
            </Row>
        </Container>
    </section>
        </>
    )
}
export default Awards