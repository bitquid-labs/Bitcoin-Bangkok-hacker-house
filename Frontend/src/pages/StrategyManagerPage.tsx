const StrategyManagerPage: React.FC = () => {
  return (
      <div className="flex flex-col m-16 gap-28 text-white">
          <div className="card-style rounded-md flex flex-col" >
              <div className="flex gap-10 items-center mx-auto" >
                  <h1 className="text-4xl" >BQ Labs Pools</h1> 
              </div> 
          </div> 
          <div className="card-style rounded-md p-36" >
              <div className="flex justify-between items-center" >
                  <h1 className="text-3xl font-bold" >Selected Pool Name</h1> 
                  <div className="flex gap-7" >
                      <div>APY: 3-5%</div> 
                      <div className="flex gap-3" >
                          <p>BOB Chain</p> 
                          <img src={"/bob.svg"} alt="bob"/> 
                      </div> 
                  </div> 
              </div> 
              <div className="grid grid-cols-2 gap-10 mt-5">
                  <div className="p-28 sub-card-style rounded-md flex flex-col gap-14 bg-gray-700" >
                      <div className="flex justify-around w-1/2 rounded-md border-[0.5px] border-[#9E9E9E] py-6 px-2 bg-black" >
                          <button className="stake-btn w-1/2">Stake</button> 
                          <button className="w-1/2" >Unstake</button> 
                      </div> 
                      <div className="flex justify-between" >
                          <p>Balance: 22.52</p> 
                          <div className="flex gap-10">
                              <p>25%</p> 
                              <p>50%</p> 
                              <p>Max</p> 
                          </div> 
                      </div> 

                      <div className="flex justify-between" >
                          <p className="text-2xl" >3.197</p> 
                          <div className="flex items-center" >
                              <p>BNB</p> 
                              <img src={"/binomo.svg"} alt="binomo"/> 
                              <img src={"/bob.svg"} alt="bob"/> 
                          </div> 
                      </div> 
                      <hr className="w-1/4" />
                      <div className="flex justify-between" >
                          <p>$639.58</p> 
                          <p>Transaction Fee</p> 
                      </div> 
                      <div className="flex gap-5" >
                          <p>LIT Token Assigned: 15.6</p> 
                          <img src={"/binomo.svg"} alt="binomo"/> 
                      </div> 
                      <button className="green-btn py-4 rounded-md" >Deposit</button> 
                  </div> 

                  <div className="p-28 sub-card-style rounded-md bg-gray-600 flex flex-col gap-14">
                      <div className="flex gap-5" >
                          <p>Risk Type:</p> 
                          <p>Low</p> 
                      </div>  
                      <div className="flex justify-between items-center" >
                          <div className="flex gap-7" >
                              <p>50</p> 
                              <p>days</p> 
                          </div> 
                          <div>
                              slider
                          </div> 
                      </div> 
                      <p>Rewards (by $0)</p> 
                      <div className="flex justify-between" >
                          <div className="flex flex-col" >
                              <p className="font-semibold" >Selected Strategy</p> 
                              <p>Vesting</p> 
                          </div> 

                          <div className="flex flex-col">
                              <p className="font-semibold">Per Week</p> 
                              <p>xx%</p> 
                          </div> 

                          <div className="flex flex-col">
                              <p className="font-semibold">Per Month</p> 
                              <p>xx%</p> 
                          </div> 
                      </div> 
                  </div> 
              </div> 
          </div> 
      </div>
  )
}
export default StrategyManagerPage;
