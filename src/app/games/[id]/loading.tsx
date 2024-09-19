const Loading = () => {
  return (
    <section className="flex justify-center items-center flex-col animate-pulse mr-0 md:mr-4 2xl:px-48">
      <div className="py-8 flex flex-col md:flex-row justify-start w-full rounded-br-3xl md:mr-24">
        <div className="relative w-full md:w-[40%] h-[300px] md:h-auto md:ml-16 mb-8 md:mb-0 aspect-video bg-gray-300" />
        <div className="w-full md:w-[60%] px-4 md:px-16">
          <div className="h-6 md:h-8 bg-gray-300 mb-3 w-1/4" />
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="m-2 px-4 py-1.5 rounded-full h-6 md:h-8 w-20 md:w-24 bg-gray-300"
              />
            ))}
          </div>
          <div className="h-32 md:h-40 bg-gray-300 mt-3" />
        </div>
      </div>
      <div className="h-6 md:h-8 bg-gray-300 w-1/3 mt-10 mb-8 md:mb-12 ml-4 md:ml-24" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 max-w-[750px] mx-auto rounded-md w-full">
            <div className="relative w-full aspect-video bg-gray-300" />
            <div className="h-16 md:h-20 bg-gray-300 mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
