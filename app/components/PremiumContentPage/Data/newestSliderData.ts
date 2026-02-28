// /app/data/sliders/newestSliderData.ts

export type Slide = {
    id: string
    title: string
    subtitle: string
    image: string
    link: string
}

export type PremiumContentSliderData = {
    slides: Slide[]
    coverImage: string
    coverAlt: string
}

export const newestSliderData: PremiumContentSliderData = {
    slides: [
        {
            id: '1',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-1.jpg',
            link: '/content/iran-v-morocco',
        },
        {
            id: '2',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-2.jpg',
            link: '/content/iran-v-france',
        },
        {
            id: '3',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-3.jpg',
            link: '/content/iran-v-france',
        },
        {
            id: '4',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-4.jpg',
            link: '/content/iran-v-france',
        },
        {
            id: '5',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-5.jpg',
            link: '/content/iran-v-france',
        },
        {
            id: '6',
            title: 'لورم ایپسوم متن ساختگی',
            subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            image: '/images/cart-6.jpg',
            link: '/content/iran-v-france',
        },
    ],
    coverImage: '/images/slider-cover-3.png',
    coverAlt: 'Hero',
}
