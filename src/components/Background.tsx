'use client'
import { theme } from '@/app/providers/globalThemeProvider';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image'
import React from 'react'

const Background = () => {
    const sm = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div> <Image
    src={sm ?'/images/blue_bg_mobile.png':'/images/blue_bg.svg' }
    alt='woman reading a book'
    width={1000}
    height={1000}
    className={` ${sm ? 'w-full  bg-cover':'md:h-[50vw] md:min-w-[600px] md:w-[60vw] md:-right-32 max-w-[750px]'} min-h-[185px] max-h-[250px] md:min-h-max md:max-h-max absolute  top-0 z-0`}
    />
    <Image
    src={'/images/gray_home_shape.svg' }
    alt='woman reading a book'
    width={1000}
    height={1000}
    className='md:h-[50vw] md:w-[500vw] block bg-cover absolute -bottom-24 rotate-[-11deg] -left-[200px]'
    /></div>
  )
}

export default Background