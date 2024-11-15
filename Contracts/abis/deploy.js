const { ethers } = require("hardhat");

const OWNER = "0xDA01D79Ca36b493C7906F3C032D2365Fb3470aEC";

async function main() {
  console.log("Starting deployment script...");
  try {
    const Token = await ethers.getContractFactory("BQToken");
    const bqtoken = await Token.deploy(
      "BitQuid",
      "BQ",
      18,
      200000000000000,
      OWNER
    );
    const bqtokenAddress = await bqtoken.getAddress();

    console.log(`Token Address: ${bqtokenAddress}`);

    const bqBTCToken = await ethers.getContractFactory("bqBTC");
    const bqBTC = await bqBTCToken.deploy(
      "BQ BTC",
      "bqBTC",
      18,
      200000000000000,
      OWNER
    );
    const bqBTCAddress = await bqBTC.getAddress();

    console.log(`BQ BTC Address: ${bqBTCAddress}`);

    const InsurancePool = await ethers.getContractFactory("InsurancePool");
    const insurancePool = await InsurancePool.deploy(
      OWNER,
      bqtokenAddress,
      bqBTCAddress
    );
    const poolAddress = await insurancePool.getAddress();

    console.log(`Pool Address: ${poolAddress}`);

    const Governance = await ethers.getContractFactory("Governance");
    const governance = await Governance.deploy(
      bqtokenAddress,
      poolAddress,
      5,
      OWNER
    );
    const govAddress = await governance.getAddress();

    console.log(`Gov Address: ${govAddress}`);

    const InsuraceCover = await ethers.getContractFactory("InsuranceCover");
    const coverContract = await InsuraceCover.deploy(
      poolAddress,
      OWNER,
      govAddress,
      bqBTCAddress
    );

    const coverAddress = await coverContract.getAddress();
    console.log(`Cover Address: ${coverAddress}`);

    console.log("Setting contracts...");

    await governance.setCoverContract(coverAddress);
    await insurancePool.setCover(coverAddress);
    await insurancePool.setGovernance(govAddress);
    await bqBTC.setPoolandCover(poolAddress, coverAddress);

    console.log("All contracts set");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
