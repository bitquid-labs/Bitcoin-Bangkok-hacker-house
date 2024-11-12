import { WalletButton } from "../WalletButton";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="flex justify-end items-center">
        <WalletButton />
      </div>
    </div>
  );
};

export default Header;
