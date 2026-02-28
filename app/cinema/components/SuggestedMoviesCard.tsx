import { FaHeart, FaStar } from "react-icons/fa6";

type Props = {
    movie: {
        title: string;
        rate: string;
        genres: string;
        image: string;
    };
};

export default function SuggestedMoviesCard({ movie }: Props) {
    return (
        <div className="group relative rounded-xl overflow-hidden cursor-pointer">
            <div className="h-48 w-full bg-cover bg-center group-hover:grayscale group-hover:scale-105 transition-all duration-400"
                style={{ backgroundImage: `url(${movie.image})` }}
            />
            <div className="absolute flex gap-1 items-center justify-center left-2 top-2 text-gray-100 rounded-full bg-black/60 px-2 py-1 text-sm">
                <FaStar className="text-orange-300" />
                <span className="pt-1">{movie.rate}</span>
            </div>
            <div className="absolute right-2 text-rose-600 top-2 h-7 w-7 rounded-full bg-black/60 grid place-items-center text-sm">
                <FaHeart />
            </div>
            <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/30 backdrop-blur px-3 py-2 text-right">
                <p className="text-gray-100 font-Kalameh text-base group-hover:text-red-600 duration-300">{movie.title}</p>
                <p className="text-gray-200 mt-1 text-sm">{movie.genres}</p>
            </div>
        </div>
    );
}
