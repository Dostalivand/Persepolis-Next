import Image from "next/image"
import type { ExclusiveContentBoxItem } from "@/app/components/PremiumContentPage/Data/ExclusiveContentBoxMainData"

type ExclusiveContentBoxProps = {
    offers: ExclusiveContentBoxItem[]
}

export default function ExclusiveContentBox({ offers }: ExclusiveContentBoxProps) {
    return (
        <section className="w-full mt-10 md:mt-14">
            {offers.map((item) => (
                <div
                    key={item.id}
                    className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] overflow-hidden py-10"
                    dir="rtl"
                >
                    {/* Background image */}
                    <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        priority
                        className="object-cover object-left"
                    />
                    {/* Right gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#102132]/60 to-[#0b1a2a]/90" />
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
                            <div className="max-w-[620px] ml-auto text-right text-white">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-Kalameh pb-2 md:pb-4">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3 text-white/90">
                                    {item.description}
                                </p>
                                <button className="mt-4 inline-flex items-center font-Dana-Bold justify-center rounded-full text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] transition-all px-5 py-2 text-xs sm:text-sm shadow-md cursor-pointer">
                                    {item.ctaText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
