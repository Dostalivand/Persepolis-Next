import HeroSlider from "@/app/cinema/components/HeroSlider";
import SuggestedMovies from "@/app/cinema/components/SuggestedMovies";
import FilmCard from "@/app/cinema/components/FilmCard";
import BestDubbedMovie from "@/app/cinema/components/BestDubbedMovie";
import Navbar from "@/app/components/home/Navbar";
import HeaderSectionTitle from "@/app/components/PremiumContentPage/HeaderSectionTitle";
import Footer from "@/app/components/home/Footer";
import FilmBox from "@/app/cinema/components/FilmBox";
import SectionHeader from "@/app/components/home/SectionHeader";
import FilmCardFirstData from "@/app/cinema/components/data/FilmCardFirstData"
import FilmCardSecondData from "@/app/cinema/components/data/FilmCartSecondData"
import { filmBoxFirstData } from "@/app/cinema/components/data/filmBoxFirstData"
import { filmBoxSecondData } from "@/app/cinema/components/data/filmBoxSecondData"
import { filmBoxThirdData } from "@/app/cinema/components/data/filmBoxThirdData"
import { HiOutlineFire } from "react-icons/hi";
import { BiCameraMovie } from "react-icons/bi";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[url('/images/background-img.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10">
                <Navbar />
                <HeaderSectionTitle
                    title="سینمای خانگی"
                    underlineTitle="مجموعه از بهترین فیلم ها و سریال ها"
                />
                <main className="w-full relative">
                    <div className="w-full mx-auto max-w-full px-5 md:px-9 lg:px-15 mt-5 md:mt-10">
                        <div className="grid gap-4 lg:grid-cols-[1.6fr_0.7fr]">
                            <HeroSlider />
                            <SuggestedMovies />
                        </div>
                        <div className='flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-5 mt-8 md:mt-10'>
                            <SectionHeader
                                title='جدیدترین ها'
                                icons={<HiOutlineFire />}
                                btn
                                btntitle="مشاهده همه"
                            />
                        </div>
                        <FilmCard items={FilmCardFirstData}/>
                        <FilmBox data={filmBoxFirstData[0]} />
                        <BestDubbedMovie />
                        <FilmBox data={filmBoxSecondData[0]} />
                        <div className='flex-1 text-right [&>*]:ml-auto [&>*]:pr-0 [&>*]:pl-0 mb-5 mt-8 md:mt-10'>
                            <SectionHeader
                                title='انیمیشن ها'
                                icons={<BiCameraMovie />}
                                btn
                                btntitle="مشاهده همه"
                            />
                        </div>
                        <FilmCard items={FilmCardSecondData}/>
                        <FilmBox data={filmBoxThirdData[0]} />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
