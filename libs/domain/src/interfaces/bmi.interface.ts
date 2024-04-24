export interface IBMICalculateParams {
  weight: number;
  height: number;
}

export interface IBMIIdealWeightParams {
  height: number;
}

export interface IBMIIdealWeightResult {
  idealWeightFrom: number;
  idealWeightTo: number;
}

export interface IBMI {
  calculate: (params: IBMICalculateParams) => number;
  idealWeight: (params: IBMIIdealWeightParams) => IBMIIdealWeightResult;
}
