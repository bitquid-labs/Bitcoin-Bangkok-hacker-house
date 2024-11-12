import CustomInput from "components/custom/CustomInput";
import { useEffect, useMemo, useState } from "react";
import IconBTC from "assets/global/IconBTC";
import { formatNumberWithSeparator } from "lib/numbers";
import Button from "components/common/Button";
import { config } from "lib/config";
import { writeContract } from "@wagmi/core";
import { IPoolContract } from "constants/contracts";
import { formatEther, parseEther, parseUnits } from "viem";
import { useAllInsurancePools } from "hooks/contracts/useAllInsurancePools";
import { useUserPoolDeposit } from "hooks/contracts/useUserPoolDeposit";
import { useAccount } from "wagmi";
import { InsurancePoolType } from "types/main";
import { useBalance } from "wagmi";
import CoverClientConfig from "bqlabsjs";
import { useBQBTCBalance } from "hooks/contracts/useBQBTCBalance";
import { toast } from "react-toastify";
import CustomCheckBox from "components/custom/CustomCheckBox";

const coverId = 3;

const StakeView: React.FC = () => {
  // coverClient.displayConfig();

  const { address, chain } = useAccount();
  const coverClient = new CoverClientConfig("staking mock", coverId);
  coverClient.displayConfig();
  const [isInsure, setInsure] = useState<boolean>(false);
  const [coverFee, setCoverFee] = useState<number>(0);

  const coverContractAddress = useMemo(() => {
    if (!coverClient || !chain?.id) return "";

    return coverClient.getCoverAddress(chain?.id);
  }, [chain?.id]);

  console.log("cover address:", coverContractAddress);

  const [coverInfo, setCoverInfo] = useState<any>(undefined);

  const bqBTCBalance = useBQBTCBalance(address as string, chain?.id || 0);
  const [stakeAmountStr, setStakeAmountStr] = useState<string>("");
  const [stakePeriodStr, setstakePeriodStr] = useState<string>("");
  const handleStakeAmountChange = (value: string) => {
    setStakeAmountStr(value);
  };

  useEffect(() => {
    if (!coverContractAddress || !coverClient) return;
    const getFee = async () => {
      const coverValue = parseFloat(stakeAmountStr || "0");
      const coverPeriod = parseFloat(stakePeriodStr || "28");

      try {
        const calc = await coverClient.calculateUserCoverFee(
          coverValue,
          coverPeriod,
          coverContractAddress
        );
        setCoverFee(calc);
      } catch (e) {
        console.log("error: coverfee");
        return;
      }
    };

    getFee();
    // if (!coverClient || (stakeAmountStr ==='') || (stakePeriodStr === '') || !coverContractAddress) return 0;
  }, [coverClient, stakeAmountStr, stakePeriodStr, coverContractAddress])

  const [inprogress, setInprogress] = useState<boolean>(false);

  const handleStakePeriodChange = (value: string) => {
    setstakePeriodStr(value);
  };

  const insurancePools = useAllInsurancePools(chain?.id || 0);
  const [showPoolsModal, setShowPoolsModal] = useState<boolean>(false);
  const [currentPool, setCurrentPool] = useState<InsurancePoolType | undefined>(
    undefined
  );

  const deposit = useUserPoolDeposit(1, address as `0x${string}`);

  const stakeToPool = async () => {
    setInprogress(true);
    if (!currentPool || stakeAmountStr === "") return;
    const params = [currentPool.poolId];

    try {
      await writeContract(config, {
        abi: IPoolContract.abi,
        address: IPoolContract.address as `0x${string}`,
        functionName: "deposit",
        args: params,
        value: parseUnits(stakeAmountStr, 18),
      });
    } catch (e: any) {
      console.log("error:", e);
      toast.warn(e?.message || "Error While Transaction");
    }
  };

  const handleStake = async () => {
    if (inprogress || !!error) return;

    await stakeToPool();

    if (isInsure) {
      await insureTransaction();
    }

    setInprogress(false);
  };

  const error = useMemo(() => {
    if (stakeAmountStr === "") return "Input Stake Amount";
    if (!currentPool) return "Pool Not Selected";

    if (isInsure && stakePeriodStr === "") return "Input Period";

    return "";
  }, [stakeAmountStr, currentPool, isInsure, stakePeriodStr]);

  const insureError = useMemo(() => {
    if (stakeAmountStr === "") return "No Stake Amount";
    if (stakePeriodStr === "") return "Input Period";

    return "";
  }, [stakeAmountStr, stakePeriodStr]);

  const insureTransaction = async () => {
    const stakeAmount = parseFloat(stakeAmountStr);
    const stakePeriod = parseFloat(stakePeriodStr);

    if (stakePeriod < 28)
      setTimeout(() => {
        toast.warn("Insure Period should be greater than 28");
        return;
      }, 1000);

    if (stakeAmount > coverMaxAmount)
      setTimeout(() => {
        toast.warn("Insure Amount should be less than coverMaxAmount");
        return;
      }, 1000);

    try {
      // const coverInfo = await coverClient.coverInfo();
      // console.log('cover info:', coverInfo);
      // return;
      // await coverClient.userPurchaseCover(0.02, 30);
      await coverClient.userPurchaseCover(
        stakeAmount,
        stakePeriod,
        coverContractAddress
      );
    } catch (e: any) {
      toast.warn(e?.message || "Error Insuraing Transaction");
      return;
    }
  };

  useEffect(() => {
    if (!insurancePools.length) return;
    setCurrentPool(insurancePools[0]);
  }, [insurancePools]);

  useEffect(() => {
    if (!coverClient || coverContractAddress === "") return;
    const getCoverInfo = async () => {
      try {
        const coverInfo = await coverClient.coverInfo(coverContractAddress);
        setCoverInfo(coverInfo);
        console.log("cover info:", coverInfo);
      } catch (e) {
        console.log("error:", e);
      }
    };
    getCoverInfo();
  }, [coverClient, coverContractAddress]);

  const coverMaxAmount = useMemo(() => {
    if (!coverInfo) return 0;
    const bgMaxAmount = BigInt(coverInfo?.maxAmount);
    return parseFloat(formatEther(bgMaxAmount));
  }, [coverInfo]);

  return (
    <div className="mt-200 px-400">
      <div className="bg-[#0b0b0d] py-40 px-20 border border-[#7a7a7b] rounded-10 max-w-500 flex flex-col gap-10">
        <div className="relative">
          <CustomInput
            placeholder="0.0"
            value={stakeAmountStr}
            onChange={handleStakeAmountChange}
            onClickLabel={() => {}}
            logo={<IconBTC className="w-20 h-20" />}
            logoText={currentPool?.poolName}
            labelIcon={<span>Balance:</span>}
            label="Stake"
            labelValue={bqBTCBalance}
          />
          {showPoolsModal && (
            <ul className="flex flex-col absolute top-40 right-0 bg-[#000] py-15 rounded-10">
              {insurancePools.map((pool, key) => (
                <li
                  className="py-5 px-10 hover:bg-[#242424] cursor-pointer"
                  onClick={() => {
                    setCurrentPool(pool);
                    setShowPoolsModal(false);
                  }}
                >
                  {pool.poolName}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* <CustomInput
          placeholder="0.0"
          value={""}
          onChange={handleStakeAmountChange}
          onClickLabel={() => {}}
          logo={<IconBTC className="w-20 h-20" />}
          logoText={"stBTC"}
          labelIcon={<span>Balance:</span>}
          label="Receive"
          labelValue={""}
        /> */}
        <div className="flex flex-col gap-10">
          <CustomCheckBox
            label="checkbox"
            checked={isInsure}
            onChange={(value) => {
              setInsure(value);
            }}
            fee={coverFee}
            maxValue={coverMaxAmount}
          />
          {isInsure ? (
            <CustomInput
              placeholder="0"
              value={stakePeriodStr}
              onChange={handleStakePeriodChange}
              onClickLabel={() => {}}
              label="Period"
            />
          ) : (
            <></>
          )}
          <div
            className={`p-20 border border-[#00e8b9] flex justify-center items-center ${
              inprogress || error
                ? "bg-[#023a2f] cursor-not-allowed"
                : "bg-[#029073] cursor-pointer"
            }`}
            onClick={handleStake}
          >
            {error ? error : inprogress ? "Processing..." : "Stake"}
            {inprogress && (
              <span className="relative flex h-30 w-30 ml-15">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e8b9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-30 w-30 bg-[#023a2f]"></span>
              </span>
            )}
            {/* <span className="relative flex h-30 w-30 ml-15">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e8b9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-30 w-30 bg-[#00e8b9]"></span>
            </span> */}
          </div>
          {/* <Button
            styles="confirm-sell-nft-button"
            onClick={handleStake}
            disabled={!!error}
          >
            {error || "Stake"}
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default StakeView;
