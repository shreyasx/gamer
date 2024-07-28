const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-4/5 h-80 border-b-4 flex flex-row bg-navbar-bg">
      <div className="flex justify-center items-center h-full w-full">
        <h1 className="text-lg text-center w-[90%] max-w-[1200px]">
          {`Hey, I'm a geeky`}
          <span className="text-blue">{` Game Designer `}</span>
          {`creating dazzling experiences by baking in fun and practical. You can catch me learning at `}
          <span className="text-blue underline underline-offset-4 cursor-pointer">{`Studio Sirah`}</span>
          {`!`}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
