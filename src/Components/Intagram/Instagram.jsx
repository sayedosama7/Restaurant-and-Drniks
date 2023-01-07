import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
const Instagram = () => {
  return (
    <>
    <section className='insta'>
    <Container>
        <Row>
            <Col lg={6} md={6} sm={12}>
            <div  className='insta_left'>
                <div>
                <p>Instagram</p>
                <img src="/Images/spoon.png" alt="" />
                </div>
                <h1>Photo Gallery</h1>
                <h5>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</h5>
                <button>View More</button>
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src="/Images/gallery01.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Images/gallery02.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Images/gallery03.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Images/gallery04.png" alt="" /></SwiperSlide>
        </Swiper>

            </Col>

        </Row>
    </Container>
    </section>
    </>
  )
}

export default Instagram




