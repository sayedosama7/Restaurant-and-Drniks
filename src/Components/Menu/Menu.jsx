import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Menu = () => {
    return (
        <>
<section className="menus" id='Menu'>
                    <Container>
                        <Row>
                            <div className="the_menu">
                                <h3>
                                Menu That Fits Your Palatte
                                </h3>
                            <h1>
                            Today's Special
                            </h1>
                            </div>
                            <Col className="menu_left" lg={3} md={3} sm={12}>
                            <div>
                                <h5>Chapel Hill Shiraz  _______ 95$</h5>
                                <p>AU | Bottle</p>
                            </div>
                            <div>
                                <h5>Catena Malbee  _________  95$</h5>
                                <p>AU | Bottle</p>
                            </div>
                            <div>
                                <h5>La Vieillw Rose  _________  95$</h5>
                                <p>FR | 750 Ml</p>
                            </div>
                            <div>
                                <h5>Rhino Pale Ale  _________  95$</h5>
                                <p>CA | 750 Ml</p>
                            </div>
                            <div>
                                <h5>Chapel Hill Shiraz  _______  95$</h5>
                                <p>AU | Bottle</p>
                            </div>
                            </Col>
                            <Col className='menuu' lg={6} md={6} sm={12}>
                            <img className="menu" src="/Images/menu.png" alt="" />
                            </Col>
                            <Col className="menu_right" lg={3} md={3} sm={12}>
                            <div>
                                <h5>Chapel Hill Shiraz  _______  95$</h5>
                                <p>Aperol | Villa Marchesi Prosecco | Soda | 30 Ml</p>
                            </div>
                            <div>
                                <h5>Catena Malbee  _________  95$</h5>
                                <p>Bourbon | Brown Sugar | Angostura Bitters</p>
                            </div>
                            <div>
                                <h5>La Vieillw Rose  _________  95$</h5>
                                <p>Gin | Sweet Vermouth | Campari | Orange Garnish</p>
                            </div>
                            <div>
                                <h5>Rhino Pale Ale  _________  95$</h5>
                                <p>CA | 750 Ml</p>
                            </div>
                            <div>
                                <h5>Chapel Hill Shiraz  _______ 95$</h5>
                                <p>AU | Bottle</p>
                            </div>

                            </Col>
                            <div className="menu_button">
                            <center> <button >View More</button></center>
                            </div>
                        </Row>
                    </Container>
                </section>
        </>
    )
}
export default Menu