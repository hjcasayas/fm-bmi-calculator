export interface IBMICalculateParams {
  weight: number; height: number;
}

export interface IBMI {
  calculate: (params: IBMICalculateParams) => number;
}
