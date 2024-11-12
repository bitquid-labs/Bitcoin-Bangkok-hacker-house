export type InsurancePoolType = {
  poolName: string;
  poolId: Number;
  dailyPayout: string;
  depositAmount: string;
  accruedPayout: string;
  apy: number;
  minPeriod: number;
  acceptedToken: string;
  tvl: number;
  tcp: number;
  isActive: boolean;
};

enum Status {
  Active,
  Withdrawn
}


export type Deposits = {
  lp: string;
  amount: number;
  poolId: number;
  dailyPayout: number;
  status: Status;
  daysLeft: number;
  startDate: number;
  expiryDate: number;
  accruedPayout: number;
}