import FeatureCard from "./FeatureCard";

const Main = () => {
  return (
    <main className="container mx-auto mb-auto flex flex-1 flex-col items-center justify-center">
      <article className="px-8 pb-7 pt-8">
        <h1>
          <span className="mb-1 block text-center text-2xl font-normal text-ffs-very-dark-blue">
            Reliable, efficient delivery
          </span>
          <span className=" block text-center text-2xl font-bold text-ffs-very-dark-blue">
            Powered by Technology
          </span>
        </h1>
        <p className="my-4 text-center leading-relaxed text-ffs-grayish-blue">
          Our Arificial Intelligence powered tools use millions of project data
          point to ensure that your project is successful
        </p>
      </article>
      <section className="grid gap-6 p-8">
        <FeatureCard featureName="Supervisor" />
        <FeatureCard featureName="Team Builder" />
        <FeatureCard featureName="Karma" />
        <FeatureCard featureName="Calculator" />
      </section>
    </main>
  );
};

export default Main;
