const Loading = () => {
  return (
    <section className="flex justify-center items-center flex-col animate-pulse px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
      <div className="py-4 sm:py-6 md:py-8 flex flex-col md:flex-row justify-start w-full rounded-br-3xl">
        <div className="relative w-full md:w-[40%] h-[200px] sm:h-[250px] md:h-[300px] mb-4 sm:mb-6 md:mb-0 aspect-video bg-gray-300" />
        <div className="w-full md:w-[60%] px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="h-4 sm:h-5 md:h-6 lg:h-8 bg-gray-300 mb-2 sm:mb-3 w-1/4" />
          <div className="flex flex-wrap justify-start h-fit w-full py-2 sm:py-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="m-1 sm:m-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full h-4 sm:h-5 md:h-6 lg:h-8 w-16 sm:w-20 md:w-24 bg-gray-300"
              />
            ))}
          </div>
          <div className="h-24 sm:h-28 md:h-32 lg:h-40 bg-gray-300 mt-2 sm:mt-3" />
        </div>
      </div>
      <div className="h-4 sm:h-5 md:h-6 lg:h-8 bg-gray-300 w-1/3 mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6 md:mb-8 lg:mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full justify-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="p-2 sm:p-3 md:p-4 max-w-[750px] mx-auto rounded-md w-full"
          >
            <div className="relative w-full aspect-video bg-gray-300" />
            <div className="h-12 sm:h-14 md:h-16 lg:h-20 bg-gray-300 mt-2 sm:mt-3 md:mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
