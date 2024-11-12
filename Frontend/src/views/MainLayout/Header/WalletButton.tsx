import React from 'react';
// import { useAccount, useDisconnect, useSwitchChain } from 'wagmi';
// import {
//   ConnectButton,
//   useAccountModal,
//   useChainModal,
//   useConnectModal,
// } from '@rainbow-me/rainbowkit';
// import { chains } from 'lib/wagmi';

// export const ConnectWalletButton = (): JSX.Element => {
//   const { openChainModal } = useChainModal();
//   const { openAccountModal } = useAccountModal();
//   const { openConnectModal } = useConnectModal();

//   const { chain, address, isConnected } = useAccount();
//   const { disconnectAsync } = useDisconnect();

//   const handleDisconnect = async () => {
//     try {
//       await disconnectAsync();
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.error('Error disconnecting:', error);
//     }
//   };

//   // Function to truncate Ethereum address
//   const truncateAddress = (address: string) => {
//     return address.slice(0, 6) + '...' + address.slice(-4);
//   };

//   return (
//     <div>
//       {isConnected && address ? (
//         <div className='flex items-center gap-2'>
//           <button
//             className='bg-primary-200 flex h-[46px] w-[46px] items-center justify-center rounded-md p-1'
//             onClick={openChainModal}
//           >
//             <img
//               src={chains.find((c) => c.id === chain?.id)?.logo ?? ''}
//               alt='chain'
//               width={24}
//               height={24}
//             />
//           </button>
//           <div className="px-20 py-14 rounded-12 bg-[#F6F6F6] text-[#000]" onClick={openAccountModal}>
//             {truncateAddress(address)}
//           </div>
//           {/* <ConnectButton /> */}
//         </div>
//       ) : (
//         <div
//           className="px-20 py-14 rounded-12 bg-[#F6F6F6] text-[#000]"
//           // leftIcon={<PlusIcon />}
//           onClick={openConnectModal}
//         >
//           Connect Wallet
//         </div>
//       )}
//     </div>
//   );
// };

const WalletButton: React.FC = () => {
  return (
    <div className="px-20 py-14 rounded-12 bg-[#F6F6F6] text-[#000]">
      0ex030........023
    </div>
  )
}

export default WalletButton;