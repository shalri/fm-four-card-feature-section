import FeatureCard from "./FeatureCard";

const Main = () => {
  return (
    // <main className="container mx-auto mb-auto flex flex-1 flex-col items-center justify-center">
    <main className="mx-auto mb-auto flex flex-1 flex-col items-center justify-center sm:max-w-full">
      <article className="px-8 pb-7 pt-20 sm:px-0 sm:pt-0">
        <h1>
          <span className="mb-1 block text-center text-2xl font-normal text-ffs-very-dark-blue sm:mb-3 sm:text-4xl">
            Reliable, efficient delivery
          </span>
          <span className=" block text-center text-2xl font-bold text-ffs-very-dark-blue sm:text-4xl">
            Powered by Technology
          </span>
        </h1>
        <p className="my-4 text-center leading-relaxed text-ffs-grayish-blue sm:my-5 sm:max-w-[508px] sm:text-[1rem]">
          Our Arificial Intelligence powered tools use millions of project data
          point to ensure that your project is successful
        </p>
      </article>
      <section className="flex flex-col gap-6 px-8 py-8 sm:grid  sm:max-w-[1170px] sm:grid-cols-3 sm:items-center sm:gap-8 sm:py-4">
        <FeatureCard featureName="Supervisor" />
        <div className="flex flex-col gap-6 sm:gap-8">
          <FeatureCard featureName="Team Builder" />
          <FeatureCard featureName="Karma" />
        </div>
        <FeatureCard featureName="Calculator" />
      </section>
    </main>
  );
};

export default Main;
