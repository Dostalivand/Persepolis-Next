import Link from "next/link";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-950 px-6 py-12 text-center text-white" dir="rtl">
      <div className="relative w-full max-w-sm">
        <Image
          src="/images/404.png"
          alt="صفحه یافت نشد"
          width={526}
          height={307}
          priority
        />
      </div>
      <div className="space-y-3" >
        <h1 className="text-xl md:text-4xl font-Kalameh">صفحه موردنظرت رو پیدا نکردیم !</h1>
        <p className="flex items-center justify-center gap-1 text-base md:text-lg text-slate-300 mt-8">
          <SiTicktick className="mb-1 text-rose-600" />
          احتمالا یه جایه کار میلنگه ...
        </p>
      </div>
      <Link href="/" className="text-sm md:text-base font-Dana bg-linear-to-t from-rose-700 to-rose-500 bg-size-[100%_100%] bg-bottom hover:bg-size-[100%_150%] transition-all px-4 py-2 rounded-md cursor-pointer duration-300 ">
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
