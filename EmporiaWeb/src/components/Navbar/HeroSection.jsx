const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/videos/home-page-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50">
        <div className="text-center text-white mb-12 md:mb-20 lg:mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Take a Step into Engineering!
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Everything you need for coding, robot building and more is here.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-white text-black font-semibold py-3 px-3 lg:py-3 lg:px-4 rounded shadow hover:bg-gray-100 transition-all duration-300">
              Shop for Big Project
            </button>
            <button className="bg-white text-black font-semibold py-3 px-3 lg:py-3 lg:px-4 rounded shadow hover:bg-gray-100 transition-all duration-300">
              Shop for Small Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
