"use client";

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import SearchLogo from '../../public/assets/icons/search.svg';
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const Search = ({placeholder = 'Search event...'}: {placeholder?: string}) => {

  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (query) {
         newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'query',
            value: query
         });
      } else {
         newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['query']
         });
      }
        router.push(newUrl,{ scroll: false});
    } , 300)
    return () => clearTimeout(delayDebounceFn);
  }, [query, router, searchParams]);

  return (
    <div className='flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2'>
        <Image src={SearchLogo} alt='search' width={24} height={24}/>
        <Input className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"type='text' placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search;
