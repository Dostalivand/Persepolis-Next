import Image from "next/image"

type Logo = {
  id: number
  name: string
  image: string
  url?: string
}

const logos: Logo[] = [
  { id: 1, name: "bank-shahr", image: "/images/bank-shahr-logo.png" },
  { id: 2, name: "Majid", image: "/images/Majid.png" },
  { id: 3, name: "Upp", image: "/images/Upp.png" },
  { id: 4, name: "Daria", image: "/images/Daria-logo.png" },
]

export default function SponsorIcons() {
  return (
    <section className="w-full my-14">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center w-full h-20">
              <div className="group relative inline-flex items-center justify-center size-30 cursor-pointer">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <div className="relative size-30">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      fill
                      sizes="120px"
                      className="object-contain grayscale opacity-70 transition duration-300 scale-75 sm:scale-100 group-hover:grayscale-0 group-hover:opacity-100" />
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-2 rounded-full blur-md opacity-0 group-hover:opacity-25 bg-white transition duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




