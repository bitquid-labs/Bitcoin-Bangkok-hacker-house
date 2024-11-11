import { COVER_FEE_RATE } from "@/constant/config";
import { formatUnits, parseUnits } from "viem";
import { RiskType, riskTypeNames } from "@/types/main";
import { TERMSANDCONDITIONS } from "@/constant/tooltip";

export const calculateCoverFee = (coverAmount: number, annualRate: number, coverPeriod: number) => {
  return coverAmount * annualRate * coverPeriod / (365 * 100);
}


export function numberToBN(value: number | string, unit: number = 18) {
  if (typeof value === 'string' && Number.isNaN(parseFloat(value))) return BigInt('0');
  return value ? parseUnits(value.toString(), unit) : BigInt('0');
}

export function bnToNumber(value: bigint | undefined, decimals: number = 18) {
  if (!value) return 0;
  return parseFloat(formatUnits(value, decimals));
}


export function UNIXToDate(timestamp: bigint) {
  return new Date(Number(timestamp) * 1000);
}


export function formatDate(date: Date): string {
  // Custom formatting: MM/DD/YYYY
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export function getRiskTypeName(value: number | undefined): string | undefined {
  if (value === undefined) return '';
  return riskTypeNames[value] as string | undefined;
}

export function termsByRiskType(riskType: RiskType | undefined) {
  if (riskType === undefined) return
  [
    {
      title: "",
      content: [
        "",
        "",
      ]
    }
  ]


  return TERMSANDCONDITIONS[riskType];
}