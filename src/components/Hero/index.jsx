import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";
import Fade from "react-reveal/Fade";
import "./Hero.scss";

const Hero = () => {
  const { title, name, subtitle, knowMoreBtn } = useSelector(
    (state) => state.content.heroData
  );
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const scroll = () => {
    const section = document.querySelector("#about");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero h-100">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 500,
                duration: 3,
                opacity: 0.8,
                size: 50,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 140,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#02aab0",
            },
            links: {
              color: "#00cdac",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <section className="hero-section">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={500}
          delay={500}
          distance="30px"
        >
          <div className="hero-text">
            {title}
            <span className="name">{name}</span>
            <p className="sub-title">{subtitle}</p>
          </div>
        </Fade>
        <Fade>
          <button type="button" className="know-more-btn" onClick={scroll}>
            {knowMoreBtn}
          </button>
        </Fade>
      </section>
    </div>
  );
};
export default Hero;
