import React from 'react'
import Search from '../../../Search/Search'

const BrandSponsor = () => {
  return (
    <div className='container'>
      <div className='row'style={{marginTop:'-50px',marginLeft:'110px'}}>
      <div className='col  '>
         <div className='row  mt-5' style={{marginTop:''}}>
            <h1 className='Sponsors' style={{color:'#FFFFFF',marginTop:'29px'}}>Sponsors</h1>
         </div>
         <div className='row'>
            <div className='col-2 '>
               <h5 className='ActiveSponsors'style={{color:'#FFFFFF',marginTop:'39px'}}>Active Sponsors</h5>
            </div>
            <div className='col-2 '>
               <h5 className='PastSponsors'style={{color:'#FFFFFF',marginTop:'39px',marginLeft:'50px'}}>Past Sponsors</h5>
            </div>
            <div className='col-3 '>
            <div className='col-1 col-sm-4 col-md  '>
                    <div className="search-controller"style={{marginLeft:'220px',marginTop:'-20px',position:'relative',background: 'rgba(255, 255, 255, 0.04)'}} >
                         <button className="search-btn"style={{marginLeft:'112px'}}>
                         <i className="bi bi-search"></i>
                         </button>
                         <input type="text" className='ml' placeholder="Search..."style={{width:'390px',marginLeft:'111px'}} />
                    </div>
  </div>
            </div>
            <hr className='hr'></hr>
         </div>
         <div className='row mb-5  row-cols-1 row-cols-sm row-cols-md-5'>
         {[...Array(10)].map((x,i) => {
            return(
         <div className='col col-sm-6 col-md  mt-5  'key={i} >
         <div className="col">
         <div className="card h-100"style={{width:'197px',height:'219px',borderRadius:'4px',background:' rgba(19, 26, 37, 0.85)'}}>
            <img src="/R1.jpg" className="card-img-top" alt="..." style={{width:'183px',height:'112px',borderRadius:'4px'}}/>
            <div className="card-body" style={{marginTop:'-49px'}}>
               <div className='row'>
                  <div className='col '>
                     <h5 className="Displaybanner card-title"style={{color:'white'}}>Display banner opportunities</h5>
                  </div>
         <div className='col '>
            <div className="spodollar mt-"style={{marginTop:'',}}>
               <div className='dollarrec'><div className='dollartext'>$222</div>
            </div>
         </div>
      </div>
   </div>
   <div className='row '>
      <i className="bi bi-calendar calspo"> 2023 May 23</i>
   </div>
   <div className='row '>
      <p className='card-text-brand spo-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
   </div>
   <div className='row '>
      <div className="progress" style={{height:'5px',width:'158px',marginLeft:'15px'}}>
         <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
   </div>
   <div className='row '>
      <div className='col'>
         <a href="#" className="btn signincart" style={{position: 'relative',width: '82.86px',height: '25.89px',top: '',background: '#2199C1',borderRadius: '32px',marginLeft:'-10px',marginBottom:'10px',marginTop:'15px',fontSize:'9px',color:'white'}}>Add to cart</a>
      </div>
      <div className='col'>
         <a href="#" className="btn signinview " style={{width:'82.86px',height:'25.89px',marginLeft:'1px',marginTop:'15px',border:'1px soild #2199c1',borderRadius:'32px',fontSize:'9px',color:'white',fontWeight:'500px',lineHeight:'11px', border: '1px solid #2199C1',marginRight:'11px'}}>VIEW</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
       )})}
     
         
         </div>
         
      </div>
   
      </div>
    </div>
  )
}

export default BrandSponsor