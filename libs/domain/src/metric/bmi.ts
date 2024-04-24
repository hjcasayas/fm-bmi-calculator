import { lowerIdealBMI, upperIdealBMI } from "../constants/ideal-bmi";
import { IBMI, IBMICalculateParams, IBMIIdealWeightParams, IBMIIdealWeightResult } from "../interfaces/bmi.interface";

const getIdealWeight = ({ heightInCm, idealBMI }: { heightInCm: number; idealBMI: number }) => {
  return idealBMI * (heightInCm / 100) ** 2
};

const regulateBMIValue = (value: number) => Math.ceil(value * 10) / 10;
const regulateIdealWeightValue = (value: number) => Math.floor(value * 10) / 10;

export class MetricBMI implements IBMI {
  calculate = ({ weight, height }: IBMICalculateParams): number => {
    const weightInKgs = weight;
    const heightInCm = height;

    if (weightInKgs <= 0 || heightInCm <= 0) {
      return 0;
    }

    const bmi = weightInKgs / (heightInCm / 100) ** 2;
    return regulateBMIValue(bmi);
  };

  idealWeight = ({ height }: IBMIIdealWeightParams): IBMIIdealWeightResult => {
    const heightInCm = height;
    const idealWeightFrom = getIdealWeight({ heightInCm, idealBMI: lowerIdealBMI });
    const idealWeightTo = getIdealWeight({ heightInCm, idealBMI: upperIdealBMI });

    return { idealWeightFrom: regulateIdealWeightValue(idealWeightFrom), idealWeightTo: regulateIdealWeightValue(idealWeightTo) };
  };
}

export const metricBMI = new MetricBMI();
