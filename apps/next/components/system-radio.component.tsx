import { SystemEnum } from "@/enums/system.enum";

export const SystemRadioComponent = (props: { system: SystemEnum; currentSystem: SystemEnum; setSystem: (system: SystemEnum) => void }) => {
  const { system, currentSystem, setSystem } = props;
  return (<label className="flex" >
    <input type="radio" className="radio inline-block mr-[18px] checked:bg-blue" checked={system === currentSystem
    } onChange={() => setSystem(system)} />
    <span className="text-base leading-[1.1] text-gunmetal font-semibold capitalize">{system.toLowerCase()}</span>
  </label>);
};

