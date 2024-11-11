import React from 'react';

import { List } from '@/screen/purchase/components/list';
import { useAccount } from 'wagmi';
import { useAllUserCovers } from '@/hooks/contracts/useAllUserCovers';
import { IUserCover } from '@/types/main';
import { MyCover } from './myCover';
import { useRouter } from 'next/navigation';

import LeftArrowIcon from '~/svg/left-arrow.svg';
import { NoCoverScreen } from "@/screen/purchase/components/noCover";

export const MyPurchaseScreen = (): JSX.Element => {
  const router = useRouter();
  const { address } = useAccount();
  const userCovers = useAllUserCovers(address as string);

  if (userCovers.length === 0) {
    return <NoCoverScreen />;
  }

  return (
    <section className='flex h-full flex-auto flex-col'>
      <div className='layout flex flex-auto flex-col items-center gap-10 p-10'>
        <div className='flex w-full items-center justify-start gap-6'>
          <div
            className='bg-background-100 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full hover:bg-white/30 active:scale-95'
            onClick={() => router.push('/purchase')}
          >
            <LeftArrowIcon className='h-[13px] w-[23px]' />
          </div>
          <div className='text-[24px] font-bold leading-[50px]'>My Cover</div>
        </div>
        {userCovers.length === 0 && (
          <div className='mx-auto w-full max-w-[1000px] py-[54px]'>
            <div className="mt-[14px] text-center text-[30px]">
              No User Cover
            </div>
          </div>
        )}
        <div className='grid w-full grid-cols-3 gap-[38px]'>
          {userCovers.map((userCover, index) => (
            <MyCover key={index} {...userCover} />
          ))}
        </div>
        {/* <List /> */}
      </div>
    </section>
  );
};
