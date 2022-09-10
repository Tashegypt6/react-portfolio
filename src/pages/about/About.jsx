import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import './About.css';
import storyImage from '../../images/about1.jpg';
import visionImage from '../../images/about2.jpg';
import missionImage from '../../images/about3.jpg';


const About = () => {
  return (
    <>
      <Header title="About US" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus minus fugit ullam recusandae. Aliquam amet quam beatae ad minus molestias?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          
          <div className="about__section-image">
            <img src={storyImage} alt="our story" />
          </div>

          <div className="about__section-content">
            <h1>our story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat, dolorum quaerat eligendi fuga molestiae! Quam soluta voluptas nemo ipsum quos, doloribus minima ex magnam maxime at accusamus itaque ut enim! Aliquam eius minima labore odio praesentium, architecto optio minus suscipit. Quia delectus omnis sapiente. Iusto, eveniet voluptates. Voluptatem, ratione?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis ipsa odio expedita perferendis voluptate temporibus natus impedit, recusandae nulla, sit ad beatae blanditiis dignissimos, quam sed esse assumenda? Recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nulla.</p>
          </div>

        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>our vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat, dolorum quaerat eligendi fuga molestiae! Quam soluta voluptas nemo ipsum quos, doloribus minima ex magnam maxime at accusamus itaque ut enim! Aliquam eius minima labore odio praesentium, architecto optio minus suscipit. Quia delectus omnis sapiente. Iusto, eveniet voluptates. Voluptatem, ratione?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis ipsa odio expedita perferendis voluptate temporibus natus impedit, recusandae nulla, sit ad beatae blanditiis dignissimos, quam sed esse assumenda? Recusandae.</p>
          </div>

          <div className="about__section-image">
            <img src={visionImage} alt="our vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          
          <div className="about__section-image">
            <img src={missionImage} alt="our mission" />
          </div>

          <div className="about__section-content">
            <h1>our mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat, dolorum quaerat eligendi fuga molestiae! Quam soluta voluptas nemo ipsum quos, doloribus minima ex magnam maxime at accusamus itaque ut enim! Aliquam eius minima labore odio praesentium, architecto optio minus suscipit. Quia delectus omnis sapiente. Iusto, eveniet voluptates. Voluptatem, ratione?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis ipsa odio expedita perferendis voluptate temporibus natus impedit, recusandae nulla, sit ad beatae blanditiis dignissimos, quam sed esse assumenda? Recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nulla.</p>
          </div>

        </div>
      </section>

    </>
  )
}

export default About