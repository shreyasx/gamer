const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 py-8 h-fit md:h-60 flex flex-row w-full bg-navy2">
      <div className="flex items-center h-full relative md:mr-60">
        <h1 className="text-lg lg:text-2xl text-center leading-[3.75rem] md:max-w-[90%] mx-auto text-light2">
          {`Hey! Rohan here, I'm a Game Designer sculpting experiences using fun and practical designs. You can catch me learning at `}
          <span className="underline underline-offset-4 cursor-pointer">{`Studio Sirah`}</span>
          {`!`}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
