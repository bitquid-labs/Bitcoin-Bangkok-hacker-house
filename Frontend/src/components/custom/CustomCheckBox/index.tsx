import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  fee?: number;
  maxValue?: number;
}

const CustomCheckBox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  fee,
  maxValue
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div
      className="flex items-center p-20 border border-gray-200 rounded dark:border-gray-700 cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <input
        id="bordered-checkbox-1"
        type="checkbox"
        checked={isChecked}
        name="bordered-checkbox"
        className="w-20 h-20 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex flex-col justify-center items-start w-full pl-15">
        <div className="text-19 font-bold">Insure This Transaction</div>
        <div className="flex justify-between items-center w-full">
          <span>with just {fee?.toFixed(4)} BqBTC Extra</span>
          <span>Max: {maxValue}</span>
        </div>
      </div>
      {/* <label
        htmlFor="bordered-checkbox-1"
        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Default radio
      </label> */}
    </div>
  );
};

export default CustomCheckBox;
