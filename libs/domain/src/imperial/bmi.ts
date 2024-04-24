import { IBMI, IBMICalculateParams, IBMIIdealWeightParams, IBMIIdealWeightResult } from "../interfaces/bmi.interface";

export class ImperialBMI implements IBMI {
  calculate = ({ weight, height }: IBMICalculateParams): number => {
    const weightLbs = weight;
    const heightIn = height;

    if (weightLbs <= 0 || heightIn <= 0) {
      return 0;
    }

    const bmi = weightLbs / (heightIn ** 2) * 703;
    return Math.floor(bmi * 10) / 10;
  };

  idealWeight = ({ height }: IBMIIdealWeightParams): IBMIIdealWeightResult => {
    const heightIn = height;

    return {
      idealWeightFrom: 0,
      idealWeightTo: 0,
    }
  };
}
