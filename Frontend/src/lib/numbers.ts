export const formatNumberWithSeparator = (value?: number, decimals?: number, cutDecimals: boolean = true) => {
    if (!value) {
      return '0';
    }
  
    if (value > 10 && !decimals) {
      decimals = 0;
    }
  
    if (decimals === undefined) {
      decimals = 2;
    }
  
    return value.toLocaleString('en-us', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: cutDecimals ? 0 : decimals,
    });
  };