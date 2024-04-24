import { metricBMI } from "@bmi-calculator/domain";

export const ResultCardComponent = ({ weight, height, unit
}: { weight: number; height: number; unit: string }) => {
  const bmi = metricBMI.calculate({ height, weight });
  const { idealWeightFrom, idealWeightTo } = metricBMI.idealWeight({ height });

  return (
    <div className="card bg-blue">
      <div className="card-body text-white">
        <p className="font-semibold text-base leading-[1.1] mb-2">Your BMI is...</p>
        <p className="font-semibold text-5xl mb-6 text-ellipsis overflow-hidden">{bmi}</p>
        <p
          className="leading-6 text-base">
          Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-semibold">{`${idealWeightFrom}${unit}`}</span> - <span className="font-semibold">{`${idealWeightTo}${unit}`}</span>.
        </p>
      </div>
    </div>
  );
};
