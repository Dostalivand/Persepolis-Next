import { FaStar } from "react-icons/fa6";

type Props = {
    movie: {
        title: string;
        rate: string;
        genres: string;
        image: string;
        director: string;
        language: string;
        Quality: string;
        Duration: string;
    };
    big?: boolean;
};

export default function BestDubbedMovieCard({ movie, big }: Props) {
    return (
        <div className="group relative rounded-2xl bg-zinc-800 p-2 flex flex-row items-start gap-3 overflow-hidden cursor-pointer">
            <div className="absolute top-12 -right-5 md:top-13 md:-right-5 xl:top-14 xl:-right-5 z-10 origin-top-right rotate-45">
                <div className="text-white bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom text-[10px] md:text-xs px-6 py-1 shadow-lg">
                    دوبله فارسی
                </div>
            </div>
            <div className={`rounded-xl bg-cover bg-center ${big ? "h-28 w-20 sm:h-32 sm:w-24 md:h-36 md:w-28 lg:h-44 lg:w-32 xl:h-48 xl:w-36 2xl:h-56 2xl:w-40 group-hover:grayscale group-hover:scale-105 transition-all duration-400" : "h-28 w-20 sm:h-32 sm:w-24 md:h-36 md:w-28 lg:h-44 lg:w-32 xl:h-48 xl:w-36 2xl:h-56 2xl:w-40 group-hover:grayscale group-hover:scale-105 transition-all duration-400"}`} style={{ backgroundImage: `url(${movie.image})` }} />
            <div className="flex-1 text-right">
                <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base lg:text-lg font-Kalameh text-gray-200 line-clamp-1 md:line-clamp-2 group-hover:text-rose-600 duration-300">{movie.title}
                    </span>
                </div>
                <span className="text-orange-400 mt-1 flex items-center gap-0.5 text-sm"><FaStar className="mb-1 2xl:mb-1.5" /> {movie.rate}</span>
                <div className="text-xs md:text-sm 2xl:mt-3 " dir="rtl">
                    <p className="text-gray-300">
                        <span className="text-orange-400">ژانر : </span>
                        {movie.genres}
                    </p>
                    <p className="text-gray-300 mt-2">
                        <span className="text-orange-400">
                            کارگردان : </span>
                        {movie.director}
                    </p>
                    <p className="text-gray-300 mt-2">
                        <span className="text-orange-400">زبان : </span>
                        {movie.language}
                    </p>
                    <p className="text-gray-300 mt-2 hidden lg:block">
                        <span className="text-orange-400">کیفیت : </span>
                        {movie.Quality}
                    </p>
                    <p className="text-gray-300 mt-2 hidden xl:block">
                        <span className="text-orange-400">زمان : </span>
                        {movie.Duration}
                    </p>
                </div>
            </div>
        </div>
    );
}

