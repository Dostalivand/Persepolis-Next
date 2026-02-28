'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaPlay, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { HiOutlineFire } from "react-icons/hi2";
import { IoIosArrowBack } from 'react-icons/io'
import SectionHeader from '@/app/components/home/SectionHeader'
import Image from 'next/image'

interface SlideItem {
  id: number
  title: string
  subtitle?: string
  image: string
  rating?: number
  duration?: string
  isNew?: boolean
  hasPlay?: boolean
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-1.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 2,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-2.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 3,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-3.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 4,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-4.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 5,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-6.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 6,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-7.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 7,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-8.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 8,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/gallery.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 9,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-9.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
  {
    id: 10,
    title: 'لورم ایپسوم متن ساختگی',
    subtitle: 'توضیحات تکمیلی',
    image: '/images/cart-10.jpg',
    rating: 4.5,
    duration: '1hr 30min',
    hasPlay: true,
  },
]

export default function LatestVideosSlider() {
  return (
    <>
      <div className='mb-5'>
        <SectionHeader
          title='جدیدترین ها'
          icons={<HiOutlineFire />}
          btn
          btntitle="مشاهده همه" />
      </div>
      <section className="w-full relative">
        <div className="relative mx-auto max-w-full px-2 md:px-6 lg:px-12">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            dir="rtl"
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 13 },
              640: { slidesPerView: 3, spaceBetween: 13 },
              768: { slidesPerView: 4, spaceBetween: 13 },
              1024: { slidesPerView: 5, spaceBetween: 13 },
              1152: { slidesPerView: 5, spaceBetween: 13 },
              1185: { slidesPerView: 6, spaceBetween: 13 },
              1280: { slidesPerView: 6, spaceBetween: 13 },
            }}
            className="p-3!"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Glow wrapper */}
                <div className="glow-wrapper">
                  <div className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 48vw, (max-width: 767px) 32vw, (max-width: 1023px) 25vw, (max-width: 1184px) 18vw, (max-width: 1535px) 12.5vw, 10vw"
                        className="object-cover transition-transform duration-400 ease-out group-hover:scale-[1.05] will-change-transform backface-hidden" />
                      {item.hasPlay && (
                        <div className="group absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-400 group-hover:bg-rose-600 duration-300 text-white shadow-xl">
                            <FaPlay size={22} className="text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex h-full flex-col justify-between py-2 px-3 text-right">
                      <div className='group'>
                        <h3 className="text-xs md:text-sm font-Kalameh line-clamp-1 text-gray-900 group-hover:text-rose-600 duration-300">{item.title}</h3>
                        {item.subtitle && (
                          <p className="mt-3 text-xs line-clamp-1 text-gray-600">{item.subtitle}</p>
                        )}
                      </div>
                      {(item.rating || item.duration) && (
                        <div className="mt-3 flex items-center justify-center md:justify-between text-gray-500 border-t border-gray-300 pt-3">
                          <span className='flex items-center justify-center text-xs group-hover:text-rose-600 duration-300 text-nowrap'>مشاهده جزئیات
                            <IoIosArrowBack className='text-rose-600 text-sm md:text-base group-hover:-translate-x-1 duration-300' />
                          </span>
                          {item.rating && (
                            <div className="hidden md:flex items-center justify-center text-xs gap-1">
                              {item.rating}
                              <FaStar className='text-orange-400 mb-1' />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div className='group'>
            <button className="custom-prev absolute top-1/2 right-0 z-10 -translate-y-3/4 mr-1 md:mr-5 lg:mr-10 flex items-center justify-center size-10 rounded-full bg-white shadow-lg transition-color duration-300 border border-gray-200 cursor-pointer group-hover:bg-rose-600">
              <FaChevronRight className="text-red-500 group-hover:text-white text-lg" />
            </button>
          </div>
          <div className='group'>
            <button className="custom-next absolute top-1/2 left-0 z-10 -translate-y-3/4 ml-1 md:ml-5 lg:ml-10 flex items-center justify-center size-10 rounded-full bg-white shadow-md transition-color duration-300 border border-gray-200 cursor-pointer group-hover:bg-rose-600">
              <FaChevronLeft className="text-red-500 group-hover:text-white text-lg" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}








