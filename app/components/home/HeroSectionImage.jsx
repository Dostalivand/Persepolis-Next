'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-130 md:h-250 w-full">
      <Image
        src="/images/hero-section.jpg"
        alt="header-background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
    </div>
  );
}


