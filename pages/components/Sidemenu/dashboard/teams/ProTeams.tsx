import React from 'react'
import Search from '../../../Search/Search'
const ProTeams = () => {
  return (
   <div className='container'>
   <div className='row 'style={{marginTop:'26px'}}>
        <div className='col-sm-  team' >Teams</div>
        <Search/>
        {/*<div className='col-sm-2'>
        <div className="search-controller">
          <button className="search-btn">
              <i className="bi bi-search" style={{width:'390px',marginLeft:'894px'}}></i>
          </button>
                <input type="text" placeholder="Search..." style={{width:'390px',marginLeft:'844px'}}/>
      </div>
</div>*/}
   </div>
   <div className='row'>
        <div className='col-sm'>
             <table className="table">
                  <thead >
                       <tr className='head'>
                            <th scope="col-sm" className='name'>name</th>
                            <th  scope="col-sm" className='game'>game</th>
                            <th scope="col-sm" className='founder'>founder</th>
                            <th scope="col-sm" className='country'>country</th>
                            <th  scope="col-sm" className='teamcode'>teamcode</th>
                       </tr>
                  </thead>
                
             </table>
        </div>
   </div>
  </div>
  )
}

export default ProTeams