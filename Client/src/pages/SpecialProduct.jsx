import React, { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../components/Card';

const SampleNextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div className={className} 
    style={{...style, display:"block", background:"red"}} onClick={onClick}> NEXT</div>
  )
}

const SamplePrevArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div className={className} 
    style={{...style, display:"block", background:"green"}} onClick={onClick}> BACK</div>
  )
}



const SpecialProduct = () => {
  const [products, setProducts] = useState([]);
  const slider = useRef(null);  
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setProducts(specials);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle"> S item</p>
        <h2 className="title"> standout</h2>
      </div>
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button className="btn bg-red p-2 rounded-full ml-5 text-white"
        onClick={() => slider?.current?.slickPrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="btn bg-red p-2 rounded-full ml-5 text-white"
        onClick={() => slider?.current?.slickNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="slider-container">
        <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
          {products.map((item, i) => (
            <Card item={item} Key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default SpecialProduct;