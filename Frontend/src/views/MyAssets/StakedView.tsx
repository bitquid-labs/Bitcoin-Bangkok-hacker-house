import React from "react";
import IconWallet from "assets/icons/IconWallet";

const StakedView: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[45%] border border-[#6B7280] rounded-20 bg-[#6B72801A] p-50">
        <div className="w-full flex items-center justify-start gap-5">
          <IconWallet />
          <span className="text-14 text-[#FFF] font-[500]">Total Value Staked</span>
        </div>
        <div className="mt-12 text-32 font-[500] text-[#00ECBC99]">$21.226,00SD</div>
        <div className="">
          
        </div>
      </div>
      <div className="w-[45%]"></div>
    </div>
  )
}

export default StakedView;