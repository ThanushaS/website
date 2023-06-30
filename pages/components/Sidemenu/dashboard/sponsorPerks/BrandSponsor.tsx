import React from 'react'
import Search from '../../../Search/Search'
import Addtocart from '../../../Addtocart'
import View from '../../../Viewbtn'

const BrandSponsor = () => {
  return (
    <div className='container' style={{marginLeft:'112px'}}>
      <div className='row'style={{marginTop:'-50px',marginLeft:''}}>
      <div className='row mt-5 ml-5'>
         <div className='col  ' style={{marginTop:''}}>
            <h1 className='Sponsors' style={{color:'#FFFFFF',marginTop:'29px'}}>Sponsors</h1>
            <div className='col-2 col-sm-6'>
        <div className="search-controller" style={{marginLeft:'770px'}}>
          <button className="search-btn">
            <i className="bi bi-search" style={{width:'390px',marginLeft:'100px',borderRadius: '4px',background:'rgb(255, 255, 255, 0.04)'}}></i>
          </button>
            <input type="text" placeholder="Search..." style={{width:'390px',marginLeft:'84px'}}/>
        </div>
      </div>
         </div>
         
         <div className='row mt-5'>
            <div className='col-1 col-md-2 '>
               <h5 className='ActiveSponsors'style={{color:'#FFFFFF',marginTop:'39px'}}>Active Sponsors</h5>
            </div>
            <div className='col-1 col-md-2 '>
               <h5 className='PastSponsors'style={{color:'#FFFFFF',marginTop:'39px',marginLeft:''}}>Past Sponsors</h5>
            </div>
          
            <hr className='hr'></hr>
         </div>
         <div className='row mb-5  row-cols-1 row-cols-sm row-cols-md-5'>
         {[...Array(10)].map((x,i) => {
            return(
         <div className='col-8  col-sm-12  mt-5'key={i} >
         <div className="col-8  col-sm-12">
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
        {/* <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>*/}
      </div>
   </div>
   <div className='row '>
      <Addtocart/>
     <View/>
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