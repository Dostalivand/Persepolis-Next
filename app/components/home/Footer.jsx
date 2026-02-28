import Image from "next/image";
import wave from "@/public/images/wave.gif";
import backgroundImg from "@/public/images/footer-pattern.jpg";
import logo from "@/public/images/logo-persepolis.png";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const FooterLinks = [
  { title: "صفحه اصلی", link: "/#home" },
  { title: "سینمای خانگی", link: "/#about" },
  { title: "محتوای اختصاصی", link: "/#blog" },
];
const FooterLinksAbout = [
  { title: "افتخارات", link: "/#honors" },
  { title: "بازیکنان", link: "/#players" },
  { title: "تماس با ما", link: "/#support" },
];

export default function Footer() {
  return (
    <div className="bg-bottom bg-no-repeat bg-cover w-full text-white relative mt-25" style={{ backgroundImage: `url(${backgroundImg.src})` }} dir="rtl">
      <div className="mx-auto w-full px-5 md:px-9 lg:px-15 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-5" data-aos="zoom-in">
          {/* Logo + Title */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-center w-full py-8">
            <Image
              src={logo}
              alt="Persepolis-Logo"
              className="w-52 h-60 -mt-32 mb-4 relative z-50"
            />
            <h1 className="text-rose-600 text-xl sm:text-2xl font-Kalameh-Bold text-center w-full">
              پرسپولیس ؛{" "}
              <span className="text-gray-100">همیشه قهرمان</span>
            </h1>
          </div>
          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 z-90">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="py-8 px-4">
                <h1 className="text-xl text-orange-300 Dana-Bold text-right mb-3 text-nowrap">
                  {index === 0 ? "دسترسی سریع" : "درباره باشگاه"}
                </h1>
                <ul className="flex flex-col gap-3">
                  {(index === 0 ? FooterLinks : FooterLinksAbout).map((link) => (
                    <li key={link.title}>
                      <a href={link.link} className="text-gray-200 hover:text-rose-600 transition-colors duration-300">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Social Networks */}
            <div className="pr-4 py-8">
              <p className="mb-4 text-xl text-orange-300 Dana-Bold text-nowrap">شبکه های اجتماعی</p>
              <div className="flex items-center gap-3 text-3xl text-gray-200">
                <a href="#"><FaInstagram className="hover:text-rose-600 duration-300" /></a>
                <a href="#"><FaTwitter className="hover:text-rose-600 duration-300" /></a>
                <a href="#"><FaYoutube className="hover:text-rose-600 duration-300" /></a>
                <a href="#"><BiLogoTelegram className="hover:text-rose-600 duration-300" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Image */}
        <div className="flex justify-center">
          <Image
            src={wave}
            alt="wave-image"
            className="w-full h-50 -mt-22 object-cover mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
}
