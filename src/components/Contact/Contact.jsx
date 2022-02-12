import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, mailBtn, email, number, callBtn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={500} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume contant-btn m-4"
              href={email ? `mailto:${email}` : 'https://github.com/therajesh24'}
            >
              <i className="fa fa-envelope" aria-hidden="true" />
              <span className="contact-btn-label">{mailBtn || "Let's Talk"}</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume contant-btn m-4"
              href={number ? `tel:${number}` : 'https://github.com/therajesh24'}
            >
              <i className="fa fa-phone" aria-hidden="true" />
              <span className="contact-btn-label">{callBtn || "Let's Talk"}</span>
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
