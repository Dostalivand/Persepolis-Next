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

export const filmBoxFirstData: FilmBoxItem[] = [
    {
        id: "unfamiliar-2024",
        titleFa: "سریال بالرین 2025",
        titleEn: "Ballerina (2025)",
        genres: ["اکشن", "ماجراجویانه", "درام", "جنایی"],
        description: "یک قاتل حرفه‌ای به نام ایو ماکارو که در سازمان تبهکاری روسکا روما آموزش‌ دیده است، پس از مرگ پدرش، برای گرفتن انتقام‌ وارد عمل می‌شود و ...",
        rating: { source: "IMDb", value: "6.9" },
        backdrop: "/images/ballerina.png",
        poster: "/images/ballerina.png",
        dubbingTag: "دوبله فارسی",
        actionText: "تماشای سریال",
        actionHref: "/watch/unfamiliar",
    },
];
