import Image from "next/image";
import Link from "next/link";
import type { FilmBoxItem } from "@/app/cinema/components/data/filmBoxFirstData";

type FilmBoxProps = {
    data: FilmBoxItem;
    className?: string;
};

export default function FilmBox({ data, className = "" }: FilmBoxProps) {
    const {
        titleFa,
        titleEn,
        genres,
        description,
        rating,
        backdrop,
        poster,
        dubbingTag,
        actionText,
        actionHref = "#"
    } = data;

    const ratingValue = Math.max(0, Math.min(10, parseFloat(rating.value)));
    const ratingPercent = (ratingValue / 10) * 100;

    return (
        <section
            className={`relative mt-10 md:mt-14 w-full overflow-hidden rounded-2xl bg-[#21343a] text-white shadow-lg ${className}`}
            dir="rtl">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={backdrop}
                    alt={titleEn}
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-l from-[#1b2b30]/90 via-[#1b2b30]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 gap-6 p-2 md:p-3 md:grid-cols-[minmax(180px,260px)_1fr_minmax(140px,200px)] md:items-stretch md:gap-8">
                {/* Poster Img */}
                <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl shadow-md md:aspect-3/4">
                    <Image
                        src={poster}
                        alt={titleEn}
                        fill
                        className="object-cover hover:grayscale hover:scale-105 transition-all duration-400"
                        sizes="(max-width: 768px) 100vw, 260px"
                    />
                    {/* Mobile IMDb */}
                    <div className="absolute left-2 top-2 md:hidden">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full" style={{ background: `conic-gradient(#e5e7eb ${ratingPercent}%, rgba(255,255,255,0.25) 0)`, }}>
                            <div className="absolute inset-1 rounded-full bg-[#2b3f45]" />
                            <div className="relative z-10 flex flex-col items-center justify-center text-[10px] font-semibold leading-none text-white">
                                <span className="text-sm text-orange-500">{rating.value}</span>
                                <span className="mt-1 text-xs text-slate-200">
                                    IMDb
                                </span>
                            </div>
                        </div>
                    </div>
                    {dubbingTag && (
                        <div className="absolute top-3 right-3 md:top-2 md:right-2  rounded-lg px-2.5 py-1 text-xs shadow-lg text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%]">
                            {dubbingTag}
                        </div>
                    )}
                </div>
                {/* Main Content */}
                <div className="flex flex-col gap-3 md:justify-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-Kalameh sm:text-3xl">{titleFa}</h2>
                        <p className="text-sm uppercase tracking-widest text-slate-300 font-Kalameh">
                            {titleEn}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-orange-300">
                        {genres.map((g) => (
                            <span key={g} className="rounded-full bg-white/20 px-2 py-0.5">
                                {g}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm leading-6 text-slate-200 line-clamp-4 md:line-clamp-2 text-justify">
                        {description}
                    </p>
                </div>
                {/* Left Content */}
                <div className="flex flex-col items-end justify-between gap-4 md:items-end">
                    <div className="hidden md:flex">
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full" style={{ background: `conic-gradient(#e5e7eb ${ratingPercent}%, rgba(255,255,255,0.25) 0)`, }}>
                            <div className="absolute inset-1.25 rounded-full bg-[#2b3f45]" />
                            <div className="relative z-10 flex flex-col items-center justify-center text-xs font-semibold leading-none text-white">
                                <span className="text-base text-orange-500">{rating.value}</span>
                                <span className="text-xs text-slate-200">
                                    IMDb
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link href={actionHref} className="inline-flex items-center justify-center rounded-lg text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] transition-all px-4 py-2 cursor-pointer duration-300 text-sm hover:bg-rose-500">
                        {actionText}
                    </Link>
                </div>
            </div>
        </section>
    );
}








