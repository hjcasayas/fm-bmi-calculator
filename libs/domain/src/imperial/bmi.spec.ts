import { ImperialBMI } from "./bmi";

describe('Imperial BMI', () => {
  test('should calculate correctly', () => {
    const weightLbs = 154.324;
    const heightIn = 64.9606;
    const imperialBMI = new ImperialBMI();

    const bmi = imperialBMI.calculate({ weight: weightLbs, height: heightIn });
    expect(bmi).toBeCloseTo(25.7);
  })

  test('should be zero if one of the values is zero', () => {
    const weightLbs = 0;
    const heightIn = 0;
    const imperialBMI = new ImperialBMI();

    const bmi = imperialBMI.calculate({ weight: weightLbs, height: heightIn });
    expect(bmi).toBeCloseTo(0);
  })

});
