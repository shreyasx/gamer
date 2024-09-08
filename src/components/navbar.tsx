import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-8 h-fit md:h-60 flex flex-row w-full bg-navy">
      <div className="flex items-center h-full relative">
        <h1 className="text-lg md:text-xl text-center leading-[3.75rem] md:max-w-[90%] 2xl:max-w-[70%] mx-auto text-light2">
          {`Hey! Rohan here, I'm a Game Designer sculpting experiences using fun and practical designs. You can catch me learning at `}
          <Link href="https://studiosirah.com" target="_blank">
            <span className="underline underline-offset-4 cursor-pointer">{`Studio Sirah`}</span>
          </Link>
          {`!`}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
