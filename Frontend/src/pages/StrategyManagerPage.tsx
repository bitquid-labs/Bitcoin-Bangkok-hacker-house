import React from "react";
import PoolCard from "../views/StrategyManager/PoolCard"
import SelectPoolNameCard from "../views/StrategyManager/SelectPoolNameCard"
const StrategyManagerPage: React.FC = () => {

  return (
      <div className="flex flex-col my-[5rem] mx-[10rem] gap-28 text-white">
          <PoolCard/>
          <SelectPoolNameCard/>
      </div>
  )
}
export default StrategyManagerPage;
