'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { HiPlay } from "react-icons/hi2";
import { FaArrowLeftLong, FaArrowRightLong, FaPause } from "react-icons/fa6";
import { RiTeamLine } from 'react-icons/ri';

const PlayersSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const slides = [
    {
      id: 1,
      name: 'امید عالیشاه',
      title: 'هاف بک',
      description: "امید عالیشاه (متولد ۲۰ دی ۱۳۷۰؛ ساری) بازیکن فوتبال اهل ایران است که در پست وینگر برای باشگاه پرسپولیس در لیگ برتر بازی می‌کند.",
      gradientFrom: '#1e3a8a',
      gradientTo: '#2563eb',
      image: '/images/Omid-Alishah.png',
      fallbackColor: '#3b82f6',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 2,
      name: 'مرتضی پورعلی گنجی',
      title: 'مدافع میانی',
      description: "مرتضی پورعلی‌گنجی (متولد ۳۰ فروردین ۱۳۷۱؛ بابل) بازیکن فوتبال اهل ایران است که در پست مدافع میانی برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#059669',
      gradientTo: '#10b981',
      image: '/images/pourganji-morteza.png',
      fallbackColor: '#10b981',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 3,
      name: 'سروش رفیعی',
      title: 'هاف بک',
      description: "سروش رفیعی تل‌گری (متولد ۴ فروردین ۱۳۶۹ در شیراز) بازیکن فوتبال اهل ایران است که در پست هافبک دفاعی، برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#7c3aed',
      gradientTo: '#8b5cf6',
      image: '/images/soroush-rafiei.png',
      fallbackColor: '#8b5cf6',
      skills: ['پرسپولیس', 'لیگ برتر خلیج فارس', 'تیم ملی ایران']
    },
    {
      id: 4,
      name: 'علی علیپور',
      title: 'مهاجم',
      description: "علی علیپور (متولد ۲۰ آبان ۱۳۷۴) بازیکن فوتبال اهل ایران است که در پست مهاجم برای باشگاه فوتبال پرسپولیس در لیگ برتر خلیج فارس بازی می‌کند.",
      gradientFrom: '#dc2626',
      gradientTo: '#ef4444',
      image: '/images/ali-alipour.png',
      fallbackColor: '#ef4444',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 5,
      name: 'محمدحسین کنعانی زادگان',
      title: 'مدافع میانی',
      description: "محمدحسین کنعانی‌زادگان (متولد ۳ فروردین ۱۳۷۳ بندرماهشهر) بازیکن فوتبال اهل ایران است که در پست دفاع میانی برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#f59e0b',
      gradientTo: '#fbbf24',
      image: '/images/Hossein-Kanaanizadegan.png',
      fallbackColor: '#f59e0b',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 6,
      name: 'امید عالیشاه',
      title: 'هاف بک',
      description: "امید عالیشاه (متولد ۲۰ دی ۱۳۷۰؛ ساری) بازیکن فوتبال اهل ایران است که در پست وینگر برای باشگاه پرسپولیس در لیگ برتر بازی می‌کند.",
      gradientFrom: '#1e3a8a',
      gradientTo: '#2563eb',
      image: '/images/Omid-Alishah.png',
      fallbackColor: '#3b82f6',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 7,
      name: 'مرتضی پورعلی گنجی',
      title: 'مدافع میانی',
      description: "مرتضی پورعلی‌گنجی (متولد ۳۰ فروردین ۱۳۷۱؛ بابل) بازیکن فوتبال اهل ایران است که در پست مدافع میانی برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#059669',
      gradientTo: '#10b981',
      image: '/images/pourganji-morteza.png',
      fallbackColor: '#10b981',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 8,
      name: 'سروش رفیعی',
      title: 'هاف بک',
      description: "سروش رفیعی تل‌گری (متولد ۴ فروردین ۱۳۶۹ در شیراز) بازیکن فوتبال اهل ایران است که در پست هافبک دفاعی، برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#7c3aed',
      gradientTo: '#8b5cf6',
      image: '/images/soroush-rafiei.png',
      fallbackColor: '#8b5cf6',
      skills: ['پرسپولیس', 'لیگ برتر خلیج فارس', 'تیم ملی ایران']
    },
    {
      id: 9,
      name: 'علی علیپور',
      title: 'مهاجم',
      description: "علی علیپور (متولد ۲۰ آبان ۱۳۷۴) بازیکن فوتبال اهل ایران است که در پست مهاجم برای باشگاه فوتبال پرسپولیس در لیگ برتر خلیج فارس بازی می‌کند.",
      gradientFrom: '#dc2626',
      gradientTo: '#ef4444',
      image: '/images/ali-alipour.png',
      fallbackColor: '#ef4444',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 10,
      name: 'محمدحسین کنعانی زادگان',
      title: 'مدافع میانی',
      description: "محمدحسین کنعانی‌زادگان (متولد ۳ فروردین ۱۳۷۳ بندرماهشهر) بازیکن فوتبال اهل ایران است که در پست دفاع میانی برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#f59e0b',
      gradientTo: '#fbbf24',
      image: '/images/Hossein-Kanaanizadegan.png',
      fallbackColor: '#f59e0b',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
    {
      id: 11,
      name: 'مرتضی پورعلی گنجی',
      title: 'مدافع میانی',
      description: "مرتضی پورعلی‌گنجی (متولد ۳۰ فروردین ۱۳۷۱؛ بابل) بازیکن فوتبال اهل ایران است که در پست مدافع میانی برای باشگاه فوتبال پرسپولیس بازی می‌کند.",
      gradientFrom: '#059669',
      gradientTo: '#10b981',
      image: '/images/pourganji-morteza.png',
      fallbackColor: '#10b981',
      skills: ['لیگ قهرمان آسیا', 'سوپر جام ایران', 'لیگ برتر خلیج فارس']
    },
  ];

  // Automatic Play/Pause Control
  const toggleAutoplay = () => {
    const swiper = document.querySelector('.image-slider-container') as any;
    if (swiper?.swiper) {
      if (isPlaying) {
        swiper.swiper.autoplay.stop();
      } else {
        swiper.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Go To Specific Slide
  const goToSlide = (index: number) => {
    const swiper = document.querySelector('.image-slider-container') as any;
    if (swiper?.swiper) {
      swiper.swiper.slideTo(index);
    }
  };

  // Replacement Component For Images
  const ImageWithFallback = ({
    src,
    alt,
    fallbackColor,
    className = "",
    isCircle = true
  }: {
    src: string;
    alt: string;
    fallbackColor: string;
    className?: string;
    isCircle?: boolean;
  }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
      return (
        <div
          className={`${className} ${isCircle ? 'rounded-full' : 'rounded-2xl'} flex items-center justify-center`}
          style={{ backgroundColor: fallbackColor }}
        >
          <span className="text-white text-3xl font-bold">
            {alt.charAt(0)}
          </span>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${isCircle ? 'rounded-full' : 'rounded-2xl'} object-cover`}
        onError={() => setImageError(true)}
        loading="lazy"
      />
    );
  };

  const renderSlide = (slide: typeof slides[0], index: number) => {
    return (
      <div
        className="relative w-full h-full flex flex-col lg:flex-row items-center justify-start lg:justify-center px-4 sm:px-8 py-6"
        style={{
          background: `linear-gradient(135deg, ${slide.gradientFrom} 0%, ${slide.gradientTo} 100%)`,
        }}>
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white translate-x-1/4 translate-y-1/4"></div>
        </div>
        {/* Main content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          <div className="text-white text-center md:text-right md:w-1/2 mb-8 md:mb-0 md:pr-12" dir='rtl'>
            <div className="flex gap-2 mb-6" dir='rtl'>
              <div className="size-20 mx-auto md:mx-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-3xl font-Kalameh shadow-lg">
                {slide.id}
              </div>
              <div className="size-20 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.name}
                  fallbackColor={slide.fallbackColor}
                  className="w-full h-full"
                  isCircle={true}
                />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-Kalameh-Bold mb-4 line-clamp-1 pb-2">
              {slide.name}
            </h3>
            <p className="text-base md:text-2xl opacity-90 font-Dana-Bold mb-4 md:mb-6 line-clamp-1">
              {slide.title}
            </p>
            <p className="text-base md:text-lg opacity-80 leading-relaxed mb-5 md:mb-8 max-w-2xl mx-auto md:mx-0 line-clamp-4 md:line-clamp-3 text-justify">
              {slide.description}
            </p>
            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {slide.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Big Picture Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative size-72 md:size-96 rounded-full overflow-hidden border-8 border-white/40 shadow-2xl">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.name}
                  fallbackColor={slide.fallbackColor}
                  className="w-full h-full"
                  isCircle={true}
                />
                {/* Light Effect On The Image */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent"></div>
              </div>
              {/* Animated Circles Around The Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <div className="w-80 h-80 md:w-md md:h-112 rounded-full border-2 border-white/30 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-lg"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-lg md:h-128 rounded-full border border-white/20 animate-spin-reverse">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-white/80 shadow-lg"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                  <span className="text-gray-800 text-base font-Kalameh text-nowrap">
                    {slide.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-black/40 to-transparent"></div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-10 md:mt-15">
      {/* Header Slider */}
      <div className="flex md:flex-row justify-end sm:justify-between items-center mb-5">
        <div className="hidden sm:flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="size-3 rounded-full bg-rose-600 animate-pulse"></div>
            <span className="text-sm text-gray-700">
              {activeIndex + 1} / {slides.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => goToSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="size-10 cursor-pointer rounded-full bg-white text-gray-900 hover:text-rose-600 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <FaArrowLeftLong className='text-xl' />
            </button>
            <button
              onClick={toggleAutoplay}
              className="size-10 cursor-pointer rounded-full bg-white text-gray-900 hover:text-rose-600 hover:bg-white transition-colors flex items-center justify-center"
            >
              {isPlaying ? <FaPause className='text-xl' /> : <HiPlay className='text-xl' />}
            </button>
            <button
              onClick={() => goToSlide(activeIndex + 1)}
              disabled={activeIndex === slides.length - 1}
              className="size-10 cursor-pointer rounded-full bg-white text-gray-900 hover:text-rose-600 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <FaArrowRightLong className='text-xl' />
            </button>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-end gap-1.5'>
            <h2 className="text-2xl md:text-3xl font-Kalameh text-gray-200">اعضای تیم ما</h2>
            <RiTeamLine className='text-2xl md:text-3xl text-orange-400' />
          </div>
          <p className="text-gray-400 mt-2">بازیکنان تیم باشگاه پرسپولیس</p>
        </div>
      </div>
      {/* Main Slider */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          className="image-slider-container w-full h-215 sm:h-207.5 md:h-145 lg:h-137.5"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onAutoplayStart={() => setIsPlaying(true)}
          onAutoplayStop={() => setIsPlaying(false)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {renderSlide(slide, index)}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Back And Forward Button */}
        <button className="slider-button-prev cursor-pointer absolute left-2 top-1/2 mt-2 md:mt-0 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/40 hover:border-white text-white flex items-center justify-center hover:bg-rose-600 transition-all duration-300 hover:scale-110 shadow-xl">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="slider-button-next cursor-pointer absolute right-2 top-1/2 mt-2 md:mt-0 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/40 hover:border-white text-white flex items-center justify-center hover:bg-rose-600 transition-all duration-300 hover:scale-110 shadow-xl">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Pagination */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`size-3 rounded-full transition-all cursor-pointer shadow durantion-300 ${index === activeIndex
                  ? 'bg-red-500 w-8 border border-white/80'
                  : 'bg-white/50 hover:bg-red-500 border-white/80'
                  }`}
                aria-label={`برو به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Styles
const CustomPlayersSliderStyles = () => (
  <style jsx global>{`
    @keyframes spin-slow {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes spin-reverse {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(-360deg); }
    }

    .animate-spin-slow {
      animation: spin-slow 25s linear infinite;
    }

    .animate-spin-reverse {
      animation: spin-reverse 20s linear infinite;
    }

    // Styles Slider Images
    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.6) !important;
      width: 12px !important;
      height: 12px !important;
      opacity: 1 !important;
      transition: all 0.3s ease !important;
    }

    .swiper-pagination-bullet-active {
      background: white !important;
      width: 35px !important;
      border-radius: 10px !important;
      transform: scale(1.2) !important;
    }

    .swiper-button-disabled {
      opacity: 0.3 !important;
      cursor: not-allowed !important;
      transform: scale(0.9) !important;
    }

    // Image Hover Effect
    .group:hover .group-hover\\:translate-y-0 {
      transform: translateY(0) !important;
    }

    .group:hover .group-hover\\:opacity-100 {
      opacity: 1 !important;
    }
  `}</style>
);

const PlayersSliderWithStyles = () => {
  return (
    <>
      <CustomPlayersSliderStyles />
      <PlayersSlider />
    </>
  );
};

export default PlayersSliderWithStyles;











