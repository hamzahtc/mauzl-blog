import Image from "next/image";
import { CalendarDays, User } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden  mt-4 pb-20 pt-10 px-20 sm:px-30">
      {/* Hero Image */}
      <Image
        src="/hero.png"
        alt="Hero image"
        width={900}
        height={500}
        className="w-full h-auto mx-auto object-cover rounded-lg"
        priority
      />

      {/* Overlay Card */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl w-[90%] md:w-[500px] max-w-full">
        <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full mb-3">
          Technology
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="w-4 h-4 text-gray-500" />
          <span>Jason Francisco</span>
          <span className="mx-2">•</span>
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <span>August 20, 2022</span>
        </div>
      </div>
    </section>
  );
}
