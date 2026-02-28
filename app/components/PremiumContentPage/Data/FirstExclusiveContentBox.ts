// /app/data/heroOffers/heroOfferMainData.ts

export type OfferItem = {
    id: number
    title: string
    description: string
    ctaText: string
    imageSrc: string
}

export type FirstExclusiveContentBoxData = {
    offers: OfferItem[]
}

export const FirstExclusiveContentBox: FirstExclusiveContentBoxData = {
    offers: [
        {
            id: 1,
            title: "سوپرگل های مهدی طارمی برای پرسپولیس",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. ",
            ctaText: "تماشا کنید",
            imageSrc: "/images/box-1.png",
        },
    ],
}
