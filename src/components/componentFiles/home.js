import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import image1 from '../../assets/images/image1.jpg';
import image21 from '../../assets/images/image21.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image31 from '../../assets/images/image31.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image from '../../assets/images/image.jpg';
import '../../assets/styles/home.css';

const HomePage = () => {
	return (
		<React.Fragment>
			<section>
				<div className="wrapper">
					<Carousel>
						<Carousel.Item>
							<img src={image3} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image1} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image21} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image2} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image31} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image6} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image4} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image5} className="carousel_image" alt="..." />
						</Carousel.Item>
						<Carousel.Item>
							<img src={image7} className="carousel_image" alt="..." />
						</Carousel.Item>
					</Carousel>
				</div>
			</section>

			<section>
				<div className="row container-fluid bg-light text-center">
					<div className="col-sm-4 padedcont">
						<p className="fonti">&copy;RoyalFramesMedia</p>
					</div>
					<div className="col-sm-4 text-center paded">
						<p className="fonti">
							<FontAwesomeIcon icon={faPhone} /> 0725298331
						</p>
						<p className="fonti">
							<FontAwesomeIcon icon={faAddressBook} /> royalframesmedia@gmail.com
						</p>
					</div>
					<div className="col-sm-4 paded">
						<span className="soc-media">
							<SocialIcon url="http://instagram.com/g_m_e23" />
						</span>
						<span className="soc-media">
							<SocialIcon url="http://facebook.com/Jeamiejames" />
						</span>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default HomePage;
