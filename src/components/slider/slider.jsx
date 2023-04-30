import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
// import Video from '../../assets/online-appointment.mp4';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popup from "../popup/popup";
import Modal from "react-bootstrap/Modal";
import LoginForm from "../login-form/login-form";
import Link from "next/link";

const Slider = (props) => {
  const { sliderType, sliderItems } = props;
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const handelModal = () => {
    setModalShow2(true);
    setModalShow(false)
  };

  return (
    <>
      <Swiper
        slidesPerView={sliderType == "hero-slider" ? 1 : 1}
        spaceBetween={sliderType == "hero-slider" ? 0 : 0}
        mousewheel={sliderType == "hero-slider" ? false : false}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel, Pagination]}
        className={sliderType}
      >
        {sliderItems &&
          sliderItems.length > 0 &&
          sliderItems.map((item, key) => {
            console.log(key);
            return key == 0 ? (
              <SwiperSlide key={item}>
                <div className="hero-slider__asset">
                  {/* <video src={item.asset} autoPlay/> */}
                  <video
                    className="hero-slider__video"
                    src="/assets/videos/online-appointment.mp4"
                    muted
                    loop
                    autoPlay={true}
                  />
                </div>
                <h2 className="mb-5">{item.title}</h2>
                {/* <h4>{item.subTitle}</h4> */}
                <div>
                  <button
                    className="bg-dark"
                    onClick={() => setModalShow(true)}
                  >
                    {item.buttonText}
                  </button>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide style={{ backgroundImage: `url(${item.asset})` }}>
                <h2>{item.title}</h2>
                <h4>{item.subTitle}</h4>
                <div>
                  <button>{item.buttonText}</button>
                </div>
                <a
                  href="#about"
                  className="d-flex flex-column align-items-center show-more-wrapper"
                >
                  <span>Show More</span>
                  <KeyboardArrowDownIcon className="text-white" />
                </a>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Popup show={modalShow2} onHide={() => setModalShow2(false)}>
        <Modal.Body>
          <h4 className="text-center text-secondary">
            Let's login to your Adhunik-dental account first
          </h4>
          <LoginForm />
        
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p>
            Don't have an account ?{" "}
            <Link className="text-primary" href="/register">
              Register Here
            </Link>
          </p>
        </Modal.Footer>
      </Popup>
      <Popup show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Body>
          <p>
            If you need a appointment for consultation or would like to schedule
            with the doctor at yor nearest location all over Bangladesh, please
            get your appointment with us and we’ll contact you shortly with
            confirmation.
          </p>
          <b>Payment necessary!</b>
          <p>Please call us if you have an emergency:</p>
          <div className="d-flex">
            <b className="me-4">Hot-line:</b>
            <div className="d-flex flex-column">
              <a href="tel:123-456-7890">123-456-7890 .</a>
              <a href="tel:123-456-7890">123-456-7890</a>
            </div>
          </div>

          <h6>HOURS:</h6>
          <p className="mb-1">Friday : 7am-8pm</p>
          <p className="mb-1">Saturday : 7am-8pm</p>
          <p className="mb-1">Sunday : 7am-8pm</p>
          <p className="mb-1">Monday : 7am-8pm</p>
          <p className="mb-1">Tuesday : 7am-8pm</p>
          <p className="mb-1">Wednesday : 7am-8pm</p>
          <p className="mb-1">Thursday : 7am-8pm</p>
        </Modal.Body>
        <div className="text-center mb-3 mt-2">
          <button
            onClick={() => handelModal()}
            className="px-5 py-2 bg-primary text-dark border border-0"
          >
            Get Appointment
          </button>
        </div>
      </Popup>
    </>
  );
};
export default Slider;
