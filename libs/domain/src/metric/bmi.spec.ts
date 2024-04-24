import { metricBMI } from "./bmi";

describe('Metric MBI', () => {
  test('should calculate bmi correctly', () => {
    const heightInCms = 185;
    const weightInKgs = 80;

    const bmi = metricBMI.calculate({ weight: weightInKgs, height: heightInCms });
    expect(bmi).toBeCloseTo(23.4);
  });

  test('should be zero if one of the values is zero', () => {
    const weightInKgs = 0;
    const heightInCms = 0;

    const bmi = metricBMI.calculate({ weight: weightInKgs, height: heightInCms });
    expect(bmi).toBeCloseTo(0);
  })

  test('should calculate ideal weight correctly', () => {
    const heightInCms = 185;

    const idealWeight = metricBMI.idealWeight({ height: heightInCms });
    expect(idealWeight.idealWeightFrom).toBeCloseTo(63.3);
    expect(idealWeight.idealWeightTo).toBeCloseTo(85.2);
  })

});
