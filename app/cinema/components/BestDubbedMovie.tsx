import BestDubbedMovieCard from "@/app/cinema/components/BestDubbedMovieCard";
import SectionHeader from "@/app/components/home/SectionHeader";
import { LuCrown } from "react-icons/lu";

const latest = [
    {
        title: "Panji Tengkorak 2025",
        rate: "8.5",
        genres: "اکشن , ماجراجویی , انیمیشن",
        image: "/images/Panji-Tengkorak.png",
        director: "Robert Dornhelm",
        language: "انگلیسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"


    },
    {
        title: "Firebreak 2026",
        rate: "7.0",
        genres: "درام , هیجان انگیز",
        image: "/images/Firebreak.png",
        director: "Robert Dornhelm",
        language: "انگلیسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"

    },
    {
        title: "Hellfire 2026",
        rate: "6.9",
        genres: "اکشن , هیجان انگیز",
        image: "/images/Hellfire.png",
        director: "Robert Dornhelm",
        language: "انگلیسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"

    },
    {
        title: "Cold Storage 2026",
        rate: "8.4",
        genres: "علمی تخیلی , کمدی , ترسناک",
        image: "/images/Cold-Storage.png",
        director: "Robert Dornhelm",
        language: "انگلیسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"

    },
    {
        title: "Chapter 3 2026",
        rate: "8.4",
        genres: "ترسناک",
        image: "/images/Chapter-3.png",
        director: "Robert Dornhelm",
        language: "انگلیسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"

    },
    {
        title: "Bang Bang 2024",
        rate: "6.2",
        genres: "درام",
        image: "/images/bang-bang-2024.png",
        director: "RVincent",
        language: "دوبله فارسی",
        Quality: "1080p , 720p",
        Duration: "108 دقیقه"

    }
];

export default function BestDubbedMovie() {
    return (
        <div>
            <div className='flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-5 mt-8 md:mt-10'>
                <SectionHeader
                    title='برترین های دوبله'
                    icons={<LuCrown />}
                    btn
                    btntitle="مشاهده همه"
                />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                {latest.map((m, i) => (
                    <BestDubbedMovieCard key={i} movie={m} big />
                ))}
            </div>
        </div>
    );
}
