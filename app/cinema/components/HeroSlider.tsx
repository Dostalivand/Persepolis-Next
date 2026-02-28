"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";

const slides = [
    {
        title: "Predator: Badlands 2025",
        rate: "9.2",
        genres: "اکشن | هیجان انگیز",
        image: "/images/film-slider-10.png",
    },
    {
        title: "How to Train Your Dragon 2025",
        rate: "8.4",
        genres: "اکشن | ماجراجویی | کمدی",
        image: "/images/film-slider-3.png",
    },
];

export default function HeroSlider() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (!swiperRef.current || !prevRef.current || !nextRef.current) return;

        swiperRef.current.params.navigation = {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            disabledClass: "swiper-button-disabled",
        };

        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
    }, []);

    return (
        <div className="relative rounded-xl bg-[#2f2f2f] overflow-hidden h-[220px] sm:h-[290px] md:h-[337px] lg:h-[337px] xl:h-[437px] 2xl:h-[648px]">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="h-full"
            >
                {slides.map((s, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-full w-full cursor-pointer">
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 70vw"
                                priority={i === 0}
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
                            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                                <h2 className="text-2xl sm:text-3xl font-Kalameh line-clamp-2 md:line-clamp-2">
                                    {s.title}
                                </h2>
                                <p className="flex justify-center md:justify-start gap-1 font-Dana-Bold text-sm text-white/80 mt-2">
                                    <FaStar className="text-orange-400" /> {s.rate} · {s.genres}
                                </p>
                                <div className="mt-4 flex justify-center md:justify-start gap-1">
                                    <button className="px-4 py-2 rounded-lg text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] transition-all text-sm cursor-pointer duration-300">
                                        تماشا کنید
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-white/20 cursor-pointer text-white text-sm">
                                        تریلر
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button ref={prevRef} className="absolute z-20 left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-rose-600 cursor-pointer transition-all duration-300 flex items-center justify-center text-rose-600 hover:text-white">
                <HiChevronLeft size={22} />
            </button>
            <button ref={nextRef} className="absolute z-20 right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-rose-600 cursor-pointer transition-all duration-300 flex items-center justify-center text-rose-600 hover:text-white">
                <HiChevronRight size={22} />
            </button>
        </div>
    );
}
