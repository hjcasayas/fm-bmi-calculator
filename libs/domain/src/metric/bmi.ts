import { IBMI, IBMICalculateParams } from "../interfaces/bmi.interface";

export class MetricBMI implements IBMI {
  calculate = ({ weight, height }: IBMICalculateParams): number => {
    const weightInKgs = weight;
    const heightInCm = height;

    if (weightInKgs <= 0 || heightInCm <= 0) {
      return 0;
    }

    const bmi = weightInKgs / (heightInCm / 100) ** 2;
    return Math.floor(bmi * 10) / 10;
  };
}
