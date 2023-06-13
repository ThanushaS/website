import React from 'react'

const BrandSponsor = () => {
  return (
   <div className='container'>
   <div className='row p-2' style={{marginTop:'102px'}}>
   <h1 className='Sponsors'>Sponsors</h1>
   </div>
   <div className='row'>
        <div className='col-sm-2 p-2'>
             <h1 className='active'>Active Sponsors</h1>
        </div>
        <div className='col-sm-2 p-2'>
             <div className='past'>Past Sponsors</div>
        </div>
        {/*<div className='col-sm-8  p-2'>
             <div className="search-controller"style={{marginLeft:'220px',marginTop:'-50px',position:'relative'}} >
                  <button className="search-btn"style={{marginLeft:'112px'}}>
                  <i className="bi bi-search"></i>
                  </button>
                  <input type="text" className='ml' placeholder="Search..."style={{width:'390px',marginleft:'111px'}} />
             </div>
</div>*/}
        <hr className='hr'></hr>
   </div>
   <div className='row '>
   {[...Array(10)].map((x,i) => {
             return (
        <div className='col-sm p-2'key={i}>
        <div className="card-brand">
             <div className="img-brand">
                  <img
   src="b.jpg"
  className='img-brand'/>
             </div>
             <div className="card-body">
             <div className="dollar mt-2"style={{marginTop:'',}}>$222</div>
             <h5 className=' Displaybanner'style={{marginLeft:'1px', marginTop:'-100px'}}>Display banner
opportunities</h5>
             <i className="bi bi-calendar3 cal"> 2023 May 23</i>
             <p className='card-text-brand'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.
</p>
             <a href="#" className="btn signincart">Add to cart</a>
             <a href="#" className="btn signinview">VIEW</a>
             </div>
        </div>
        </div>
      )
     })}
   </div>

  </div>
  )
}

export default BrandSponsor