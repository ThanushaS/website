import React from 'react'

const TournamentParticipantsList = () => {
  return (
    <div className='container-fluid border' style={{marginLeft:'112px'}}>
      <div className='row border'>
        <div className=''>
        
      <img src="/rec.png" className="img-fluid" alt="..."/><h2 className="card-title gamingesports">gaming & esports</h2>
      <div className=' float-start'></div>
      </div>
      </div>
      <div className='col border' style={{width:'1301px',height:'210px',borderRadius:'4px',background:'rgba(20, 21, 36, 1)',marginTop:'-107px'}}>
      <div className="text-center">
  <img src="/elli.png" className="rounded" alt="..." style={{marginTop:'-79px'}}/>
</div>
      <div className='row border'style={{marginTop:'16px'}}>
   
        <div className='col border'>
          <label className='tplabel'>Name:
          </label>
        </div>
        <div className='col border'>
        <label className='tplabel'>Time Zona : 
          </label>
        </div>
      </div>
      <div className='row border'>
        <div className='col border'>
        <label className='tplabel'>Date Of Birth :
          </label>
        </div>
        <div className='col border'>
        <label className='tplabel'>Country/state :
          </label>
        </div>
      </div>
      <div className='row border'>
        <div className='col border'>
        <label className='tplabel'>Age :
          </label>
        </div>
        <div className='col border'>
        <label className='tplabel'>Profession :
          </label>
        </div>
      </div>
      <div className='row border'> 
      <label className='tplabel'>Description :
          </label></div>
      </div>
    </div>
  )
}

export default TournamentParticipantsList