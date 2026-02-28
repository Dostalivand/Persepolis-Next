import SuggestedMoviesCard from "@/app/cinema/components/SuggestedMoviesCard";
import { FaCircleArrowDown } from "react-icons/fa6";
import { GiFilmProjector } from "react-icons/gi";

const suggestedItem = [
    {
        title: "فیلم قهرمانان محله 2025",
        rate: "8.3",
        genres: "اکشن , کمدی , درام",
        image:
            "/images/movie-nice.png",
    },
    {
        title: "فیلم یتیم ها 2025",
        rate: "5.4",
        genres: "اکشن , هیجان انگیز",
        image:
            "/images/movie-50.png",
    },
    {
        title: "سریال بادهای تاریک 2022",
        rate: "7.9",
        genres: "اکشن , هیجان انگیز",
        image:
            "/images/movie-5.png",
    },
];

export default function SuggestedMovies() {
    return (
        <div>
            <div className="mb-2.5 mt-3 md:mt-0 flex items-center justify-between text-sm text-white/80">
                <span><FaCircleArrowDown className="text-rose-600 text-base md:text-lg" /></span>
                <div className="flex gap-1">
                    <span className="text-base md:text-lg">فیلم و سریال های پیشنهادی</span>
                    <GiFilmProjector className="text-orange-500 text-xl md:text-2xl" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {suggestedItem.map((m, i) => (
                    <SuggestedMoviesCard key={i} movie={m} />
                ))}
            </div>
        </div>
    );
}
