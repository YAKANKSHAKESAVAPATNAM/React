import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{backgroundColor:"lightblue", height:"200px",border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>Yakanksha</h3>
        </div>
        <div style={{backgroundColor:"lightgreen", height:"200px", border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>Virat Kohli</h3>
        </div>
        <div style={{backgroundColor:"lightcoral", height:"200px", border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>Ms Dhoni</h3>
        </div>
        <div style={{backgroundColor:"lightgoldenrodyellow", border:"1px solid black", height:"200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>Rohit</h3>
        </div>
        <div style={{backgroundColor:"lightpink", height:"200px",border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>Hardik</h3>
        </div>
        <div style={{backgroundColor:"lightblue", height:"200px", border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h3>SuryaKumar</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
