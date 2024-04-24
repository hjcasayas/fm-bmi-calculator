import { MetricBMI } from "./bmi";

describe('Metric MBI', () => {
  test('should calculate correctly', () => {
    const weightInKgs = 70;
    const heightInCms = 165;
    const metricBMI = new MetricBMI();

    const bmi = metricBMI.calculate({ weight: weightInKgs, height: heightInCms });
    expect(bmi).toBeCloseTo(25.7);
  })

  test('should be zero if one of the values is zero', () => {
    const weightInKgs = 0;
    const heightInCms = 0;
    const metricBMI = new MetricBMI();

    const bmi = metricBMI.calculate({ weight: weightInKgs, height: heightInCms });
    expect(bmi).toBeCloseTo(0);
  })
});
