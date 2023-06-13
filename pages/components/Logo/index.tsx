import Image from 'next/image';
import React from 'react';
const Logo  = () => {
    return(
        <div>
            <Image src={'/user.jpg'} alt=' ' height={20} width={25} className='object-contain'/>
        </div>
    )
}

export default Logo;