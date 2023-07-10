import Link from 'next/link'
import React from 'react'

const PastTournament = () => {
  return (
    <div className='container mt-3 'style={{marginLeft:'112px'}}>
    <div className='row '>
       <div className='col border'>
          <h1 className='ParticipatingTournaments'>Participating Tournaments</h1>
       </div>
    </div>
    <div className='row'>
       <div className='col col-sm-6 col-lg-2 border'>
       <Link href='/components/Submenu/ParticipatingTournaments/ActiveTournaments'>
          <h1 className='Activetournament'>Active tournament</h1>
          </Link>
       </div>
       <div className='col col-sm-6 col-lg-2 border'>
       
          <h1 className='PastTournament'>Past Tournament</h1>
          
       </div>
    <hr className='hr'/>
    </div>
    <div className='row rows-col-8 '>
       <div className='col-6 col-md col-sm border '>
       <div className="dropdown ">
        <button className="conrow1 btn-secondary dropdown-toggle " type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>
        Country
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button className="dropdown-item" type="button">Action</button></li>
          <li><button className="dropdown-item" type="button">Another action</button></li>
          <li><button className="dropdown-item" type="button">Something else here</button></li>
        </ul>
        </div>
       </div>
       <div className='col-6 col-md col-sm border'>
          <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Game</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
             </ul>
          </div>
       </div>
       <div className='col-6 col-md col-sm border'>
          <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Price Type</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
             </ul>
          </div>
       </div>
       <div className='col-6 col-md col-sm border'>
          <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Tournament Type</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
             </ul>
          </div>
       </div>
       <div className='col-6 col-md col-sm border'>
          <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px'}}>Participants Type</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
             </ul>
          </div>
       </div>
       <div className='col-6 col-md col-sm border'>
          <div className="dropdown">
          <button className="conrow1 btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'153px',height:'30px',borderRadius:'5px'}}>Sponsor Opportunities</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
             </ul>
          </div>
       </div>
       <div className="col-1  border offset-1">
          <div className='row'>
             <div className='col'>
             <i className="bi bi-list-ul" style={{width:'14px',height:'14px',color: '#808080'}}></i>
             </div>
             <div className='col'>
             <i className="bi bi-ui-checks-grid"style={{width:'14px',height:'14px',color: '#808080'}}></i>
             </div>
          </div>
       </div>
    </div>
<div className="row row-cols-6 row-cols-md-6 g-5 mt-3" style={{gap:'20px'}}>
{[...Array(12)].map((x,i) => {
          return(
// eslint-disable-next-line react/jsx-key
<div className="col-6 col-md col-sm" style={{marginLeft:'-0px'}}>
  <div className="card"style={{width:'197px',height:'210px',borderRadius:'4px',background:'rgba(19,26,37,0.85)'}}>
    <div className='img' style={{width:'183px',height:'112px',borderRadius:'4px'}}>
    <img src="/R.jpg" className="card-img-top" alt="..."/>
    </div>
    <div className="row border card-body" >
      <div className='row border'style={{marginTop:'-50px'}}>
        <div className='col border'>
          <button className='freefire'><div className='free'>FREE FIRE</div></button>
        </div>
        <div className='col border'>
          <button className='indays'><div className='days'>EXPIRED</div></button>
        </div>
      </div>
      <div className='row' >
      <h5 className="card-title ">Gaming Arena Solo
Tournament</h5>
      </div>
      <div className='row border'style={{marginTop:'-10px'}}>
        <div className='row border Prize'>Prize : Cash Prize</div>
        <div className='row border Prize'>Joined : 25 / 48 Players</div>
        <div className='row border'>
         {/* <div className='col border'>
            <div className='row'>
            <div className='col'>              
            <i className="fa-solid fa-calendar-days" style={{width:'14px',height:'15px',background:'#7a7a7a'}}></i>
            </div>
           
            </div>
            <div className='row border'>
              <div className='col'>
            <i className="fa-solid fa-clock"></i>
              </div>
             
            </div>
          </div>*/}
          <div className='col'>
            <button className='closebtn'><div className='close'>CLOSED</div></button>
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

export default PastTournament