import { MetriBMI } from "./bmi";

describe('Metric MBI', () => {
  test('should calculate correctly', () => {
    const weightInKgs = 70;
    const heightInCms = 165;
    const metricBMI = new MetriBMI();

    const bmi = metricBMI.calculate({ weight: weightInKgs, height: heightInCms });
    expect(bmi).toBeCloseTo(25.7);
  })
});
