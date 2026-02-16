'use client';

import Image from 'next/image';
import { PiShieldStarFill } from 'react-icons/pi';

const cards = [
    {
        title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
        image: '/images/cart-1.jpg',
        rate: '4.7',
        duration: '1 ساعت و 20 دقیقه قبل',
    },
    {
        title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
        image: '/images/cart-2.jpg',
        rate: '4.5',
        duration: '2 ساعت و 30 دقیقه قبل',
    },
    {
        title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
        image: '/images/cart-3.jpg',
        rate: '4.9',
        duration: '8 ساعت و 40 دقیقه قبل',
    },
];

export default function HeaderCarts() {
    return (
        <div className="relative z-30 -mt-30 pb-0 bg-linear-to-t from-[#3b1218] to-[#1e142b] shadow-lg">
            <div className="mx-auto grid w-[95%] max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 -translate-y-20">
                {cards.map((card, index) => (
                    <div key={index}
                        className="group relative overflow-hidden rounded-2xl text-white shadow-lg cursor-pointer transition-transform duration-300 ease-out transform-gpu will-change-transform active:scale-[0.98] sm:active:scale-100 lg:group-hover:shadow-[0_0_30px_#9333ea66]">
                        {/* Fixed background */}
                        <div className="absolute inset-0 rounded-2xl bg-slate-900 -z-10" />
                        {/* Image */}
                        <div className="relative w-full overflow-hidden aspect-video sm:aspect-auto sm:h-44 transition-all duration-300 ease-out lg:group-hover:h-35">
                            <div className="absolute inset-0 transform-gpu will-change-transform transition-transform duration-300 ease-out origin-center lg:group-hover:scale-110"
                                style={{
                                    transform: 'translateZ(0) scale(1)',
                                    backfaceVisibility: 'hidden',
                                }}>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 639px) 96vw, (max-width: 1023px) 45vw, 30vw"
                                    className="object-cover object-top sm:object-cover sm:object-center" />
                            </div>
                            {/* Black Effect */}
                            <div
                                className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Mobile / Tablet Button */}
                            <div className="absolute inset-x-0 bottom-3 flex justify-center lg:hidden">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/90 bg-white/10 backdrop-blur-lg border border-white/15shadow-md shadow-black/30 active:scale-[0.97] transition-transform duration-200">
                                    <span className='text-white font-Kalameh'>مشاهده جزئیات</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4" dir='rtl'>
                            <h3 className="mb-3 text-sm leading-6 font-Kalameh line-clamp-1">
                                {card.title}
                            </h3>
                            <div className="flex items-center justify-between text-xs text-slate-300">
                                <span className='line-clamp-1'>زمان انتشار : </span>
                                <span className='line-clamp-1'>{card.duration}</span>
                                <div>
                                    <span className='flex justify-center gap-1'>
                                        {card.rate}
                                        <PiShieldStarFill className='text-amber-500 text-sm' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="h-2 opacity-0 pointer-events-none" />
                        {/* Hover Button For Desktop Only */}
                        <div className="absolute left-0 right-0 hidden lg:flex items-center justify-center">
                            <span
                                className="text-sm bg-rose-600 text-white px-3 py-1 rounded-full opacity-0 translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                                مشاهده جزئیات
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
