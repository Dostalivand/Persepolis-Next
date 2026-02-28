'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';

const rightItems = [
  { title: 'پخش زنده', href: '/live' },
  { title: 'صفحه اصلی', href: '/' },
  { title: 'محتوای اختصاصی', href: '/premiumcontent' },
  { title: 'سینمای خانگی', href: '/cinema' },
];

const leftItems = [
  { title: 'تماس با ما', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      setShowOverlay(true);
    } else {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open]);


  return (
    <>
      {/* Overlay Close */}
      {showOverlay && (
        <div className={`fixed inset-0 z-9998 hidden max-[1169px]:block bg-black/30 backdrop-blur-md ${open ? 'animate-blurIn' : 'animate-blurOut'}`}
          onClick={() => setOpen(false)}
        />
      )}
      <nav className="absolute top-8 min-[458px]:top-15 left-1/2 z-9999 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-950 via-blue-900 to-blue-950 backdrop-blur-md">
        <div className="relative px-3 py-3">
          {/* Floating */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute top-2 left-[10%] h-4 w-4 rounded-full bg-white/15 animate-[float_3s_ease-in-out_infinite]" />
            <span className="hidden md:block absolute top-5 left-[40%] h-4 w-4 rounded-full bg-white/15 animate-[float_3s_ease-in-out_infinite]" />
            <span className="absolute top-6 left-[30%] h-3 w-3 rounded-full bg-white/15 animate-[float_3.5s_ease-in-out_infinite] [animation-delay:.4s]" />
            <span className="absolute top-3 left-[60%] h-5 w-5 rounded-full bg-white/15 animate-[float_4s_ease-in-out_infinite] [animation-delay:.8s]" />
            <span className="absolute top-7 left-[70%] h-6 w-6 rounded-full bg-white/15 animate-[float_4.5s_ease-in-out_infinite] [animation-delay:1.2s]" />
          </div>
          <div className="relative flex items-center justify-between">
            {/* Left Menu */}
            <div className="flex items-center gap-6 text-sm text-blue-100">
              {/* Account Button */}
              <button className="relative group cursor-pointer max-[458px]:hidden">
                <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 blur opacity-60 transition group-hover:opacity-100" />
                <div className="relative rounded-lg bg-blue-950 px-4 py-2">
                  <div className="flex justify-center items-center gap-1">
                    <span className="Dana-Bold text-blue-200 transition group-hover:text-white">
                      حساب کاربری
                    </span>
                    <FaArrowRightToBracket />
                  </div>
                </div>
              </button>
              {/* Search Input */}
              <div className="relative hidden min-[1170px]:block w-56">
                <span className={`absolute right-2 text-xl top-1/2 -translate-y-1/2 z-10 text-blue-300 pointer-events-none`}>
                  <BiSearchAlt />
                </span>
                <input
                  type="text"
                  placeholder="... جستجو کنید"
                  className={`w-full rounded-lg bg-white/10 backdrop-blur-md border border-blue-400/30 py-1.5 pr-8 pl-4 text-sm text-blue-100 text-right placeholder-blue-200/70 outline-none transition focus:border-red-500/60 focus:bg-white/15 focus:shadow-[0_0_22px_rgba(239,68,68,0.45)]`} />
              </div>
              {leftItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`hidden min-[1170px]:inline-block Dana-Bold relative px-1 py-1 transition ${isActive ? 'text-red-500' : 'text-blue-100 hover:text-red-500'} before:pointer-events-none before:absolute before:left-1/2 before:-bottom-2 before:h-10 before:w-[120%] before:-translate-x-1/2 before:bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.45),rgba(239,68,68,0.15)_40%,transparent_70%)] before:transition ${isActive ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-100'} after:absolute after:left-1/2 after:-bottom-2 after:h-0.5 after:-translate-x-1/2 after:bg-red-500 after:transition-all ${isActive ? 'after:w-[70%]' : 'after:w-0 hover:after:w-[70%]'}`}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
            {/* Logo Center */}
            <div className={`pointer-events-none absolute left-4 top-1/2 z-10000 -translate-y-1/2 min-[458px]:left-1/2 min-[458px]:-translate-x-1/2`}>
              <Image
                src="/images/logo-persepolis-navbar.png"
                alt="Persepolis"
                width={170}
                height={170}
                priority
                className="w-27.5 h-auto min-[458px]:w-42.5"
              />
            </div>
            {/* Right Menu */}
            <div className="hidden min-[1170px]:flex items-center gap-6 text-sm text-blue-100" dir="rtl">
              {rightItems.map((item) => {
                const isActive = pathname === item.href;
                const isLive = item.title === 'پخش زنده';
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`Dana-Bold relative px-1 py-1 transition flex items-center gap-2 ${isActive ? 'text-red-500' : 'text-blue-100 hover:text-red-500'} before:pointer-events-none before:absolute before:left-1/2 before:-bottom-2 before:h-10 before:w-[120%] before:-translate-x-1/2 before:bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.45),rgba(239,68,68,0.15)_40%,transparent_70%)] before:transition ${isActive ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-100'} after:absolute after:left-1/2 after:-bottom-2 after:h-0.5 after:-translate-x-1/2 after:bg-red-500 after:transition-all ${isActive ? 'after:w-[70%]' : 'after:w-0 hover:after:w-[70%]'}`}>
                    {isLive && (
                      <span className="relative flex items-center justify-center w-3 h-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping" />
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/60 animate-[ping_1.6s_ease-out_infinite]" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
                      </span>
                    )}
                    {item.title}
                  </Link>
                );
              })}
            </div>
            {/* Mobile Live + Hamburger Menu */}
            <div className="flex items-center gap-4 min-[1170px]:hidden ml-auto relative z-10000">
              <Link
                href="/live"
                className={`Dana-Bold relative px-1 py-1 transition flex items-center gap-2 text-sm text-blue-100 hover:text-red-500 before:pointer-events-none before:absolute before:left-1/2 before:-bottom-2 before:h-10 before:w-[120%] before:-translate-x-1/2 before:bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.45),rgba(239,68,68,0.15)_40%,transparent_70%)] before:transition before:opacity-0 hover:before:opacity-100 after:absolute after:left-1/2 after:-bottom-2 after:h-0.5 after:-translate-x-1/2 after:bg-red-500 after:transition-all after:w-0 hover:after:w-[70%]`}>
                پخش زنده
                <span className="relative flex items-center justify-center w-3 h-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping" />
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/60 animate-[ping_1.6s_ease-out_infinite]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
                </span>
              </Link>
              <button onClick={() => setOpen(!open)} className="text-blue-100">
                {open ? <FiX className="size-7" /> : <FiMenu className="size-7" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`
            relative z-9999 hidden max-[1169px]:block overflow-hidden transition-all duration-500 ease-in-out
            ${open ? 'max-h-125 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div dir="rtl" className="rounded-xl border border-blue-500/20 bg-blue-900/60 backdrop-blur-md p-4 text-white space-y-4 text-right">
              {[...rightItems, ...leftItems].map((item) => {
                const isLive = item.title === 'پخش زنده';
                const isActive = pathname === item.href;
                return (
                  <div key={item.title} className="w-full">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`Dana-Bold relative px-1 py-1 transition inline-flex items-center gap-2 text-sm min-[1170px]:text-base
                    ${isActive ? 'text-red-500' : 'hover:text-red-500'}`}
                    >
                      {isLive && (
                        <span className="relative flex items-center justify-center w-3 h-3">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping" />
                          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/60 animate-[ping_1.6s_ease-out_infinite]" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
                        </span>
                      )}
                      {item.title}
                    </Link>
                  </div>
                );
              })}
              {/* Mobile Search */}
              <div className="relative w-full">
                <span className={`absolute right-2 text-xl top-1/2 -translate-y-1/2 z-10 text-blue-300 pointer-events-none`}>
                  <BiSearchAlt />
                </span>
                <input
                  type="text"
                  placeholder="جستجو کنید ..."
                  className={`w-full rounded-lg bg-white/10 backdrop-blur-md border border-blue-400/30 py-1.5 pr-8 pl-4 text-sm text-blue-100 text-right placeholder-blue-200/70 outline-none transition focus:border-red-500/60 focus:bg-white/15 focus:shadow-[0_0_22px_rgba(239,68,68,0.45)]`}
                />
              </div>
              {/* Mobile Account Button */}
              <button className="relative group w-full">
                <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 blur opacity-60 transition group-hover:opacity-100" />
                <div className="relative rounded-lg bg-blue-950 px-4 py-2 text-center cursor-pointer">
                  <div className="flex justify-center items-center gap-1">
                    <FaArrowRightToBracket className="text-blue-200 transition group-hover:text-white" />
                    <span className="Dana-Bold text-blue-200 transition group-hover:text-white">
                      حساب کاربری
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Custom Style */}
        <style jsx global>{`
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes blurIn {
            from { backdrop-filter: blur(0); opacity: 0; }
            to { backdrop-filter: blur(14px); opacity: 1; }
          }

          @keyframes blurOut {
            from { backdrop-filter: blur(14px); opacity: 1; }
            to { backdrop-filter: blur(0); opacity: 0; }
          }

          .animate-blurIn {
            animation: blurIn 0.8s ease forwards;
          }

          .animate-blurOut {
            animation: blurOut 0.8s ease forwards;
          }
        `}</style>
      </nav>
    </>
  );
}














