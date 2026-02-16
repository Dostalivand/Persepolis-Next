'use client';

import { useEffect, useState } from 'react';
import { TbArrowBigUpLines } from 'react-icons/tb';

const SCROLL_TRIGGER_RATIO = 0.5;
const SCROLL_DEBOUNCE_MS = 100;

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight;
                const viewportHeight = window.innerHeight;

                const hasPassedHalfPage =
                    scrollPosition > (documentHeight - viewportHeight) * SCROLL_TRIGGER_RATIO;

                setIsVisible(hasPassedHalfPage);
            }, SCROLL_DEBOUNCE_MS);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="بازگشت به بالای صفحه"
            className={`group fixed bottom-6 right-6 z-500 flex items-center justify-center size-12 rounded-full shadow-lg transition-all duration-300 bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] text-white cursor-pointer border-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none'} sm:bottom-8 sm:right-8 md:h-14 md:w-14`}>
            <TbArrowBigUpLines className='h-6 w-6 md:h-7 md:w-7 group-hover:-translate-y-1 transition-all duration-300' />
        </button>
    );
}
