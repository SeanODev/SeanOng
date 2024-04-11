

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Hey there, I'm
        <span className="bg-gradient-to-r from-red-800 to-yellow-400 text-transparent bg-clip-text">
          {" "}
          Sean Joshua Ong
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Welcome to my portfolio. This site is still under development, but stay tuned for updates!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://odysean.com/"
          className="bg-gradient-to-r from-red-800 to-yellow-400 py-3 px-4 mx-3 rounded-md"
        >
          Explore Our Website Services
        </a>
      </div>
    </div>
  );
};

export default HeroSection;