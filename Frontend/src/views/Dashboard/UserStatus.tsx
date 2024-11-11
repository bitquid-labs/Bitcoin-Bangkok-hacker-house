import React from "react";
import WalletStatus from "components/WalletStatus";
import IconMetamask from "assets/icons/IconMetamask";


const UserStatus: React.FC = () => {
  return (
    <div className="w-full flex py-30 justify-between border border-[#00ECBC] rounded-12">
      <WalletStatus title="Your Wallet:" iconComponent={IconMetamask} balance="0EX030...023" />
      <WalletStatus title="Your Balance:" iconComponent={IconMetamask} balance="10,000.2 $" />
      <WalletStatus title="Total Staked:" iconComponent={IconMetamask} balance="30,000.23 $" />
      <WalletStatus title="Total Rewards:" iconComponent={IconMetamask} balance="4,323.49 $" />
    </div>
  )
}

export default UserStatus;