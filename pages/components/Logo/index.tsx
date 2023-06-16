import Image from 'next/image';
import React from 'react';
const Logo  = () => {
    return(
        <div>
            <Image src={'/Canvas.png'} alt=' ' height={39} width={59}   className='object-contain'/>
            <h1 className='logoname' style={{width:'59px',height:'39px',marginTop:'-65px', color:'white',fontSize:'7px',marginLeft:'-12px',fontStyle:'bold'}}>ESPORTSPRO</h1>
        </div>
    )
}

export default Logo;