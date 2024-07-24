import Image from "next/image";

import img2 from "../../public/images/img2.png";

const Card = ({ line1, line2 }: { line1: string; line2: string }) => {
  return (
    <li className="relative w-full h-[250px] rounded-3xl p-4 bg-gray-800 m-4">
      <Image src={img2} alt="lol" fill className="object-cover rounded-3xl" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-lg font-bold">{line1}</p>
        <p className="text-white text-sm">{line2}</p>
      </div>
    </li>
  );
};

export default Card;
