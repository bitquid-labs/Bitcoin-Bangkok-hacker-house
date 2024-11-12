import React, { ReactNode } from "react";

export interface IButtonProps {
  onClick?: () => void;
  styles?: string;
  holderClass?: string;
  disabled?: boolean;
  children: ReactNode;
  isLoading?: boolean;
  dataTestid?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <div className={`${props.holderClass}`}>
      <button
        disabled={props.disabled || props.isLoading || false}
        className={`action-button h-45 w-full bg-[#171719] shadow-button flex justify-center items-center text-[#717a8c] no-underline font-semibold text-18 rounded-8 border-none outline-none cursor-pointer ${props.styles}`}
        onClick={props.onClick}
        data-testid={props.dataTestid}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
