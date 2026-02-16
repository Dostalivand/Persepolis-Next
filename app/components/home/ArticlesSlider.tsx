'use client'

import SectionHeader from '@/app/components/home/SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'
import { GrArticle } from "react-icons/gr";
import { FaCalendarDays, FaStar } from 'react-icons/fa6'
import { IoIosArrowBack } from 'react-icons/io'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'

type Article = {
  id: number
  title: string
  description: string
  image: string
  rating: number
  date: string
}

const articles: Article[] = [
  {
    id: 1,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-1.jpg',
    rating: 3,
    date: "1404/11/05"
  },
  {
    id: 2,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-2.jpg',
    rating: 4,
    date: "1404/11/05"
  },
  {
    id: 3,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-3.jpg',
    rating: 5,
    date: "1404/11/05"
  },
  {
    id: 4,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-4.jpg',
    rating: 2,
    date: "1404/11/05"
  },
  {
    id: 5,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-5.jpg',
    rating: 5,
    date: "1404/11/05"
  },
  {
    id: 6,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-2.jpg',
    rating: 4,
    date: "1404/11/05"
  },
  {
    id: 7,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-3.jpg',
    rating: 5,
    date: "1404/11/05"
  },
  {
    id: 8,
    title: 'لورم ایپسوم متن ساختگی',
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    image: '/images/cart-5.jpg',
    rating: 5,
    date: "1404/11/05"
  },
]

export default function ArticleSlider() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <div className='mt-12'>
        <SectionHeader
          title='مقاله ورزشی'
          icons={<GrArticle />}
          btn
          btntitle="مشاهده همه"
        />
      </div>
      <section className="relative w-full mt-5 ">
        <div className='group'>
          <div onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 lg:right-10 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg cursor-pointer transition-colors duration-300 group-hover:bg-rose-600">
            <FaChevronRight className="text-red-500 text-lg group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className='group'>
          <div onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 lg:left-10 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg cursor-pointer transition-colors duration-300 group-hover:bg-rose-600">
            <FaChevronLeft className="text-red-500 text-lg group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className="mx-auto max-w-full px-5 md:px-9 lg:px-15" dir="rtl">
          {/* Main Content */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {articles.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative w-full h-56 group-hover:grayscale duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 92vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 22vw"
                      className="object-cover rounded-bl-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col grow text-right">
                    <h3 className="text-base font-Kalameh text-gray-800 line-clamp-1 mb-3">
                      {item.title}
                    </h3>
                    <div className='flex justify-between'>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm"><FaStar /></span>
                        ))}
                      </div>
                      <div className='flex gap-1'>
                        <span className='text-sm text-gray-500'>{item.date}</span>
                        <FaCalendarDays className='text-rose-500' />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-justify leading-6 line-clamp-2 md:line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      className="mt-auto shadow-2xl flex items-center justify-center gap-1 text-sm text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] transition-all px-4 py-2 rounded-lg cursor-pointer duration-300">
                      مشاهده مقاله
                      <span className="size-5 flex items-center justify-center rounded-full bg-white/20 group-hover:-translate-x-1 duration-300">
                        <IoIosArrowBack />
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
