import React from 'react';

import btcImageSmall from 'images/icon_btc.svg';
import btcImageLarge from 'images/ic_usdc_40.svg';

type IconUSDCProps = {
  className?: string;
};

const IconBTC: React.FC<IconUSDCProps> = ({className}) => {
  return <img className={className || ''} src={btcImageSmall} width={20} height={20} alt="btc" />;
};

// export const IconUSDCLarge: React.FC<IconUSDCProps> = ({className}) => {
//   return <img className={className || ''} src={usdcImageLarge} width={20} height={20} alt="usdc" />;
// };

export default IconBTC;
