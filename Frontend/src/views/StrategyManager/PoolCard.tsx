import React from "react";
const PoolCard: React.FC = () => {
    return (
          <div className="card-style rounded-md flex flex-col" >
              <div className="flex gap-10 items-center mx-auto mt-10" >
                  <h1 className="text-4xl" >BQ Labs Pools</h1> 
              </div> 
              <div>
                  <div className="flex items-center justify-around mt-36" >
                      <p></p> 
                      <p>Rating</p> 
                      <p>APY</p> 
                      <p>Min Tenure</p> 
                      <div>
                      </div> 
                  </div> 
                  {[0,1,2].map(()=>{
                      return(

                      <div className="flex gap-[5.5rem] p-36" >
                          <div className=" w-5/6 mx-auto " >
                              <div className=" bg-[#1F1F1F] py-16 flex items-center justify-between px-[6rem]" >
                                  <p>Pool #1</p> 
                                  <p>AAA</p> 
                                  <p>3-5%</p> 
                                  <p>2 months</p> 
                              </div> 
                              <div className="px-10 text-center" >
                                  <div className="bg-[#303030] py-4 flex items-center justify-center gap-6" >
                                      <p>More Details</p>  
                                      <img src={"/downarrow.svg"} alt={"downarrow"}/>     
                                  </div> 
                              </div> 
                          </div> 
                          <button className="self-start w-1/6 py-6 green-btn px-10 rounded-md" >Invest</button> 
                      </div> 

                      )
                  })}
              </div> 
          </div> 
    )
}
export default PoolCard
