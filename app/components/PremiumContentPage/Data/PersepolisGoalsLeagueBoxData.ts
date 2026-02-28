export type ExclusiveContentBoxItem = {
    id: number
    title: string
    description: string
    ctaText: string
    imageSrc: string
}

export type ExclusiveContentBoxData = {
    offers: ExclusiveContentBoxItem[]
}

export const PersepolisGoalsLeagueBoxData: ExclusiveContentBoxData = {
    offers: [
        {
            id: 1,
            title: "گل‌های پرسپولیس در لیگ چهاردهم",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. ",
            ctaText: "تماشا کنید",
            imageSrc: "/images/goals.png",
        },
    ],
}
