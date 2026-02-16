'use client'

import Image from 'next/image'
import { BiTimer } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import styles from '@/app/components/home/NextMatch/NextMatch.module.css';

const matches = [
  {
    id: 1,
    title: 'بازی بعدی - لیگ برتر فصل 1404 - 1405',
    date: '1404-10-05',
    time: '16:15',
    status: 'finished',
    coverImage: '/images/cart-2.jpg',
    away: {
      id: 1,
      name: 'پرسپولیس',
      logo: '/images/logo-persepolis.png',
      score: 0,
    },
    home: {
      id: 2,
      name: 'استقلال تهران',
      logo: '/images/Esteghlal-logo.png',
      score: 0,
    },
  },
]

export default function NextMatch() {
  const match = matches[0]

  return (
    <section className="w-full mt-10">
      <div className="relative mx-auto max-w-full px-5 md:px-9 lg:px-15">
        <div className={styles.animatedBorder}>
          <div className={styles.animatedBorderInner}>
            <div className="overflow-hidden rounded-xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* LEFT – IMAGE */}
                <div className="relative h-65 md:h-120">
                  <Image
                    src={match.coverImage}
                    alt="match"
                    fill
                    priority
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/30 rounded-lg py-3 text-center">
                    <span className="text-white text-xl md:text-2xl font-Kalameh-Bold">
                      | بازی بعدی |
                    </span>
                  </div>
                </div>
                {/* RIGHT – CONTENT */}
                <div className="bg-white p-3 md:p-6 flex flex-col gap-6">
                  <header className="text-center border-b border-rose-700 pb-4">
                    <h2 className="text-lg md:text-xl font-Kalameh-Bold text-gray-800">
                      {match.title}
                    </h2>
                    <div className="flex justify-center items-center gap-4 mt-3 text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <FcCalendar className='text-2xl mb-1' />
                        <span>{match.date}</span>
                      </div>
                      <span className="text-gray-600">|</span>
                      <div className="flex items-center justify-center gap-1">
                        <BiTimer className='text-2xl mb-1' />
                        <span>{match.time}</span>
                      </div>
                    </div>
                  </header>
                  <div className="flex items-center justify-between mt-0 md:mt-10 lg:mt-0 xl:mt-0">
                    <Team name={match.home.name} logo={match.home.logo} />
                    <div className="text-center">
                      <span className="text-xl lg:text-2xl xl:text-3xl font-Kalameh text-gray-800">
                        {match.home.score} - {match.away.score}
                      </span>
                      <p className="mt-1 text-sm text-gray-500">
                        نتیجه نهایی
                      </p>
                    </div>
                    <Team name={match.away.name} logo={match.away.logo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <Image
        src={logo}
        alt={name}
        width={300}
        height={300}
        className="object-contain cursor-pointer w-27.5 h-27.5 md:w-45 md:h-45 lg:w-70 lg:h-70 transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <span className="font-Kalameh text-gray-800 text-sm md:text-base lg:text-xl">
        {name}
      </span>
    </div>
  )
}










