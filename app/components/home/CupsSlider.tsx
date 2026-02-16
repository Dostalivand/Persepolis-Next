"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { useRef, useEffect } from "react";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";
import SectionHeader from "@/app/components/home/SectionHeader";
import type { Swiper as SwiperType } from "swiper";

const cups = [
  { id: 1, title: "لیگ های سراسری", image: "/images/National-leagues-New.png" },
  { id: 2, title: "جام اسپندی", image: "/images/Espandi-Cup-New.png" },
  { id: 3, title: "سوپر جام", image: "/images/Super-Cup-New.png" },
  { id: 4, title: "جام در جام آسیا 2023", image: "/images/Cup-in-the-Asian-Cup-New-3-2023.png" },
  { id: 5, title: "جام حذفی", image: "/images/FA-Cup-2-Main.png" },
  { id: 6, title: "جام باشگاه های تهران", image: "/images/Tehran-Club-Cup.png" },
  { id: 7, title: "انتخابی قهرمان آسیا", image: "/images/Asian-Championship.png" },
  { id: 8, title: "جام حذفی تهران", image: "/images/Tehran-Cup-Main.png" },
];

type NavigationConfig = Exclude<SwiperType["params"]["navigation"], boolean | undefined>;

export default function CupsSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperInstanceRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;

    const navigationParams = swiper.params.navigation;

    if (navigationParams && typeof navigationParams !== "boolean") {
      const params = navigationParams as NavigationConfig;
      params.prevEl = prevRef.current;
      params.nextEl = nextRef.current;
      swiper.params.navigation = params;
    } else {
      const params: NavigationConfig = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
      swiper.params.navigation = params;
    }

    if (swiper.navigation && typeof swiper.navigation.destroy === "function") {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <>
      <div className="flex justify-between mx-auto max-w-full mt-12" dir="rtl">
        <div>
          <SectionHeader
            title='جام های دریافتی'
            icons={<GiTrophyCup />}
          />
        </div>
        {/* Buttons */}
        <div className="relative z-30 flex justify-end gap-2 px-5 md:px-9 lg:px-15">
          <button ref={nextRef}
            className="size-10 rounded-full bg-white/10 hover:bg-rose-600 transition flex items-center justify-center text-white cursor-pointer">
            <HiChevronRight size={22} />
          </button>
          <button
            ref={prevRef}
            className="size-10 rounded-full bg-white/10 hover:bg-rose-600 transition flex items-center justify-center text-white cursor-pointer">
            <HiChevronLeft size={22} />
          </button>
        </div>
      </div>
      <section dir="rtl" className="w-full mt-4">
        <div className="relative mx-auto max-w-full px-5 md:px-9 lg:px-15">
          {/* Slider Main */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            watchOverflow={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiperInstance) => {
              swiperInstanceRef.current = swiperInstance;
            }}
            spaceBetween={18}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {cups.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-90  overflow-hidden md:overflow-visible">
                  {/* Background Image */}
                  <Image
                    src="/images/background-jam.png"
                    alt=""
                    fill
                    sizes="(max-width: 639px) 88vw, (max-width: 767px) 48vw, (max-width: 1023px) 34vw, 26vw"
                    className="object-cover rounded-2xl"
                  />
                  {/* Cups Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={280}
                    height={280}
                    className="absolute xl:-top-5 left-1/2 -translate-x-1/2 z-20 object-contain drop-shadow-2xl"
                    style={{ width: "320px", height: "320px" }}
                  />
                  {/* Title */}
                  <div className="absolute flex items-center justify-center gap-1 bottom-0 w-full bg-white py-3 text-xl md:text-2xl text-center font-Dana text-gray-800 rounded-b-2xl z-25">
                    <PiStarFill className="text-orange-400 text-xl" />
                    {item.title}
                    <PiStarFill className="text-orange-400 text-xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
