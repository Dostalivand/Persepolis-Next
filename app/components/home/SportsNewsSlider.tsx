"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Image from "next/image";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "/images/cart-1.jpg",
    title: "لحظه حساس مسابقه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 2,
    image: "/images/cart-2.jpg",
    title: "هماهنگی تیمی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 3,
    image: "/images/cart-3.jpg",
    title: "نبرد در میانه میدان",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 4,
    image: "/images/gallery.jpg",
    title: "فرصت طلایی گل",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 5,
    image: "/images/cart-5.jpg",
    title: "واکنش تماشایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 6,
    image: "/images/cart-6.jpg",
    title: "قهرمانی لیگ برتر",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 7,
    image: "/images/cart-7.jpg",
    title: "تیم سرنوشت ساز",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
  {
    id: 8,
    image: "/images/cart-8.jpg",
    title: "لورم ایپسوم",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
  },
];

const DURATION = 5000;
const TOTAL_SECONDS = DURATION / 1000;

const SportsNewsSlider = () => {
  const [activeItem, setActiveItem] = useState(galleryData[0]);
  const [progress, setProgress] = useState(0);
  const [shouldSlide, setShouldSlide] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isHovering, setIsHovering] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  // Timer
  useEffect(() => {
    if (isHovering) return;
    const intervalTime = 50;
    const step = 100 / (DURATION / intervalTime);

    setProgress(0);
    setSecondsLeft(TOTAL_SECONDS);
    setShouldSlide(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;

        const sec = Math.ceil(
          TOTAL_SECONDS - (next / 100) * TOTAL_SECONDS
        );
        setSecondsLeft(sec >= 0 ? sec : 0);

        if (next >= 100) {
          setShouldSlide(true);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeItem, isHovering]);

  /* Slide Change */
  useEffect(() => {
    if (!shouldSlide) return;

    const currentIndex = galleryData.findIndex(
      (item) => item.id === activeItem.id
    );
    const nextIndex =
      currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;

    swiperRef.current?.slideTo(nextIndex);
    setActiveItem(galleryData[nextIndex]);

    setProgress(0);
    setShouldSlide(false);
  }, [shouldSlide]);

  return (
    <section dir="rtl" className="bg-gray-300 py-4">
      <div className="mx-auto px-2.5 md:px-5 lg:px-4.5">
        <div className="bg-slate-900 rounded-lg p-2.5 md:p-4.5 shadow-2xl relative">
          {/* Top Content */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 items-start">
            {/* Big Image */}
            <div className="relative w-full h-65 md:h-110 rounded-lg overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                className="object-cover cursor-pointer"
              />
              {/* Linear Progress */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div
                  className="h-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* Circular Timer */}
              <div className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-black/25 backdrop-blur-sm shadow-md shadow-black/10 pointer-events-none">
                <svg
                  viewBox="0 0 100 100"
                  className="-rotate-90 w-full h-full"
                >
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  {/* Background Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="6"
                    fill="none"
                  />
                  {/* Progress Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#circleGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={
                      2 * Math.PI * 45 * (1 - progress / 100)
                    }
                    strokeLinecap="round"
                    className="transition-all duration-100"
                  />
                </svg>
                {/* Countdown Number */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base">
                  {secondsLeft}
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="text-white text-right">
              <div key={activeItem.id} onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="animate-[fadeSlide_0.45s_ease-out] cursor-pointer [@keyframes_fadeSlide]:from{opacity:0;transform:translateY(10px)} [@keyframes_fadeSlide]:to{opacity:1;transform:translateY(0)}">
                {/* Title + Accent Line */}
                <div className="flex items-center justify-start gap-2 mb-3 ">
                  <span className="w-1.5 h-9 rounded-full bg-rose-600" />
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-Kalameh leading-loose line-clamp-1">
                    {activeItem.title}
                  </h1>
                </div>
                {/* Description */}
                <p className="mt-3 text-sm md:text-base leading-8 line-clamp-5 lg:line-clamp-11 text-justify text-white/80 ">
                  {activeItem.description}
                </p>
              </div>
              {/* Slider Navigation Buttons */}
              <div className="flex justify-end gap-2 mt-2 lg:mt-11">
                <button
                  ref={nextRef}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
                >
                  <HiChevronRight size={22} />
                </button>
                <button
                  ref={prevRef}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 cursor-pointer transition flex items-center justify-center text-white"
                >
                  <HiChevronLeft size={22} />
                </button>
              </div>
            </div>
          </div>
          {/* Slider Main */}
          <div className="mt-0 lg:mt-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1.2}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onBeforeInit={(swiper) => {
                // RTL UX fix
                // @ts-ignore
                swiper.params.navigation.prevEl = nextRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = prevRef.current;
              }}
              navigation={{
                prevEl: nextRef.current,
                nextEl: prevRef.current,
              }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 4.5 },
              }}
            >
              {galleryData.map((item, index) => {
                const isActive = activeItem.id === item.id;
                return (
                  <SwiperSlide key={item.id}>
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        swiperRef.current?.slideTo(index);
                      }}
                      className="w-full text-right"
                    >
                      <div className="group bg-slate-900 rounded-lg mt-2 pt-3 pl-2.5 h-full cursor-pointer transition-all duration-300">

                        <div className="relative w-full h-45 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 35vw, 20vw"
                            className={`object-cover transition-all duration-300 ${isActive
                              ? "grayscale-0 "
                              : "grayscale group-hover:grayscale-0"
                              }`}
                          />
                        </div>
                        <h3 className="mt-4 text-base line-clamp-1 font-Kalameh text-white group-hover:text-rose-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm line-clamp-1 leading-6 text-white/70">
                          {item.description}
                        </p>
                        {isActive && (
                          <div className="mt-4 h-1 w-full rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500" />
                        )}
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsNewsSlider;















