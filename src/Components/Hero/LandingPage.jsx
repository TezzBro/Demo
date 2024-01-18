import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '';
// import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <div className='relative'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/images/img1.jpg" alt="" width="100vw" height="100vh" className=' w-[100vw] object-cover h-[88.7vh]' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/img2.jpg" alt="" width="100vw" height="100vh" className=' w-[100vw] object-cover h-[88.7vh]' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/img3.jpg" alt="" width="100vw" height="100vh" className=' w-[100vw] object-cover h-[88.7vh]' />
                    </SwiperSlide>

                </Swiper>

                <div className='relative'>
                    <div className='bg-black h-[88.7vh] absolute -top-[88.7vh] opacity-40 z-10 w-full'></div>
                </div>

                <div className=' absolute inset-0 m-auto -top-0 top-80 z-30 text-center'>
                    <h1 className=' text-5xl pb-8 text-white font-semibold'>Manish Choudhary</h1>
                    <Link to="/fullproduct">  <button className='px-5 py-2  hover:bg-transparent hover:text-white border-white border-2 transition ease-linear duration-300  font-bold bg-white text-black '>Shop Now</button> </Link>
                </div>

            </div>
        </>
    );
}
