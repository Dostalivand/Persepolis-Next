// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'


// type Slide = {
//     id: string
//     title: string
//     subtitle: string
//     image: string
//     link: string
// }

// const slides: Slide[] = [
//     {
//         id: '1',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-1.jpg',
//         link: '/content/iran-v-morocco',
//     },
//     {
//         id: '2',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-2.jpg',
//         link: '/content/iran-v-france',
//     },
//     {
//         id: '3',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-3.jpg',
//         link: '/content/iran-v-guatemala',
//     },
//     {
//         id: '4',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-4.jpg',
//         link: '/content/iran-v-venezuela',
//     },
//     {
//         id: '5',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-5.jpg',
//         link: '/content/iran-v-spain',
//     },
//     {
//         id: '6',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-6.jpg',
//         link: '/content/iran-v-brazil',
//     },
// ]

// export default function PremiumContentSlider() {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5">
//                 <div className="mb-4 flex items-center justify-between">
//                     {/* <div className="items-center gap-2 hidden">
//                         <button
//                             onClick={handleNext}
//                             aria-label="Previous slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronLeft size={22} />
//                         </button>
//                         <button
//                             onClick={handlePrev}
//                             aria-label="Next slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronRight size={22} />
//                         </button>
//                     </div> */}
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title='جدیدترین ها'
//                             icons={<HiOutlineFire />}
//                             btn
//                             btntitle='مشاهده همه'
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slides.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src="/images/slider-cover-3.png"
//                             alt="Hero"
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }



























// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, type ReactNode } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'


// type Slide = {
//     id: string
//     title: string
//     subtitle: string
//     image: string
//     link: string
// }

// const slides: Slide[] = [
//     {
//         id: '1',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-1.jpg',
//         link: '/content/iran-v-morocco',
//     },
//     {
//         id: '2',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-2.jpg',
//         link: '/content/iran-v-france',
//     },
//     {
//         id: '3',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-3.jpg',
//         link: '/content/iran-v-guatemala',
//     },
//     {
//         id: '4',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-4.jpg',
//         link: '/content/iran-v-venezuela',
//     },
//     {
//         id: '5',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-5.jpg',
//         link: '/content/iran-v-spain',
//     },
//     {
//         id: '6',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-6.jpg',
//         link: '/content/iran-v-brazil',
//     },
// ]

// type PremiumContentSliderProps = {
//     slides?: Slide[]
//     sectionTitle?: string
//     sectionIcon?: ReactNode
//     sectionBtn?: boolean
//     sectionBtnTitle?: string
//     coverImage?: string
//     coverAlt?: string
// }

// export default function PremiumContentSlider({
//     slides: slidesProp = slides,
//     sectionTitle = 'جدیدترین ها',
//     sectionIcon = <HiOutlineFire />,
//     sectionBtn = true,
//     sectionBtnTitle = 'مشاهده همه',
//     coverImage = '/images/slider-cover-3.png',
//     coverAlt = 'Hero',
// }: PremiumContentSliderProps) {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5">
//                 <div className="mb-4 flex items-center justify-between">
//                     {/* <div className="items-center gap-2 hidden">
//                         <button
//                             onClick={handleNext}
//                             aria-label="Previous slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronLeft size={22} />
//                         </button>
//                         <button
//                             onClick={handlePrev}
//                             aria-label="Next slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronRight size={22} />
//                         </button>
//                     </div> */}
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title={sectionTitle}
//                             icons={sectionIcon}
//                             btn={sectionBtn}
//                             btntitle={sectionBtnTitle}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slidesProp.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src={coverImage}
//                             alt={coverAlt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

















// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, type ReactNode } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'
// import { premiumSlidesData } from '@/app/components/PremiumContentPage/LatestExclusiveSliderData'


// type Slide = {
//     id: string
//     title: string
//     subtitle: string
//     image: string
//     link: string
// }

// const slides: Slide[] = [
//     {
//         id: '1',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-1.jpg',
//         link: '/content/iran-v-morocco',
//     },
//     {
//         id: '2',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-2.jpg',
//         link: '/content/iran-v-france',
//     },
//     {
//         id: '3',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-3.jpg',
//         link: '/content/iran-v-guatemala',
//     },
//     {
//         id: '4',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-4.jpg',
//         link: '/content/iran-v-venezuela',
//     },
//     {
//         id: '5',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-5.jpg',
//         link: '/content/iran-v-spain',
//     },
//     {
//         id: '6',
//         title: 'لورم ایپسوم متن ساختگی',
//         subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
//         image: '/images/cart-6.jpg',
//         link: '/content/iran-v-brazil',
//     },
// ]

// type PremiumContentSliderProps = {
//     slides?: Slide[]
//     sectionTitle?: string
//     sectionIcon?: ReactNode
//     sectionBtn?: boolean
//     sectionBtnTitle?: string
//     coverImage?: string
//     coverAlt?: string
// }

// export default function PremiumContentSlider({
//     slides: slidesProp = premiumSlidesData.length ? premiumSlidesData : slides,
//     sectionTitle = 'جدیدترین ها',
//     sectionIcon = <HiOutlineFire />,
//     sectionBtn = true,
//     sectionBtnTitle = 'مشاهده همه',
//     coverImage = '/images/slider-cover-3.png',
//     coverAlt = 'Hero',
// }: PremiumContentSliderProps) {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5">
//                 <div className="mb-4 flex items-center justify-between">
//                     {/* <div className="items-center gap-2 hidden">
//                         <button
//                             onClick={handleNext}
//                             aria-label="Previous slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronLeft size={22} />
//                         </button>
//                         <button
//                             onClick={handlePrev}
//                             aria-label="Next slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronRight size={22} />
//                         </button>
//                     </div> */}
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title={sectionTitle}
//                             icons={sectionIcon}
//                             btn={sectionBtn}
//                             btntitle={sectionBtnTitle}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slidesProp.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src={coverImage}
//                             alt={coverAlt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }























// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, type ReactNode } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'
// import { premiumSlidesData, type Slide } from '@/app/components/PremiumContentPage/premiumContentSliderData'


// type PremiumContentSliderProps = {
//     slides?: Slide[]
//     sectionTitle?: string
//     sectionIcon?: ReactNode
//     sectionBtn?: boolean
//     sectionBtnTitle?: string
//     coverImage?: string
//     coverAlt?: string
// }

// export default function PremiumContentSlider({
//     slides: slidesProp = premiumSlidesData,
//     sectionTitle = 'جدیدترین ها',
//     sectionIcon = <HiOutlineFire />,
//     sectionBtn = true,
//     sectionBtnTitle = 'مشاهده همه',
//     coverImage = '/images/slider-cover-3.png',
//     coverAlt = 'Hero',
// }: PremiumContentSliderProps) {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5">
//                 <div className="mb-4 flex items-center justify-between">
//                     {/* <div className="items-center gap-2 hidden">
//                         <button
//                             onClick={handleNext}
//                             aria-label="Previous slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronLeft size={22} />
//                         </button>
//                         <button
//                             onClick={handlePrev}
//                             aria-label="Next slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronRight size={22} />
//                         </button>
//                     </div> */}
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title={sectionTitle}
//                             icons={sectionIcon}
//                             btn={sectionBtn}
//                             btntitle={sectionBtnTitle}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slidesProp.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src={coverImage}
//                             alt={coverAlt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }















// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, type ReactNode } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'
// import { LatestExclusiveSliderData, type Slide } from '@/app/components/PremiumContentPage/Data/LatestExclusiveSliderData'


// type PremiumContentSliderProps = {
//     slides?: Slide[]
//     sectionTitle?: string
//     sectionIcon?: ReactNode
//     sectionBtn?: boolean
//     sectionBtnTitle?: string
//     coverImage?: string
//     coverAlt?: string
// }

// export default function ExclusiveContent({
//     slides: slidesProp = LatestExclusiveSliderData.slides,
//     sectionTitle = 'جدیدترین ها',
//     sectionIcon = <HiOutlineFire />,
//     sectionBtn = true,
//     sectionBtnTitle = 'مشاهده همه',
//     coverImage = LatestExclusiveSliderData.coverImage,
//     coverAlt = LatestExclusiveSliderData.coverAlt,
// }: PremiumContentSliderProps) {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-8">
//                 <div className="mb-4 flex items-center justify-between">
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title={sectionTitle}
//                             icons={sectionIcon}
//                             btn={sectionBtn}
//                             btntitle={sectionBtnTitle}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slidesProp.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src={coverImage}
//                             alt={coverAlt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }













// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, type ReactNode } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import type { Swiper as SwiperClass } from 'swiper/types'
// import SectionHeader from '@/app/components/home/SectionHeader'
// import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'
// import type { Slide } from '@/app/components/PremiumContentPage/Data/newestSliderData'

// type PremiumContentSliderProps = {
//     slides: Slide[]
//     sectionTitle?: string
//     sectionIcon?: ReactNode
//     sectionBtn?: boolean
//     sectionBtnTitle?: string
//     coverImage: string
//     coverAlt: string
// }

// export default function PremiumContentSlider({
//     slides,
//     sectionTitle = 'جدیدترین ها',
//     sectionIcon = <HiOutlineFire />,
//     sectionBtn = true,
//     sectionBtnTitle = 'مشاهده همه',
//     coverImage,
//     coverAlt,
// }: PremiumContentSliderProps) {
//     const swiperRef = useRef<SwiperClass | null>(null)

//     const handlePrev = () => swiperRef.current?.slidePrev()
//     const handleNext = () => swiperRef.current?.slideNext()

//     return (
//         <section className="w-full relative">
//             <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5">
//                 <div className="mb-4 flex items-center justify-between">
//                     {/* <div className="items-center gap-2 hidden">
//                         <button
//                             onClick={handleNext}
//                             aria-label="Previous slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronLeft size={22} />
//                         </button>
//                         <button
//                             onClick={handlePrev}
//                             aria-label="Next slides"
//                             className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
//                         >
//                             <HiChevronRight size={22} />
//                         </button>
//                     </div> */}
//                     <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
//                         <SectionHeader
//                             title={sectionTitle}
//                             icons={sectionIcon}
//                             btn={sectionBtn}
//                             btntitle={sectionBtnTitle}
//                         />
//                     </div>
//                 </div>

//                 <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f]">
//                     <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
//                         <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
//                             <button
//                                 onClick={handlePrev}
//                                 aria-label="Previous slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 aria-label="Next slides"
//                                 className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
//                             >
//                                 <HiChevronRight size={22} />
//                             </button>
//                         </div>
//                         <Swiper
//                             modules={[Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true,
//                             }}
//                             loop
//                             speed={700}
//                             slidesPerGroup={1}
//                             spaceBetween={16}
//                             slidesPerView={1}
//                             breakpoints={{
//                                 480: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1.2 },
//                                 900: { slidesPerView: 1.5 },
//                                 1024: { slidesPerView: 1.5 },
//                                 1152: { slidesPerView: 2 },
//                                 1280: { slidesPerView: 3 },
//                             }}
//                             allowTouchMove={false}
//                             className="overflow-hidden!" dir='rtl'
//                         >
//                             {slides.map((slide) => (
//                                 <SwiperSlide key={slide.id} className="h-full">
//                                     <Link
//                                         href={slide.link}
//                                         className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
//                                     >
//                                         <div className="relative h-50 md:h-60 w-full">
//                                             <Image
//                                                 src={slide.image}
//                                                 alt={slide.title}
//                                                 fill
//                                                 loading="eager"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                                 className="object-cover transition-all duration-500 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
//                                         <div className="absolute bottom-3 left-3 right-3">
//                                             <div className="text-sm font-Kalameh line-clamp-1 text-white">
//                                                 {slide.title}
//                                             </div>
//                                             <div className="text-xs mt-2 line-clamp-2 text-white/90">
//                                                 {slide.subtitle}
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
//                         <Image
//                             src={coverImage}
//                             alt={coverAlt}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }











'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, type ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper/types'
import SectionHeader from '@/app/components/home/SectionHeader'
import { HiChevronLeft, HiChevronRight, HiOutlineFire } from 'react-icons/hi'
import type { Slide } from '@/app/components/PremiumContentPage/Data/newestSliderData'

type ExclusiveContentSliderProps = {
    slides: Slide[]
    sectionTitle?: string
    sectionIcon?: ReactNode
    sectionBtn?: boolean
    sectionBtnTitle?: string
    coverImage: string
    coverAlt: string
}

export default function ExclusiveContentSlider({
    slides,
    sectionTitle = 'جدیدترین ها',
    sectionIcon = <HiOutlineFire />,
    sectionBtn = true,
    sectionBtnTitle = 'مشاهده همه',
    coverImage,
    coverAlt,
}: ExclusiveContentSliderProps) {
    const swiperRef = useRef<SwiperClass | null>(null)

    const handlePrev = () => swiperRef.current?.slidePrev()
    const handleNext = () => swiperRef.current?.slideNext()

    return (
        <section className="w-full relative">
            <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5 md:mt-10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-3">
                        <SectionHeader
                            title={sectionTitle}
                            icons={sectionIcon}
                            btn={sectionBtn}
                            btntitle={sectionBtnTitle}
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col gap-3 rounded-xl overflow-hidden sm:flex-row relative bg-[#0b234f] border border-[#1b2535]">
                    <div className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(to_right,rgba(99,102,241,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,.15)_1px,transparent_1px)] bg-[size:22px_22px]" />
                    <div className="pointer-events-none absolute -top-16 right-6 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,.25),transparent_60%)] blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-16 left-6 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,.22),transparent_60%)] blur-3xl" />
                    {/* slider area */}
                    <div className="relative z-10 min-w-0 w-full flex-1 order-2 sm:order-1 sm:py-2 md:pt-4 pl-0 md:pl-4 shadow-lg">
                        <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 md:pl-6 pointer-events-none">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous slides"
                                className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
                            >
                                <HiChevronLeft size={22} />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next slides"
                                className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-rose-600 hover:text-white"
                            >
                                <HiChevronRight size={22} />
                            </button>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop
                            speed={700}
                            slidesPerGroup={1}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                640: { slidesPerView: 1.2 },
                                900: { slidesPerView: 1.5 },
                                1024: { slidesPerView: 1.5 },
                                1152: { slidesPerView: 2 },
                                1280: { slidesPerView: 2 },
                                1366: { slidesPerView: 2.4 },
                                1440: { slidesPerView: 2.7 },
                                1536: { slidesPerView: 3 },
                                1600: { slidesPerView: 3.2 },
                                1920: { slidesPerView: 3.6 },
                            }}
                            allowTouchMove={false}
                            className="overflow-hidden!" dir='rtl'
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id} className="h-full">
                                    <Link
                                        href={slide.link}
                                        className="group relative block overflow-hidden rounded-xl bg-[#0f1f3d]"
                                    >
                                        <div className="relative h-50 md:h-60 w-full">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                loading="eager"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover transition-all group-hover:grayscale duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <div className="text-sm font-Kalameh line-clamp-1 text-white group-hover:text-rose-600 duration-300">
                                                {slide.title}
                                            </div>
                                            <div className="text-xs mt-2 line-clamp-2 leading-5 md:leading-6 text-white/90">
                                                {slide.subtitle}
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="relative z-10 h-58 md:h-68 w-full shrink-0 overflow-hidden rounded-b-full sm:rounded-b-none md:rounded-l-full order-1 sm:order-2 sm:h-auto sm:w-[280px] lg:w-[320px] xl:w-[360px] shadow-lg">
                        <Image
                            src={coverImage}
                            alt={coverAlt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}












