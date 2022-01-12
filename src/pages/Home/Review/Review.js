import React, { useEffect, useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from 'react-rating';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://powerful-hamlet-84922.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <div className='py-16'>
      <div className="small-container">
        <h1 className='font-bold uppercase text-2xl'>Customers <span className='text-primary_bg'>Review</span></h1>
        <p className='text-sm font-medium mt-2 mb-10'>There have some featured items Those would be your <br />  todays selection</p>
        <div>
          <Swiper {...params} autoplay={{ delay: 1000 }} slidesPerView={1} spaceBetween={10} pagination={{
            "clickable": true
          }} breakpoints={{
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 40
            },
            "1024": {
              "slidesPerView": 2,
              "spaceBetween": 30
            }
          }} className="mySwiper">
            {
              reviews.map(review => <SwiperSlide className='review-box px-4 py-8' key={review._id}>
                <p className='text-md font-medium text-primary_text flex relative content-end review-text'>
                  <span className='text-5xl relative text-blue quote'><RiDoubleQuotesL /></span>
                  {review.speech}
                  <span className='text-5xl absolute text-blue quote'><RiDoubleQuotesR /></span>
                </p>
                <div className='lg:flex items-center justify-between mt-5'>
                  <div className='flex items-center'>
                    <img src={review.img} alt="" />
                    <div>
                      <h1 className='text-md font-semibold'>{review.name}</h1>
                      <p className='text-blue'>{review.email}</p>
                    </div>
                  </div>
                  <div className="rating mt-2 lg:mt-0">
                    <Rating
                      emptySymbol={<AiOutlineStar style={{ fontSize: "20px", color: "#c70039" }} />}
                      fullSymbol={<AiTwotoneStar style={{ fontSize: "20px", color: "#c70039" }} />}
                      initialRating={review.rating}
                      readonly
                    />
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;