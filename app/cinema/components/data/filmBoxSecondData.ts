export type FilmBadge = {
    label: string;
    href?: string;
};

export type FilmRating = {
    source: "IMDb" | "Metacritic" | "RottenTomatoes" | string;
    value: string;
};

export type FilmBoxItem = {
    id: string;
    titleFa: string;
    titleEn: string;
    genres: string[];
    description: string;
    rating: FilmRating;
    backdrop: string;
    poster: string;
    dubbingTag?: string;
    actionText: string;
    actionHref?: string;
    badges?: FilmBadge[];
};

export const filmBoxSecondData: FilmBoxItem[] = [
    {
        id: "unfamiliar-2024",
        titleFa: "سریال بینایی 2022",
        titleEn: "See (2022)",
        genres: ["اکشن", "ماجراجویانه", "درام", "جنایی"],
        description: "در آینده ای دور از انتظار، نسل بشر قدرت بینایی خود را از دست داده اند و جامعه باید راهی جدید برای ساختن، تعامل با یکدیگر، شکار و بقا پیدا کند. همه این ها زمانی که دوقلو هایی به دنیا می آیند که قدرت بینایی دارند تغییر میکند و ....",
        rating: { source: "IMDb", value: "7.6" },
        backdrop: "/images/see-2022.png",
        poster: "/images/see-2022.png",
        dubbingTag: "دوبله فارسی",
        actionText: "تماشای سریال",
        actionHref: "/watch/unfamiliar",
    },
];
