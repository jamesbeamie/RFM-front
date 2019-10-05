import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import '../../assets/styles/about.css';

const AboutPage = () => {
	return (
		<React.Fragment>

			<section className="img-fluid" id="prlx">
				<div className="container-fluid">
					<div className="wtitle text-center">
						<h5>Creative</h5>
						<h5>Passionate</h5>
						<h5>Work oriented</h5>
						
					</div>
				</div>
			</section>

			<section>
				<div className="row bg-light text-center container-fluid">
					<div className="col-sm-12">
						<h3>About us</h3>
					<hr></hr>
					</div>
				</div>
			</section>

			<section>
				<div id="wording" className="row container-fluid bg-light text-center">
				
					<div className="col-sm-4">
					<h5>Who we are</h5>
						<p className="fonti">We are RoyalFramesMedia, </p>
						<p className="fonti">a company founded by Rose Brian, motivated by the need t have more creative content creators</p>
					</div>
					<div className="col-sm-4 text-center">
						<h5>What we do</h5>
						<p className="fonti">We do photography We do photography We do photography</p>
						<p className="fonti">We do photography We do photography We do photography We do photography We do photography We do photography</p>
					</div>
					<div className="col-sm-4 text-center">
						<h5>Contact info</h5>
						<p className="fonti">
							<FontAwesomeIcon icon={faPhone} /> 0725298331
						</p>
						<p className="fonti">
							<FontAwesomeIcon icon={faAddressBook} /> royalframesmedia@gmail.com
						</p>

					</div>
				</div>
			</section>

			<section id="plx">
				<div className="container-fluid">
					<div className="wtitlebtm text-left">
						<h5>We are here to deliver what you ask for,</h5>
						<h5>In the right quality, quantity</h5>
						<h5>and keep the smile in your heart growing</h5>
					</div>
				</div>
			</section>


			<section>
				<div className="row container-fluid bg-light text-center">
					<div className="col-sm-4">
					</div>
					<div className="col-sm-4 text-center">
					<span className="soc-media">
							<SocialIcon url="http://instagram.com/royalframesmedia" />
						</span>
						<span className="soc-media">
							<SocialIcon url="http://facebook.com/royalframesmedia" />
						</span>
					</div>
					<div className="col-sm-4">
						
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AboutPage;
