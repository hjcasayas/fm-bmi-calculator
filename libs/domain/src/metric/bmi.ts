import { IBMI, IBMICalculateParams } from "../interfaces/bmi.interface";

export class MetriBMI implements IBMI {
  calculate = ({ weight, height }: IBMICalculateParams): number => {
    const weightInKgs = weight;
    const heightInCm = height;

    const bmi = weightInKgs / (heightInCm / 100) ** 2;
    return Math.floor(bmi * 10) / 10;
  };
}
