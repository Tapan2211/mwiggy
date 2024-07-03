import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import Card from '../../components/Card/Card';
import HeadingCompo from '../Heading/HeadingCompo';

let reviewData = [
  {
    id: "rev1",
    src: "https://www.themealdb.com/images/category/dessert.png",
    title: "Dessert",
    designation: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev2",
    src: "https://www.themealdb.com/images/category/lamb.png",
    title: "Lamb",
    designation: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev3",
    src: "https://www.themealdb.com/images/category/miscellaneous.png",
    title: "Miscellaneous",
    designation: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev4",
    src: "https://www.themealdb.com/images/category/pasta.png",
    title: "Pasta",
    designation: "Ceo of NinjaCode",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev5",
    src: "https://www.themealdb.com/images/category/pork.png",
    title: "Pork",
    designation: "Ceo of Buzz",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev6",
    src: "https://www.themealdb.com/images/category/seafood.png",
    title: "Seafood",
    designation: "Ceo of TechAwesome",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev7",
    src: "https://www.themealdb.com/images/category/starter.png",
    title: "Starter",
    designation: "Ceo of TechAwesome",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
  {
    id: "rev8",
    src: "https://www.themealdb.com/images/category/vegan.png",
    title: "Vegan",
    designation: "Ceo of TechAwesome",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia",
  },
];

function Carousel() {

  const [swiper, setSwiper] = useState(null);

  function getCard() {
    let list = reviewData.map((ele, index) => {
      let color;
      if (index % 2 === 1) {
        color = "#2e2e2d";
      }
      return (
        
        <SwiperSlide key={ele.id}>
          <Card
            title={ele.title}
            designation={ele.designation}
            text={ele.text}
            src={ele.src}
            color={color}
          />
        </SwiperSlide>
      );
    });
    return list;
  }

  const handleLeftNavigation = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightNavigation =()=>{
    if (swiper) {
      swiper.slideNext();
    }
  }

  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.section1}>
        <div>
          <HeadingCompo heading="What's on your mind?" />
        </div>
        <div>
          <CarouselLeftNavigation className={`${styles.button}`} onClick={handleLeftNavigation} />
          <CarouselRightNavigation className={`${styles.button}`} onClick={handleRightNavigation} />
        </div>
      </div>
      <div>
        <Swiper
          // spaceBetween={100} 
          onSwiper={setSwiper}
          slidesPerView={6}
          navigation={{ prevEl: ".prevEl", nextEl: ".nextEl" }}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            640: {
              slidesPerView: 3,
            },
            200: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
        >
          {getCard()}
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel;