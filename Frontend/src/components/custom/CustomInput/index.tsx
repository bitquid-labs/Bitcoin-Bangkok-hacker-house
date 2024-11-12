import React, {ReactNode} from 'react';

import {matchFloatingPoints} from 'lib/format';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClickLabel?: () => void;
  onDropDownClick?: () => void;
  logo?: ReactNode;
  logoText?: string;
  label?: string;
  labelIcon?: ReactNode;
  labelValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  maxAmount?: number;
};

const CustomInput: React.FC<Props> = props => {
  return (
    <div className="w-full bg-[#232325] p-20 rounded-md flex flex-col gap-8 border border-[#7a7a7b]">
      <div className="flex items-center justify-between gap-8 text-14 text-light-300">
        <span>{props.label}</span>
        <div onClick={props.onClickLabel} className="flex items-center gap-4 cursor-pointer ">
          {props.labelIcon}
          {props.labelValue && (
            <span className="text-light-300">{props.labelValue}</span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-8">
        <input
          value={props.value}
          onChange={e => {
            const inputValue = e.target.value;
            if (matchFloatingPoints(inputValue)) {
              props.onChange(inputValue);
            }
          }}
          placeholder={props.placeholder}
          className="m-input"
          disabled={props.isDisabled}
        ></input>
        <div className="flex-none flex items-center bg-dark-600 rounded-full gap-4 p-4 pr-8 cursor-pointer" onClick={props.onDropDownClick}>
          {props.logo}
          <span className="text-light-white">{props.logoText}</span>
        </div>
      </div>
      {props.maxAmount && (<div className='flex items-center justify-end'>
        <span className="text-12">MAX: {props.maxAmount}</span>
      </div>)}
    </div>
  );
};

export default CustomInput;
