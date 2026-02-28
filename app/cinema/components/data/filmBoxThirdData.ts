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

export const filmBoxThirdData: FilmBoxItem[] = [
    {
        id: "Vikings 2013",
        titleFa: "سریال وایکینگ ها 2013",
        titleEn: "Vikings (2013)",
        genres: ["اکشن", "ماجراجویانه", "درام", "جنایی"],
        description: "یک کشاورز و جنگجوی وایکینگ به نام رگنار لودبروک که به عنوان یکی از بزرگترین قهرمانان تاریخی کشورهای اسکاندیناوی شناخته می‌شود، طی سالیان متمادی به همراه اعضای خانواده و مردم قبیله خود، قلمرو فرمانروایی‌اش را توسعه می‌دهد و ...",
        rating: { source: "IMDb", value: "8.5" },
        backdrop: "/images/Vikings-poster-2013.png",
        poster: "/images/Vikings-2013.png",
        dubbingTag: "دوبله فارسی",
        actionText: "تماشای سریال",
        actionHref: "/watch/unfamiliar"
    },
];
