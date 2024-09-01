import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-60 h-full bg-navy text-white flex flex-col justify-between items-center fixed right-0">
      <div className="absolute top-0 right-0 w-60 h-80">
        <Image
          src="/images/rohan.png"
          alt="Rohan"
          layout="fill"
          objectFit="contain"
          className="rounded-b-full z-50"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <nav className="space-y-12 flex flex-col items-center mt-24">
          <Link
            className="text-2xl text-light2 bg-navy2 px-10 py-1 rounded-full hover:bg-light3 transition-all duration-300 tracking-wider"
            href="/"
          >{`Games`}</Link>
          <Link
            className="text-2xl text-light2 bg-navy2 px-10 py-1 rounded-full hover:bg-light3 transition-all duration-300 tracking-wider"
            href="/about"
          >{`About`}</Link>
        </nav>
      </div>
      <div className="mt-auto mb-4 text-light2 text-center border-t-4 border-light2 pt-4">
        <p>rohangwrl@gmail.com</p>
        <p>+91 9920054070</p>
      </div>
    </aside>
  );
};

export default Sidebar;
