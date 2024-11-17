
const Hero = ({title, discription}) => {
  return (
    <section className="mx-auto bg-amber-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            {/* Welcome to the World of Sprunki Incredibox */}
            {title}
        </h1>
        <p className="text-lg opacity-80 leading-relaxed items-center justify-center">
            {/* Explore the unique universe of Sprunki Incredibox! */}
            {discription}
        </p>
      </div>
    </section>
  );
};

export default Hero;
