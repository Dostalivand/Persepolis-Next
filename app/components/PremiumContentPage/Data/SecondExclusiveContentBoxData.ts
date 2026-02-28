// /app/data/heroOffers/heroOfferMainData.ts

export type OfferItem = {
    id: number
    title: string
    description: string
    ctaText: string
    imageSrc: string
}

export type SecondExclusiveContentBoxData = {
    offers: OfferItem[]
}

export const SecondExclusiveContentBoxData: SecondExclusiveContentBoxData = {
    offers: [
        {
            id: 1,
            title: "خلاصه دیدار پرسپولیس و ذوب‌آهن لیگ 24",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. ",
            ctaText: "تماشا کنید",
            imageSrc: "/images/box-2.png",
        },
    ],
}
