'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { cn } from '@/lib/utils';

import { Menus, MenuType } from '@/components/layout/header/constants';

import DropdownIcon from '~/svg/dropdown.svg';
import DropdownColorIcon from '~/svg/dropdown-color.svg';

export const Menu = (): JSX.Element => {
  return (
    <div className='hidden gap-[45px] lg:flex'>
      {Menus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

const MenuItem = ({ label, href, subMenus }: MenuType) => {
  const pathname = usePathname();
  const router = useRouter();

  const isSelected =
    pathname === href || subMenus?.some((menu) => pathname === menu.href);

  const handleLink = useCallback(
    (href?: string) => {
      href && router.push(href);
    },
    [router]
  );

  return (
    <div className={cn('group relative flex flex-auto')}>
      <div
        className={cn(
          'font-primary relative flex h-full cursor-pointer items-center gap-2 whitespace-nowrap text-[16px]',
          isSelected ? 'text-primary-200' : 'group-hover:text-primary-200 py-1',
          isSelected &&
            'after:content-[" "] after:bg-primary-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1'
        )}
        onClick={() => handleLink(href)}
      >
        {label}
        {subMenus && subMenus.length > 0 && (
          <div className='relative h-[6px] w-[12px] overflow-hidden'>
            <DropdownIcon className='absolute h-[6px] w-[12px] transition-all group-hover:translate-y-full group-hover:opacity-0' />
            <DropdownColorIcon className='absolute h-[6px] w-[12px] -translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100' />
          </div>
        )}
      </div>
      {subMenus && subMenus?.length > 0 && (
        <div className='border-border-200 text-light bg-background-100 absolute left-1/2 top-full hidden w-max min-w-[200px] -translate-x-1/2 flex-col rounded-[15px] border p-2 [box-shadow:0px_0px_24px_0px_rgba(0,_0,_0,_0.08)] group-hover:flex'>
          {subMenus?.map((menu, index) => (
            <div
              key={index}
              className='relative flex cursor-pointer items-center p-4'
              onClick={() => handleLink(menu.href)}
            >
              <p className='text-light hover:from-primary-200 hover:to-primary-100 hover:bg-gradient-to-t hover:bg-clip-text hover:text-transparent'>
                {menu.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
