import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/image1.jpg";
import image21 from "../../assets/images/image21.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image31 from "../../assets/images/image31.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image from "../../assets/images/image.jpg";
import "../../assets/styles/home.css";
import HomeHeader from "../common/HomeNav";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <section>
        <div className='wrapper'>
          <Carousel interval={2000}>
            <Carousel.Item>
              <img
                src={image3}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image1}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image21}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image2}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image} className='img-fluid carousel_image' alt='...' />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image31}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image6}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image4}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image5}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image7}
                className='img-fluid carousel_image'
                alt='...'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
