import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Sign = () => {
  return (
    <>
    <section className='sign' id="Log">
        <Container>
            <Row>
                <Col>
                <form className='form'>
                  
                    <center><h3>Newsletter</h3><img src="/Images/spoon.png" alt="" /></center>
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>And Never Miss Latest Updates!</p>
                    <div className='email'>
                    <center><input type="email" placeholder='    Enter your email address'/>
                    <button>Subscribe</button></center>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
        </section>
    </>
  )
}

export default Sign