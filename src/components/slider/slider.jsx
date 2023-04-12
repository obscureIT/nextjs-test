import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
// import Video from '../../assets/online-appointment.mp4';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popup from "../popup/popup";
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../login-form/login-form";
import Link from "next/link";

const Slider = (props) => {
  const {sliderType , sliderItems } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <> 
      <Swiper
        slidesPerView={
          sliderType == 'hero-slider' ? 1 : 1
          
        }
        spaceBetween={
          sliderType == 'hero-slider' ? 0 : 0
        }
        mousewheel={sliderType == 'hero-slider' ? false : false}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel, Pagination]}
        className={sliderType}
      >
        {sliderItems && sliderItems.length>0 && sliderItems.map((item,key)=>{
          console.log(key)
          return(
            key == 0 ?
            <SwiperSlide>
              <div className="hero-slider__asset">
                {/* <video src={item.asset} autoPlay/> */}
              <video className="hero-slider__video" src='/assets/videos/online-appointment.mp4' muted  loop autoPlay={true} />
              </div>
              <h2 className="mb-5">{item.title}</h2>
              {/* <h4>{item.subTitle}</h4> */}
              <div>
                <button className="bg-dark" onClick={() => setModalShow(true)}>{item.buttonText}</button>
              </div>
            </SwiperSlide>
            : 
            <SwiperSlide style={{backgroundImage : `url(${item.asset})`}}>
              <h2>{item.title}</h2>
              <h4>{item.subTitle}</h4>
              <div>
                <button>{item.buttonText}</button>
              </div>
              <a href="#about" className="d-flex flex-column align-items-center show-more-wrapper">
                <span>Show More</span>
                <KeyboardArrowDownIcon className="text-white"/>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    
      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}>
          <Modal.Body>
            <h4 className='text-center text-secondary'>Let's login to your Adhunik-dental account first</h4>
          <LoginForm/>
          </Modal.Body>
          <Modal.Footer className='justify-content-center'>
            <p>Don't have an account ? <Link className='text-primary' href="/register">Register Here</Link></p>
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Popup>
    </>

  );
}
export default Slider;