import React from 'react'
import Search from '../../../Search/Search'
const ProTeams = () => {


  return (
  <div className='container-sm'>
    <div className='row rows-cols-md 'style={{marginTop:'26px'}}>
      <div className='col-8 col-md-6  team' >Teams</div>
      <div className='col-sm-2'>
        <div className="search-controller" style={{}}>
          <button className="search-btn" style={{marginTop:'-9px',}}>
            <i className="bi bi-search" style={{width:'390px',marginLeft:'100px',borderRadius: '4px',background:'rgb(255, 255, 255, 0.04)'}}></i>
          </button>
            <input type="text" placeholder="Search..." style={{width:'390px',marginLeft:'104px'}}/>
        </div>
      </div>
    </div>
   <div className='row' style={{marginLeft:'112px'}}>
    <div className='col-6 col-md-12'>
      <table className="table" style={{fontSize: '12px',fontFamily: 'Roboto',fontWeight: '500',textTransform: 'uppercase'}}>
        <thead>
          <tr>
            <th scope='colm'  style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}} ></th>
            <th scope="colm"  style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}} >name</th>
            <th  scope="colm"  style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}} >game</th>
            <th scope="colm"style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}}>founder</th>
            <th scope="colm"style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}} >country</th>
            <th  scope="colm"style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}} >teamcode</th>
            <th  scope="colm"style={{width:'',height:'44px',background: '#151725',color: 'rgba(255, 255, 255, 0.62)'}}></th>
          </tr>
        </thead>
        {[...Array(10)].map((x,i) => {
            return(
              <tbody color='#fff' className='' key={i}>
                <tr>
                  <th scope="row-6 row-md-12" style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}}>
                                 <img src="/s.png" className="img-fluid rounded-circle" alt="" style={{width:'34.351px',height:'34.351px',color:''}}/>   
                  </th>
                  <td  style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}}>donald dddd</td>
                  <td  style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}} >1-2 swiych</td>
                  <td  style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}}>donald</td>
                  <td  style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '',fontSize: '13px',lineHeight: '162.187%'}}>  <img src="/f.png" className="img-fluid " alt="" style={{}}/></td>
                  <td  style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}} >768989</td>
                  <td style={{borderRadius: '',background: 'rgba(19, 26, 37, 0.63)',color: '#FFF',fontSize: '13px',lineHeight: '162.187%'}}>
                    <button type="button" style={{ height:'26px',width:'63px',background:'#2199C1',boxShadow:'0px 4px 14px rgba(0, 0, 0, 0.25)',borderRadius:'32px'}} ><div className="proview" style={{marginTop:'-10px'}}>View</div>
                    </button>                                 
                  </td>
                </tr>
              </tbody>
            )})}
      </table>
    </div>
   </div>
  </div>
  )
}

export default ProTeams