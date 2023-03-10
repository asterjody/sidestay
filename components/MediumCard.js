import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105
     transform transition duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={img} className="rounded-xl" fill alt="/" />
      </div>
      <h3 className="text-2xl py-2 mb-4 font-medium">{title}</h3>
    </div>
  );
}

export default MediumCard;
