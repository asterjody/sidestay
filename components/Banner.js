import Image from "next/image";
import sidestayImg from "/public/images/banner.png";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={sidestayImg} className="object-cover" fill alt="/" />
      <div className="absolute top-1/3 w-full text-center">
        <p className="text-xl text-white/80 font-semibold sm:text-2xl lg:text-3xl">
          Not Sure Where to Go?
        </p>
        <button
          className="bg-[#87AE73] text-white font-bold px-10 py-4 shadow-md
         rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150 lg:text-2xl"
        >
          Let SideStay Helps You!
        </button>
      </div>
    </div>
  );
}

export default Banner;
