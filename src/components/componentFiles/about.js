import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import rose from '../../assets/images/rose.jpg';
import '../../assets/styles/about.css';

const AboutPage = () => {
	return (
		<React.Fragment>
			<section>
				<div className="row container-fluid bg-light text-center">
					<div className="col-sm-6" id="wordding">
						<img src={rose} className="img-fluid" alt="about" />
					</div>
					<div className="col-sm-6 text-center py-5">
						<h5>Meet Rose Brian</h5>
						<p>
							She is your ordinary next door girl who loves God and uses her photography to showcase the
							beauty of God's creation. She is also a wife, mother and the lead photographer at Royal
							frames media. Her aim to capture your life's experiences in the most artistic and creative
							way possible. She seeks to journey with you as you sail through one milestone to another and
							ensure that a few years down the line you are able to relive those experiences through the
							photographs captured.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="container-fluid bg-light">
					<div className="text-center py-3">
						<h5>About Royalframes media</h5>
						<hr />
					</div>
				</div>
			</section>

			<section>
				<div id="wording" className="row container-fluid bg-light text-center">
					<div className="col-sm-4">
						<h5>Who we are</h5>
						<p className="fonti">We are RoyalFramesMedia, </p>
						<p className="fonti">
							a company founded by Rose Brian, motivated by the need to have more creative content
							creators
						</p>
					</div>
					<div className="col-sm-4 text-center">
						<h5>What we do</h5>
						<p className="fonti">
							We tell your story in an artistic way, we capture your life experiences as you go through
							one milestone to another creatively. We help you relive your most precious memories through
							photos.
						</p>
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
					<div className="wtitlebtm text-center">
						<p>
							We are here to deliver what you ask for,In the right quality, quantity and keep the smiles
							going.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="row container-fluid bg-light text-center">
					<div className="col-sm-4" />
					<div className="col-sm-4 text-center">
						<span className="soc-media">
							<SocialIcon url="http://instagram.com/royalframesmedia" />
						</span>
						<span className="soc-media">
							<SocialIcon url="http://facebook.com/royalframesmedia" />
						</span>
					</div>
					<div className="col-sm-4" />
				</div>
			</section>
		</React.Fragment>
	);
};

export default AboutPage;
