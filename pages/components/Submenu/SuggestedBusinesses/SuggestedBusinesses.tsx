import React from 'react'

const SuggestedBusinesses = () => {
  return (
    <div className='container-fulid mt-5' style={{marginLeft:'114px'}}>
      <div className='row border' >
         <div className='col-8 col-md col-sm border'>
         <div className="card bg-dark text-white">
           
            <img src="/R.jpg" className="img " alt="..." style={{width:'',height:'316px'}}/>
            <div className="card-img-overlay">
               <h1 className="card-title Infinity">Infinity Gaming Cafe</h1>
            </div>
         </div>
      </div>
      </div>
      <div className='row border'>
         <div className='col-8 col-md col-sm border'>
            <h1 className='InfinityGamingCafe'style={{}}>Infinity Gaming Cafe</h1>
            </div>
            <div className='row '>
            <h5 className='subtitle'>Infinity Gaming Cafe located in Colombo 09 (Dematagoda) offers you 10 High-end RLG Gaming PCs, 55inch Curve 4K TVs with PS4 Pro. Enjoy all kinds of latest games such as Rainbow Six Siege, CSGO, Dota2, PUBG, Fortnite, Fifa 19 etc. Taking Sri Lankan Gaming Community to the Next Level!</h5>
         </div>
         <div className='row '>
         <button type="button" className="Community" style={{}}>Community</button>
            <button type="button" className="Gaming" style={{}}>Gaming</button>
         </div>
         <div className='row  border con3' style={{padding:'10px',marginTop:'29px'}}>
         <div className='col-lg-5 border'>
         <form>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
          <div className="form-outline ">
          <label className="form-label1" htmlFor="form3Example3">Contact:</label>
            <input type="text" id="form3Example3" className="form-control2" />
          </div>
          </div>
          <div className="form-outline mb-4">
          <label className="form-label1" htmlFor="form3Example3"> Opening Time:</label>
            <input type="text" id="form3Example3" className="form-control2" />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label1" htmlFor="form3Example3">Visit-Our-Page:</label>
            <input type="text" id="form3Example3" className="form-control2" />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label1" htmlFor="form3Example3">Location:</label>
            <input type="text" id="form3Example3" className="form-control2" />
          </div>
        </div>
      </div>
    </form>
         </div>
         <div className='col-lg-7 border'>
         <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
      className="map h-100 w-100"  loading="lazy"></iframe>
         </div>
      </div>
      </div>
     
    </div>
  )
}

export default SuggestedBusinesses