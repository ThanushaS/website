import Link from 'next/link'
import React from 'react'

const activeTournaments = () => {
  return (
  <div className='container-fluid  mt-3'style={{marginLeft:'112px'}}>
      <div className='row '>
         <div className='col '>
            <h1 className='ParticipatingTournaments'>Participating Tournaments</h1>
         </div>
      </div>
      <div className='row'>
         <div className='col col-sm-6 col-lg-2 stream'>
            <span><h1 className='Activetournament'>Active tournament</h1></span>
         </div>
         <div className='col col-sm-6 col-lg-2  '>
         <Link href='/components/Submenu/ParticipatingTournaments/PastTournament' >
            <span><h1 className='PastTournament '>Past Tournament</h1></span>
            </Link>
         </div>
      <hr className='hr'/>
      </div>
      <div className='row rows-col-8 '>
         <div className='col-6 col-md-auto col-sm border'>
         <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>
          Country
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Action</button></li>
            <li><button className="dropdown-item" type="button">Another action</button></li>
            <li><button className="dropdown-item" type="button">Something else here</button></li>
          </ul>
          </div>
         </div>
         <div className='col-6 col-md-auto col-sm border'>
            <div className="dropdown">
            <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Game</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col-6 col-md-auto col-sm border'>
            <div className="dropdown">
            <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col-6 col-md-auto col-sm border'>
            <div className="dropdown">
            <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col-6 col-md-auto col-sm border'>
            <div className="dropdown">
            <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col-6 col-md-auto col-sm border'>
            <div className="dropdown">
            <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className="col-auto border offset-2" style={{marginLeft:'320px'}}>
            <div className='row'>
               <div className='col-auto'>
               <i className="bi bi-list-ul" style={{width:'14px',height:'14px',color: '#808080'}}></i>
               </div>
               <div className='col-auto'>
               <i className="bi bi-ui-checks-grid"style={{width:'14px',height:'14px',color: '#808080'}}></i>
               </div>
            </div>
         </div>
      </div>
<div className="row row-cols-md-6 g-5 mt-3" style={{gap:'20px'}}>
{[...Array(12)].map((x,i) => {
            return(
              // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
            
  // eslint-disable-next-line react/jsx-key
  <div className="col-6 col-md-auto col-sm-6 "style={{marginLeft:'-17px'}}>
    <div className="card"style={{width:'197px',height:'210px',borderRadius:'4px',background:'rgba(19,26,37,0.85)'}}>
      <div className='img' style={{width:'183px',height:'112px',borderRadius:'4px',marginTop:'-20px'}}>
      <img src="/R1.jpg" className="card-img-top" alt="..."/>
      </div>
      <div className="row border card-body" >
        <div className='row border'style={{marginTop:'-50px'}}>
          <div className='col border'>
            <button className='freefire'><div className='free'>FREE FIRE</div></button>
          </div>
          <div className='col border'>
            <button className='indays'><div className='days'>IN 5 DAYS</div></button>
          </div>
        </div>
        <div className='row' >
        <h5 className="card-title ">Gaming Arena Solo
Tournament</h5>
        </div>
        <div className='row border'style={{marginTop:'-10px'}}>
          <div className='row border Prize'>Prize : Cash Prize</div>
          <div className='row border Prize'>Joined : 25 / 48 Players</div>
          <div className='row border'style={{marginTop:'-10px'}}>
            <div className='col border'>
              <div className='row'>
              <div className='col'>   
              <span><i className="fa-sharp fa-solid fa-calendar-days" style={{width:'10px',height:'10px',color:'#7a7a7a'}}> sat,jul 29</i></span>         
              </div>
             
              </div>
              <div className='row border'>
                <div className='col'>
                <i className="fa-sharp fa-solid fa-clock"style={{width:'10px',height:'10px',color:'#7a7a7a'}}></i>
                </div>
               
              </div>
            </div>
            <div className='col' style={{marginTop:'15px'}}>
            <Link href='/components/Submenu/ParticipatingTournaments/Active/ActiveGame'>
              <button className='joinbtn'><div className='join'>JOIN</div></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    )})}
</div>
   </div> 
  )
}

export default activeTournaments
