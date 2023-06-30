import React from 'react'

const AddNewTeam = () => {
  return (
<div className='container'style={{width:'1302px',height:'905px',background:'#2A3240',borderRadius:'4px',marginLeft:'114px',marginTop:'20px',marginRight:'24px',marginBottom:'83px' }}>
   <div className='row'style={{width:'309px',height:'28px',marginLeft:'39px',marginTop:'31px', fontFamily:'Roboto',fontStyle:'normal',fontWeight:'500px',fontSize:'24px',lineHeight:'28px',textAlign:'center',color:'#ffffff'}}>Add New Team/Organization</div>
<form className="row g-2 mt-3 "style={{marginLeft:'15px'}}>
   <div className='row'>
  <div className="col-8 col-md-6">
    <label htmlFor="Category" className="form-label">Select Category :</label>
    <select id="Category" className="form-select"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}>
      <option selected >Select Category</option>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
  </div>
  <div className="col-8 col-md-6">
    <label htmlFor="Game" className="form-label">Select Game:</label>
    <select id="Game" className="form-select" style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}>
      <option selected >Select Game</option>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
  </div>
  </div>
  <div className='row'>
  <div className="col-8 col-md-6">
    <label htmlFor="inputName" className="form-label">Team Name:</label>
    <input type="text" className="form-control1" placeholder="Team Name" aria-label="Team Name" aria-describedby="basic-addon1"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}/>
  </div>
  <div className="col-8 col-md-6">
  <label htmlFor="basic-url" className="form-label">Team URL name:</label>
<div className="input-group mb-3">
  <input type="text" className="form-control1" id="basic-url" aria-describedby="basic-addon3"placeholder="Ex. RockUSA" aria-label="Ex. RockUSA"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}/>
</div>
  </div>
  </div>
  <div className='row'>
  <div className="col-8 col-md-6">
  <label htmlFor="startDate" className="form-label">Start</label>
<input id="startDate" className="form-control" type="date"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}} />
  </div>
  </div>
  <div className='row'>
  <div className="col-8 col-md-3">
    <label htmlFor="inputState" className="form-label">Country:</label>
    <select id="inputState" className="form-select"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}>
      <option selected>Select Country</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
  <div className="col-8 col-md-3">
    <label htmlFor="inputState" className="form-label">States:</label>
    <select id="inputState" className="form-select"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}>
      <option selected>Select States</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
  </div>
  <div className='row'>
  <div className="col-8 col-md-6">
    <label htmlFor="inputName" className="form-label">Owner:</label>
    <input type="text" className="form-control1" placeholder="Owner" aria-label="Owner" aria-describedby="basic-addon1"style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto'}}/>
  </div>
  </div>
  <div className='row'>
  <div className="col-8 col-md-6">
  <label htmlFor="inputName" className="form-label" style={{width:'153px',height:'16px'}}>Description (250 words):</label>
  <textarea className="form-control" aria-label="With textarea" style={{background:' rgba(217, 217, 217, 0.06)',color:'rgba(255, 255, 255, 0.24)',border:'none',fontFamily:'Roboto',height:'114px'}}></textarea>
</div>
</div>
 <div className='row ml-5 ' style={{marginTop:'203px'}}>
  <div className="col-3 col-md-3 col-sm-3">
  <button type="submit" className="btn1 btn-primary" style={{marginLeft:'',marginRight:'',width:'174px',height:'42px',marginBottom:'32px',background:' #2199C1'}}>submit</button>
  </div>
  <div className='col-3 col-md-3 col-sm-3'>
    <button type="submit" className="btn2 btn-danger" style={{marginLeft:'21px',marginRight:'',width:'174px',height:'42px',marginBottom:'32px',background: '#E54547'}}>close</button>
  </div>
  </div>
</form>
</div>
  )
}

export default AddNewTeam