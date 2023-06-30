import Link from 'next/link';
import React from 'react';
import AngleLeftIcon from '../../assets/icons/icon-angle-left.svg';
import Image from 'next/image';

interface iGoBackProps{
    label:string;
    url:string;
}

const GoBack = ({label,url}:iGoBackProps) => {
    return (
        <Link href={url} className='text-sm flex items-center mb-6'>
            <Image src={AngleLeftIcon}  alt="Angle Left" height="24" width="24" className='mr-2 -ml-[4px]'/>
            {label}
        </Link>
    )
}

export default GoBack;