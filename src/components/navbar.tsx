import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-8 h-[20rem] md:h-[25rem] lg:h-60 flex flex-row w-full bg-navy">
      <div className="flex items-center h-full relative">
        <h1 className="z-50 text-lg 2xl:text-xl text-center max-w-[75%] leading-10 2xl:leading-[3.75rem] xl:max-w-[82.5%] mx-auto text-light2">
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
