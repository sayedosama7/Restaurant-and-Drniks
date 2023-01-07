import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
    <section className='footer'>
    <Container>
      <Row>
        <Col lg={4} md={4} sm={4}>
        <center><h2>Contact Us</h2></center>
          <h5>9 W 53rd St, New York, NY 10019, USA</h5>
          <p>01210304516</p>
          <p>01210304516</p>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <center><h1>Gericht</h1></center>
          <h5>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</h5>
          <center><img src="/Images/spoon.png" alt="" /></center>
          <center>

          <a href='https://web.facebook.com/?_rdc=1&_rdr' target={"_blank"} rel="noreferrer" ><i class="fa-brands fa-facebook"></i></a>
          <a href='https://web.facebook.com/?_rdc=1&_rdr' target={"_blank"} rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
          <a href='https://web.facebook.com/?_rdc=1&_rdr' target={"_blank"} rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
          </center>
        </Col>
        <Col lg={4} md={4} sm={4}>
        <center><h2>Working Hours</h2></center>
          <center>
          <p>Monday-Friday:</p>
          <p>08:00 Am - 12:00 Am</p>
          </center>
          <center>
          <p>Saturday-Sunday:</p>
          <p>08:00 Am - 12:00 Am</p>
          </center>

        </Col>
        <center><h6>2021 Gericht. All Rights Reserved.</h6></center>
      </Row>
    </Container>
    </section>
    
    
    </>
  )
}

export default Footer