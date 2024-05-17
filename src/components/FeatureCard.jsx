import PropTypes from "prop-types";
import { features } from "./features";

const FeatureCard = ({ featureName }) => {
  const feature = features.find(
    (feature) => feature.name.toLowerCase() === featureName.toLowerCase(),
  );
  return (
    <div
      key={feature.id}
      className={` rounded-md border-t-4 ${feature.style} p-[30px] shadow-lg shadow-gray-300`}
    >
      <h2 className="text-xl font-bold text-ffs-very-dark-blue shadow-black">
        {feature.name}
      </h2>
      <p className="mb-8 mt-2 text-[0.80rem] leading-[1.75] text-ffs-grayish-blue">
        {feature.desc}
      </p>
      <div className="flex justify-end">
        <img src={feature.icon} alt="feature icon" width={60} height={60} />
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  featureName: PropTypes.string,
};

export default FeatureCard;
