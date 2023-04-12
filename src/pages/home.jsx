import React from "react";
import Slider from "@/components/slider/slider.jsx";
import AppoinmentFrom from "@/components/form/appointmentform";
import HeroImage from "@/components/hero/hero";
import Testimonial from "../components/testimonials/testimonials";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "../components/map/map";

const Home = (props) => {
  const heroImages = [
    {
      asset: "../../assets/online-appointment.mp4",
      title: "Welcome to Adhunik Dental",
      subTitle: "Bangladesh's first smart online dental care  ",
      buttonText: "Get Appointment",
    },
    // {
    //   asset:
    //     "https://cdn.pixabay.com/photo/2017/07/23/10/42/dentist-2530983_960_720.jpg",
    //   title: "Get ..",
    //   subTitle: "",
    //   buttonText: "Learn More",
    // },
    // {
    //   asset:
    //     "https://cdn.pixabay.com/photo/2015/03/15/16/51/dentist-674655_960_720.jpg",
    //   title: "Welcome to Adhunik Dental",
    //   subTitle: "",
    //   buttonText: "Learn More",
    // },
  ];

  return (
    <div className="home-page">
      {/* <HeroImage/> */}
      {/* <AppoinmentFrom/> */}

      <Slider sliderType="hero-slider" sliderItems={heroImages} />

      <section id="testimonials">
        <Container>
          <h2 className="text-center p-5">PATIENT EXPERIENCES</h2>
          <Testimonial />
        </Container>
      </section>

      <section id="locations" className="my-5">
        <Container fluid>
          <Row className="g-0">
            <Col md={3} className="bg-secondary p-5 d-flex align-items-center">
              <h4 className="text-white">Visit us at our <br/><span className="text-primary">65 locations</span></h4>
            </Col>
            <Col md={9}>
              <Map/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
