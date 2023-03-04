import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../CSS/about.css"

const About = () => {
    

    return (
  <>
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="txt">Profile</h3>
          <p className="txt">GCS Services is a leading provider of IT, construction and engineering services. Our team of skilled professionals is committed to excellence and provides state of the art solutions to our clients. Our clients range from small startups to large multinational corporations. Founded in 2019, we are experienced in delivering innovation and support tailored to our clients
            needs. We believe in providing the best service and products with quality, cost-efficiency and customer satisfaction as our top priorities.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="txt">Achievement</h3>
          <p className="txt">Our company proudly achieved exceptional growth this year. We achieved record sales, improved customer satisfaction by 10%, and reduced costs by 15%. We are thrilled to have gained market share and increased efficiency across all operations. The successes we experienced this year make us proud and motivated to continue to strive for excellence.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://greatdayhr.com/wp-content/uploads/2022/09/20-September-org.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="txt">Benefits</h3>
          <p className="txt">
          Company benefits typically include health insurance, paid vacation and sick leave, retirement plans, life insurance, 
          flexible work scheduling, and other perks. Employee appreciation programs, educational opportunities, and financial assistance for 
          tuition are also popular benefits, as well as onsite amenities, 
          such as gym facilities and in-house cafeterias. Each company's benefits may be different depending on its size and scope.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <br/>
  </>
    )
}

export default About;