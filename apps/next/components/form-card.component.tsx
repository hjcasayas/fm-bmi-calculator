'use client'
import { MetricBMI } from '@bmi-calculator/domain';

import { SystemEnum } from "@/enums/system.enum";
import { useEffect, useState } from "react";
import { SystemRadioComponent } from "./system-radio.component";
import { InputComponent } from "./input.component";
import { ResultCardComponent } from "./result-card.component";

export const FormCardComponent = () => {
  const [system, setSystem] = useState(SystemEnum.METRIC);
  const [weightInKg, setWeightInKg] = useState('');
  const [heightInCm, setHeightInCm] = useState('');

  const handleWeightInKg = (value: string) => {
    if (!isNaN(Number(value))) {
      setWeightInKg(value)
    }
  };

  const handleHeightInCm = (value: string) => {
    if (!isNaN(Number(value))) {
      setHeightInCm(value)
    }
  };

  return <div data-theme='light' className="card bg-white w-full drop-shadow-2xl">
    <div className="card-body">
      <h2 className="font-semibold text-2xl tracking-tighter text-gunmetal mb-6">Enter your details below</h2>
      <div className="flex justify-between mb-6">
        <SystemRadioComponent system={SystemEnum.METRIC} setSystem={setSystem} currentSystem={system} />
        <SystemRadioComponent system={SystemEnum.IMPERIAL} setSystem={setSystem} currentSystem={system} />
      </div>
      <div className="mb-2">
        <InputComponent label="Height" value={heightInCm} setValue={handleHeightInCm} unit="cm" />
        <InputComponent label="Weight" value={weightInKg} setValue={handleWeightInKg} unit="kg" />
      </div>
      <ResultCardComponent weight={isNaN(Number(weightInKg)) ? 0 : Number(weightInKg)} height={isNaN(Number(heightInCm)) ? 0 : Number(heightInCm)} unit="kg" />
    </div>
  </div >;
};
