import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './BrandSlider.css';
import mobile from '../../../../assets/mobile.webp';
import { useState } from 'react';
import { tumchi, rice, nonsense, crazy, heart, frankiestaan, gheedosa, lakhnavi, magic, mexicoculture, mingling, tapri } from '../../../../assets/index';

export default function BrandSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [tumchi, rice, nonsense, crazy, heart, frankiestaan, gheedosa, lakhnavi, magic, mexicoculture, mingling, tapri];

    return (
        <div className='w-[100vw] h-[750px] relative mt-0 lg:mt-6'>
            <div
                className="absolute top-0 left-0 w-full h-[600px] !z-40"
                style={{
                    backgroundImage: `url(${mobile})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                }}
            ></div>

            <div>
                <div className='lg:mx-40 relative'>
                    <Swiper
                        loop={true}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="w-[20px] lg:!w-[1165px] absolute top-3 lg:-top-20 h-[512px] lg:h-[800px] !lg:mx-40"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className='w-80'>
                                {activeIndex === index ? (
                                    <div className="phone-frame relative !-z-50">
                                        <div className="normal-img-container h-[478px] !-z-50 top-0 pl-[21px] px-[18px] lg:px-[18px] !-py-[20px] lg:py-[26px] absolute lg:top-[11%] lg:ml-[1.5px] ">
                                            <img src={img} className="lg:w-[100%] !-z-50 h-[478px] lg:h-[462px]" />
                                        </div>
                                    </div>
                                ) : (
                                    <img src={img} className="w-[100%] !-z-50 h-[485px] absolute -mb-20 lg:mt-20" />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='hidden lg:block'>
                        <div className="swiper-button-prev hover:bg-primary">
                            <i className="mdi mdi-chevron-left text-white text-3xl pl-2 pb-2"></i>
                        </div>
                        <div className="swiper-button-next hover:bg-primary">
                            <i className="mdi mdi-chevron-right text-white text-3xl pl-2 pb-2"></i>
                        </div>
                    </div>

                    <div className='block lg:hidden'>
                        <div className="swiper-navigation-container lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-full">
                            <div className="swiper-button-prev !flex !items-center !justify-center">
                                {/* <i className="mdi mdi-chevron-left text-white text-3xl pl-2 pb-2"></i> */}
                            </div>
                            <div className="swiper-button-next !flex !items-center !justify-center">
                                {/* <i className="mdi mdi-chevron-right text-white text-3xl pl-2 pb-2"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
