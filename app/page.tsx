import Navbar from '@/app/components/home/Navbar';
import HeroSectionImage from '@/app/components/home/HeroSectionImage';
import HeaderCarts from '@/app/components/home/HeaderCarts'
import SportsNewsSlider from '@/app/components/home/SportsNewsSlider';
import SponsorIcons from '@/app/components/home/SponsorIcons';
import VideosSlider from '@/app/components/home/LatestVideosSlider';
import NextMatch from '@/app/components/home/NextMatch/NextMatch';
import PreviousMatch from '@/app/components/home/PreviousMatch';
import PlayersSlider from '@/app/components/home/PlayersSlider';
import CupsSlider from '@/app/components/home/CupsSlider';
import ArticlesSlider from '@/app/components/home/ArticlesSlider';
import Footer from '@/app/components/home/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSectionImage />
      <HeaderCarts />
      <SportsNewsSlider />
      <SponsorIcons />
      <VideosSlider />
      <NextMatch />
      <PreviousMatch />
      <PlayersSlider />
      <CupsSlider />
      <ArticlesSlider />
      <Footer />
    </>
  );
}
