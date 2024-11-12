import StakePage from "../pages/StakePage";

enum AppRoutes {
  Stake = "/stake",
}

export const appRoutes = [
  {
    key: "Stake",
    path: AppRoutes.Stake,
    element: StakePage,
  },
];
