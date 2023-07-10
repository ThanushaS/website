/* eslint-disable react/jsx-key */
import Link from 'next/link'
import React from 'react'

const ActiveGame = () => {
  
  return (
    <div className='container-fluid' style={{marginLeft:'112px'}}>
       <div className='row  border' >
        <div className='col-8 col-md-12 col-sm-12'>
        <div className="card bg-dark text-white">
           
           <img src="/R.jpg" className="img " alt="..." style={{width:'',height:'271px'}}/> 
           <div className="card-img-overlay ">
              <h1 className="col-8 col-md card-title5 ">Infinity Gaming Cafe</h1>
           </div>
        </div>
        </div>
      </div>
      <div className='row border'>
        <div className='col-6 border'style={{width:'589px',height:'82px',borderRadius:'4px',background:'rgba(19,26,37,0.85)'}}>
          <div className='row border'>
          <div className='col-2 col-md-auto  border' style={{width:'57px',height:'65px',borderRadius:'4px',background:'rgba(66,170,133,0.13)'}}>
            25/48 player
          </div>
          <div className='col col-md-auto border' style={{width:'125px',height:'65px',borderRadius:'4px',background:'rgba(66,170,133,0.13)'}}>
            <div className='prizeactive'>PRIZE: 150</div>
          </div>
          <div className='col border'>1</div>
          <div className='col col-md-auto border'>
          <button className='jbtn'style={{width:'125px',height:'41px',borderRadius:'4px',background:'#2199c1',marginTop:'20px',marginRight:'22px',marginBottom:'21px'}}><div className='joinactive'>JOIN</div></button>
          </div>
          </div>
        </div>
        <div className='col-6 border'style={{width:'699px',height:'82px',borderRadius:'4px',background:'rgba(19,26,37,0.85)'}}>
          <div className='row'>
            <div className='col-auto border'>
              <div className='Presented'style={{marginLeft:'27px',marginTop:'11px'}}>Presented By:</div>
            </div>
            <div className='col-auto border'style={{width:'',height:'',borderRadius:'4px',}}>
            <img src="/R.jpg" className="card-img-top esportspro" alt="..." style={{width:'143px',height:'53px',borderRadius:'4px',marginTop:'44px'}}/>
            </div>
            <div className='col border'>
            <img src="/R.jpg" className="card-img-top esportspro" alt="..." style={{width:'149px',height:'63px',borderRadius:'4px',marginTop:'44px'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className='row border' style={{marginTop:'10px'}}>
        <div className='col-6 border 'style={{width:'589px',height:'512px',borderRadius:'4px',background:'rgba(19, 26, 37, 0.85)'}}>
          <div className='row stream'style={{width:'',height:'',background:'',marginLeft:'15px',marginTop:'15px'}}>
          <div className='col '><span>PARTICIPANTS</span></div>
          <div className='col-auto '><span>TOURNAMENT WINNER</span></div>
          <div className='col  '><span>STREAMING</span></div>
            <div className='col  '><span>BRACKETS</span></div>
          </div>
          <hr className=''style={{width:'557px',height:'1px',background:'rgba(67, 70, 84, 1)'}}></hr>
          <div className='row border TournamentParticipants'>Tournament Participants List</div>
       <Link href='/components/Submenu/ParticipatingTournaments/TournamentParticipantsList'>
          
          <div className='row row-cols-6 g-2'style={{marginTop:'18px',gap:'5px'}}>
          {[...Array(12)].map((x,i) => {
            return(
                     
              <div className='col-8 col-md-auto col-sm-auto border'style={{borderRadius:'4px'}}>       
          <div className="col-4 col-md col-sm actcard">
            <img src="/R.jpg" className="card-img-top" alt=""/>
            <div className="card-body ">
              <h5 className=" acttitle">JohnDoe</h5>
              <p className=" acttitle"style={{color:'rgba(255, 255, 255, 0.33)'}}>2023.07.02</p>  
            </div>
          </div>
          </div>
        
           )})}
          </div>
        </Link>
        </div>
        <div className='col-6 border' style={{marginTop:'',borderRadius:'4px',background:'rgba(19, 26, 37, 0.85)'}}>
          <div className='row border'>
            <div className='col border'>
            <span className='actp'>
              Age Range : 1-1000<br/>
Attendence Range : 1001 - 3000<br/>
Gender Expectation : Male/Female<br/>
Game: Free Fire<br/>
Tournament Type: Online Tournament<br/>
Time Zone: (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi<br/>
Date(s): 07/23/2022<br/>
Time: 16:00<br/>
Country / State: India / Uttar Pradesh<br/>
Team Name: GAMING ARENA<br/>
Participant Type: SinglePlayer<br/>
Prize: Cash Prize<br/>
Contact Name: Lucky rana
Email Address: chacalucky38@gmail.com<br/>
WEBSITE for more details: https://antaverse.regenerationmatrix.cloud/<br/></span>
            </div>
            <div className='col border'><hr/></div>
            <hr/>
            <div className='row border'>
              <div className='col border TournamentDetails'>
              Tournament Details:<br/>
This tournament will be on 23 July 4pm<br/>
For more info join our dc server - https://discord.gg/jeFXcQhQs9<br/>
              </div>
            </div>
          <hr/>
            <div className='row border'>
              <div className='col-auto border'>
              <div className="card" >
              <img src="/R1.jpg" className="card-img" alt=""style={{width: "149px",height:'62px'}}/> 
              </div>
              |<div className='row'>
                <div className='Inkind'>In kind</div>
              </div>
              </div>
              <div className='col'>
                <div className='row backlink'>
                We will place your logo/ profile image and add backlink to your profile/ ...
                </div>
                <div className='row actdol'>
                $2
                </div>
                <div className='row'>
                  <div className='NumberofSponsor'>Number of Sponsor</div>
                <label htmlFor="customRange" className="form-label "></label>
<input type="0" className="" id="" style={{width:'483px',height:'16px',borderRadius:'23px',background:'rgba(255,255,255,0.03)'}}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveGame