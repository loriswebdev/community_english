import { Box, ComponentsProps, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import React, { ComponentProps } from 'react'

const Logo = ({sx, className}:{sx: SxProps<Theme>, className?: string}) => {
    
    return (
    <Box sx={{...sx}}>

        <Image
        className={className}
        src='/images/Community.png'
        alt='community english logo'
        width={175}
        height={175}
        
        />
    </Box>
  )
}

export default Logo