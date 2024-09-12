import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './StyledSwiper.css'
import SneakerIcon from "../ProductDetails/sneaker.svg";

const data = [
    { id: '1', image: SneakerIcon },
    { id: '2', image: SneakerIcon },
    { id: '3', image: SneakerIcon },
    { id: '4', image: SneakerIcon },
    { id: '5', image: SneakerIcon },
];

function CarroselProdDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* Swiper Principal */}
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2'
                style={{
                    '--swiper-navigation-color': 'var(--dark-gray-2)',
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={item.id} className={`slide-bg-color-${index + 1}`}>
                        <img
                            src={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Miniaturas */}
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={5}
                loop={true}
                freeMode={true}
                spaceBetween={10}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
            >
                {data.map((item, index) => (
                    <SwiperSlide key={item.id} className={`slide-bg-color-${index + 1}`} >
                        <img
                            src={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CarroselProdDetails;
