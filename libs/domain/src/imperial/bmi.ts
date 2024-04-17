import { IBMI, IBMICalculateParams } from "../interfaces/bmi.interface";

export class ImperialBMI implements IBMI {
  calculate = ({ weight, height }: IBMICalculateParams): number => {
    const weightLbs = weight;
    const heightIn = height;

    const bmi = weightLbs / (heightIn ** 2) * 703;
    return Math.floor(bmi * 10) / 10;
  };
}
