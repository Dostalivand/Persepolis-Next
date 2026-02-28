import ExclusiveContentSlider from "@/app/components/PremiumContentPage/ExclusiveContentSlider"
import Navbar from '@/app/components/home/Navbar'
import HeaderSectionTitle from '@/app/components/PremiumContentPage/HeaderSectionTitle'
import ExclusiveContentBox from '@/app/components/PremiumContentPage/ExclusiveContentBox'
import { PremierLeagueMatchSummaryData } from '@/app/components/PremiumContentPage/Data/PremierLeagueMatchSummaryData'
import { SpecialSportsProgramData } from '@/app/components/PremiumContentPage/Data/SpecialSportsProgramData'
import { newestSliderData } from '@/app/components/PremiumContentPage/Data/newestSliderData'
import { ExclusiveContentBoxMainData } from '@/app/components/PremiumContentPage/Data/ExclusiveContentBoxMainData'
import { FirstExclusiveContentBox } from '@/app/components/PremiumContentPage/Data/FirstExclusiveContentBox'
import { SecondExclusiveContentBoxData } from '@/app/components/PremiumContentPage/Data/SecondExclusiveContentBoxData'
import { ExclusiveContentData } from '@/app/components/PremiumContentPage/Data/ExclusiveContent'
import { PersepolisGoalsLeagueBoxData } from '@/app/components/PremiumContentPage/Data/PersepolisGoalsLeagueBoxData'
import Footer from "@/app/components/home/Footer"

export default function page() {
    return (
        <>
            <Navbar />
            <HeaderSectionTitle
                title="محتوای اختصاصی"
                underlineTitle="فیلم‌ها و محتوای ویژه پرسپولیس" />
            {/* Section 1 */}
            <ExclusiveContentSlider
                slides={newestSliderData.slides}
                coverImage={newestSliderData.coverImage}
                coverAlt={newestSliderData.coverAlt}
                sectionTitle="جدیدترین‌ها"
            />
            <ExclusiveContentBox offers={FirstExclusiveContentBox.offers} />
            {/* Section 2 */}
            <ExclusiveContentSlider
                slides={PremierLeagueMatchSummaryData.slides}
                coverImage={PremierLeagueMatchSummaryData.coverImage}
                coverAlt={PremierLeagueMatchSummaryData.coverAlt}
                sectionTitle="مسابقات لیگ برتر"
            />
            <ExclusiveContentBox offers={SecondExclusiveContentBoxData.offers} />
            {/* Section 3 */}
            <ExclusiveContentSlider
                slides={SpecialSportsProgramData.slides}
                coverImage={SpecialSportsProgramData.coverImage}
                coverAlt={SpecialSportsProgramData.coverAlt}
                sectionTitle="ویژه برنامه ورزشی"
            />
            <ExclusiveContentBox offers={ExclusiveContentBoxMainData.offers} />
            {/* Section 4 */}
            <ExclusiveContentSlider
                slides={ExclusiveContentData.slides}
                coverImage={ExclusiveContentData.coverImage}
                coverAlt={ExclusiveContentData.coverAlt}
                sectionTitle="محتوای اختصاصی"
            />
            <ExclusiveContentBox offers={PersepolisGoalsLeagueBoxData.offers} />
            <Footer />
        </>
    )
}

