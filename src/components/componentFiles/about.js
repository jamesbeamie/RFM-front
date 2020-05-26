import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import rose from "../../assets/images/rose.jpg";
import "../../assets/styles/about.css";
import Header from "../common/header";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <section>
        <div className='row container-fluid bg-light '>
          <div className='col-sm-6 text-center' id='wordding'>
            <img src={rose} className='img-fluid' alt='about' />
          </div>
          <div className='col-sm-6  msg-abt'>
            <h5 className='text-center'>Meet Rose Brian</h5>
            <p>
              She is your ordinary next door girl who loves God and uses her
              photography to showcase the beauty of God's creation. She is also
              a wife, mother and the lead photographer at Royal frames media.
              Her aim to capture your life's experiences in the most artistic
              and creative way possible. She seeks to journey with you as you
              sail through one milestone to another and ensure that a few years
              down the line you are able to relive those experiences through the
              photographs captured.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container-fluid bg-light'>
          <div className='text-center py-3'>
            <h5>About Royalframes media</h5>
            <hr />
          </div>
        </div>
      </section>

      <section>
        <div id='wording' className='row container-fluid bg-light '>
          <div className='col-sm-4 abt-rfm'>
            <h5>Who we are</h5>
            {/* <p className='fonti'>We are RoyalFramesMedia, </p> */}
            <p className='fonti'>
              A company founded by Rose Brian, motivated by the need to have
              more creative content creators
            </p>
          </div>
          <div className='col-sm-4 abt-rfm'>
            <h5>What we do</h5>
            <p className='fonti'>
              We tell your story in an artistic way, we capture your life
              experiences as you go through one milestone to another creatively.
              We help you relive your most precious memories through photos.
            </p>
          </div>
          <div className='col-sm-4 abt-rfm'>
            <h5>Contact info</h5>
            <p className='fonti'>
              <FontAwesomeIcon icon={faPhone} className='call' /> 0725298331
            </p>
            <p className='fonti'>
              <FontAwesomeIcon icon={faAddressBook} className='contact' />{" "}
              royalframesmedia@gmail.com
            </p>
            {/* <SocialMediaIconsReact
                icon='instagram'
                url='http://instagram.com/royalframesmedia'
              /> */}

            <a href='http://instagram.com/royalframesmedia'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='ig'
                url='http://instagram.com/royalframesmedia'
              />
            </a>
            {/* <SocialMediaIconsReact
                icon='facebook'
                className='soc-media'
                url='http://facebook.com/royalframesmedia'
              /> */}

            <a href='http://facebook.com/royalframesmedia'>
              <FontAwesomeIcon
                icon={faFacebook}
                className='fb'
                // url='http://facebook.com/royalframesmedia'
              />
            </a>
          </div>
        </div>
      </section>

      <section id='plx'>
        <div className='container-fluid'>
          <div className='wtitlebtm text-center'>
            <p>
              We are here to deliver what you ask for,In the right quality,
              quantity and keep the smiles going.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
