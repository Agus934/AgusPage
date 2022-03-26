import { memo } from "react";

import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import Card from "./Card.js"

import coberturasData from "./Coberturas.data.json"

import icons from "./icons.js";
import coberturasIcon from "../../../img/coberturas-icon.svg";

import "./CoberturasContent.scss"
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';



function Buttons(props) {
  const data = props.data;

  const swiper = useSwiper();

  const handleClick = (i) => {
    swiper.slideTo(i+2, 500);
  }
  return (
    <div className="coberturas-buttons-container flex-row flex-wrap align-c justify-c">
      {props.dataNames.map((name, i) => {
        return (
          <button key={"icon-" + name} 
            type="button" 
            className="prod-button flex-row align-c justify-c" 
            data-name={name} 
            onClick={() => handleClick(i)} 
          >
            <img className="prod-icon" 
              src={icons[data[name].img]} 
              srcSet={icons[data[name].img]} 
              alt={data[name].alt} 
              title={name}
              loading="lazy"
            />
            <span className="fs-text text-bold c-secondary">{name}</span>
          </button>
        )})
      }
    </div>
  );
}



export default memo(function CoberturasContent() {
  const data = coberturasData.Seguros;
  const dataNames = Object.keys(data);



  return (
    <div className="coberturas-content">
      <div className="coberturas-carrusel">
        <Swiper
          modules={[Pagination,Autoplay]}
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ clickable: true }}
        >
            {dataNames.map((name, i) => {
              return (
                <SwiperSlide key={"card-" + name} className="card-container">
                  <Card name={name} data={data[name]}/>
                </SwiperSlide>
              )
            })}
          <div slot="container-start">
            <div className="flex-column align-c justify-c">
              <div className="coberturas-buttons flex-row align-c justify-c">
                <div className="coberturas-buttons-img">
                  <img src={coberturasIcon}
                    srcSet={coberturasIcon}
                    loading="lazy" 
                    alt="coberturas-icon"
                  />
                </div>
                <Buttons dataNames={dataNames} data={data}/>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
});
