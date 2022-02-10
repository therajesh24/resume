import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import "./About.scss";

const About = () => {
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } =
    useSelector((state) => state.content.aboutData);
  return (
    <div className="about" id="about">
      <Fade left>
        <img src={img} alt="solo-me" />
      </Fade>
      <Fade right>
        <section className="about-para">
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <p>{paragraphFour}</p>
        </section>
      </Fade>
    </div>
  );
};
export default About;
