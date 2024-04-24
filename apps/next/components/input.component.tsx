export const InputComponent = ({ value, label = '', setValue, unit }: { value: string; label: string; setValue: (value: string) => void, unit: string }) => {
  return (
    <div className="form-control mb-4">
      <span className="inline-block mb-2 text-sm text-[#5E6E85] capitalize">{label.toLowerCase()}</span>
      <label className="input input-bordered flex items-center gap-2 font-semibold text-2xl">
        <input onChange={(event) => setValue(event.currentTarget.value)} value={value} type="text" className="grow font-semibold text-gunmetal overflow-hidden" />
        <span className="text-blue inline-block">{unit.toLowerCase()}</span>
      </label>
    </div>
  );
};
