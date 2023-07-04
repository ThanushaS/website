import React from 'react'

const participatingTournaments = () => {
  return (
   <div className='container mt-5'>
      <div className='row '>
         <div className='col border'>
            <h1 className='ParticipatingTournaments'>Participating Tournaments</h1>
         </div>
      </div>
      <div className='row'>
         <div className='col col-sm-6 col-lg-2 border'>
            <h1 className='Activetournament'>Active tournament</h1>
         </div>
         <div className='col col-sm-6 col-lg-2 border'>
            <h1 className='PastTournament'>Past Tournament</h1>
         </div>
      <hr className='hr'/>
      </div>
      <div className='row rows-col-auto conrow1'>
         <div className='col border'>
         <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Country
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Action</button></li>
            <li><button className="dropdown-item" type="button">Another action</button></li>
            <li><button className="dropdown-item" type="button">Something else here</button></li>
          </ul>
          </div>
         </div>
         <div className='col border'>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Game</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col border'>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col border'>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col border'>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className='col border'>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{color:''}}>
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
               </ul>
            </div>
         </div>
         <div className="col-1 border offset-1">
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
      <div className='row row-cols-1 row-cols-md-6 mt-5 g-4'>
      {[...Array(12)].map((x,i) => {
            return(
         <div className="col col-md col-sm border"key={i}>
            <div className="card mt-4 mr-3"style={{width:'197px',height:'210px',background: 'rgba(19, 26, 37, 0.85)',borderRadius:'4px'}}>
            <img src="/R.jpg" className="card-img-top" alt="..." style={{transform:'translateY(-60px)',width:'183px',height:'112px',borderRadius:'4px',padding:'',marginLeft:'7px',marginRight:'7px'}}/>
               <div className="card-body" style={{width:'197px',height:'210px'}}>
                  <div className='row'>
                     <div className='col border'style={{marginTop:'-59px'}}>
                     <button type="button" className="" style={{width:'81px',height:'22px',background:'rgba(33, 153, 193, 0.20)', borderRadius:'31px',marginTop:'px',fontSize:'8px'}}>FREE FIRE</button>
                     </div>
                     <div className='col border'style={{marginTop:'-59px'}}>
                     <button type="button" className="btn6"style={{width:'81px',height:'22px',background:'rgba(33, 153, 193, 0.2)', borderRadius:'31px',marginTop:'px',fontSize:'8px',}}>IN 5 DAYS</button>
                     </div>
                  </div>
                  <div className='row'style={{}}>
                     <div className='col border'>
                        <h5 className="card-title GamingArena "style={{color:'#fff'}}>Gaming Arena Solo Tournament</h5>
                     </div>
                  </div>
                  <div className='row'>
                     <div className='col border'>
                        <div className='row border'>
                          <span className=''style={{color:'#fff'}}>Prize:Crash Prize</span>
                        </div>
                        <div className='row border'>
                        <span className=''style={{color:'#fff'}}>Joined:25/48 players</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card-footer">
                  <div className='row'>
                     <div className='col border'>
                        <div className='row border'>
                        <i className="bi bi-calendar3"style={{color:'#7A7A7A'}}></i>
                        </div>
                        <div className='row border'>
                        <i className="bi bi-clock" style={{color:'#7A7A7A'}}></i>
                        </div>
                     </div>
                        <div className='col border'>
                           <button type="button" className="btn7 btn-primary">Button</button>
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

export default participatingTournaments
