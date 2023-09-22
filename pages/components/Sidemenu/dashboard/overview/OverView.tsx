import React from 'react'
import Link from 'next/link'
import Search from '../../../Search/Search'
import Pagination from '../../../Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGift, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import Claim from '../../../Claim'
import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons'
import Addtocart from '../../../Addtocart'
import View from '../../../Viewbtn'


const OverView = () => {
   
  return (
   <div className='container-fluid'style={{color:' #FFFFFF',marginLeft:'114px',height:'1080px',width:'1440px'}}>
      <h1 className='overview'>OverView</h1>
         <div className='row row-cols-3 ' style={{marginTop:'30px'}}>
            <div className='col-8 col-md col-sm ' >
               <div className="col-12 col-md col-sm  card" style={{width:'429px',height:'112px',marginLeft:'',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41)'}}>
                  <div className="col-6 col-md col-sm card-body" style={{color:' #FFFFFF'}}>
                  <FontAwesomeIcon className='overicon'icon={faHandHoldingDollar} style={{width:'38px',height:'38px',marginLeft:'6px',marginTop:'-7px'}}/> 
                  <span className='' style={{width:'49px',height:'28px',fontWeight:'800',fontStyle:'normal',fontSize:'24px',lineHeight:'28px',marginLeft:'19px',top:'15px',marginTop:'10px'}}>$0.0</span>
                     <h5 className="overviewtext">Earnings</h5>
                     <a href="#" className="card-link">Check Income History</a>
                     <div className="text-primary"></div>
                  </div>
               </div>
            </div>
            <div className='col-8 col-md-4 col-sm-12' >
               <div className="col-12 col-md-12 col-sm-12 card" style={{width:'429px',height:'112px',marginLeft:'',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41)'}}>
                  <div className="col-12 col-md-12 col-sm-12 card-body"style={{color:' #FFFFFF'}}>
                  <FontAwesomeIcon className='overicon' icon={faGift}style={{width:'38px',height:'38px',marginLeft:'6px',marginTop:'-7PX'}} /> 
                  <span className='' style={{width:'49px',height:'28px',fontWeight:'800',fontStyle:'normal',fontSize:'24px',lineHeight:'28px',marginLeft:'19px',marginTop:''}}> ESPRO</span>
                     <h5 className="overviewtext">Rewards</h5>
                    <span>
                     <a href="#" className="card-link">Check Income History</a>
                                       
                     </span>
                   <Claim/>
                  </div>
               </div>
            </div>
           
            <div className='col-8 col-md-4 col-sm-12'>
            <div className="col-12 col-md-12 col-sm-12 card" style={{width:'429px',height:'112px',marginLeft:'',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41'}}>
                              <div className="col-md-8 card-body"style={{color:' #FFFFFF'}}> 
                              <div className='col-8'>
                                   <p  className="overcrypto "style={{marginTop:'',marginLeft:'50px',textAlign:'center',alignContent:'center'}}> Provide your services among the gaming and crypto audiences.</p>
                                   </div>
                                   <div className='col-8 col-md-8'>
                                     <button type="button" className="btn btn-success createservice" style={{width:'148px',height:'25px',marginLeft:'90px',marginTop:'',background:'#42AA85',borderRadius:'32px',fontSize:'9px',textTransform:'uppercase',fontWeight:'500',lineHeight:'11px',marginBottom:'20px'}}>create your services</button>
                                     </div>
                              </div>
                         </div>
            </div>
         </div>
         <div className='row'>
            <div className='col-6 col-md '>
               <div className='row'>
                  <div className='col-8 col-md-6 col-sm-12 '>
         <h1 className='feed' style={{width:'319px',height:'26px',left:'114px',top:'270px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'800px',fontSize:'22px',lineHeight:'26px',color:'#fffffff'}}>Feed / Notifications / Invitations</h1>
                  </div>
                  <div className='col-8 col-md-6 col-sm-12'>
                  <h1 className='ParticipatingTournaments'>Participating Tournaments</h1>
                   <div className='row border'>
                   <div className='col-8 col-md-6 col-sm-8 border'>
                     <div className="card mb-3" style={{width:'250px',height:'112px',background:'rgba(0, 0, 0, 0.41)'}} >
                      <Link href='/components/Submenu/ParticipatingTournaments/ActiveTournaments' style={{}}>
                     <div className="row g-0">
                     <div className="col-6 col-md-6 p-2">
                        <img src="/R.jpg" className="img-fluid " alt="..." style={{width:'92px',height:'93px',background:'rgba(0, 0, 0, 0.41)'}}/>
                     </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body" style={{lineHeight:'9px'}}>
                        <h5 className="card-title" style={{color:'#fff',fontSize:'14px',fontWeight:'600'}}>Cmd</h5>
                        <p className="card-text" style={{color:'rgba(255, 255, 255, 0.47)',fontSize:'10px'}}>Game:Ace Combat 7</p>
                        <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" color='rgba(255, 255, 255, 0.24)' viewBox="0 0 448 512" style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" ></path></svg ><span style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}>Thuesday,  Feb 14</span></i>
                        <br/>
                       <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg><span style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}>12.45</span></i>
                        </div>
                     </div>
                  </div>
                  </Link>
                  </div>
                     </div>
                  
                     <div className='col-8 col-md-6 col-sm-8 border'>
                     <div className="card mb-3" style={{width:'250px',height:'112px',background:'rgba(0, 0, 0, 0.41)'}} >
                     <div className="row g-0">
                     <div className="col-6 col-md-6 p-2">
                        <img src="/R.jpg" className="img-fluid " alt="..." style={{width:'92px',height:'93px',background:'rgba(0, 0, 0, 0.41)'}}/>
                     </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body" style={{lineHeight:'9px'}}>
                        <h5 className="card-title" style={{color:'#fff',fontSize:'14px',fontWeight:'600'}}>Cmd</h5>
                        <p className="card-text" style={{color:'rgba(255, 255, 255, 0.47)',fontSize:'10px'}}>Game:Ace Combat 7</p>
                        <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" color='rgba(255, 255, 255, 0.24)' viewBox="0 0 448 512" style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" ></path></svg ><span style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}>Thuesday,  Feb 14</span></i>
                        <br/>
                       <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg><span style={{fontSize:'9px',color:'rgba(255, 255, 255, 0.24)'}}>12.45</span></i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                   </div>
                  </div>
               </div>
               <div className='row'>
               <div className='col-8 col-md-6 col-sm-12'>
                  <div className='row'>
                     <div className='col-8 col-md-6 col-sm-12'>
                        <h1 className='SponsorPerks'>Suggested Sponsor Perks</h1>
                     </div>
                     <div className='col-8 col-md-6 col-sm-12'>
                        <Link href={''} style={{marginLeft:'165px',color:'#2B98A1',fontWeight:'500',fontSize:'13px',lineHeight:'15px'}}>View All</Link>
                     </div>
                  </div>
               <div className='row'style={{marginTop:'47px',marginBottom:'px'}}>
                  <div className='col-8 col-lg-4 col-md-8 col-sm-12  mb-5'>
                  <div className="card h-100"style={{width:'151.97px',height:'168.94px',borderRadius:'4px',background:' rgba(19, 26, 37, 0.85)',marginBottom:'-20px'}}>
                   <img src="/R1.jpg" className="card-img-top" alt="..." style={{width:'142px',height:'72px',borderRadius:'4px'}}/>
            <div className="card-body" style={{marginTop:'-49px'}}>
               <div className='row'>
                  <div className='col '>
                     <h5 className="Displaybanner"style={{color:'white'}}>Display banner opportunities</h5>
                  </div>
         <div className='col '>
            <div className="spodollar mt-"style={{marginLeft:'15px',}}>
               <div className='dollarrec'><div className='dollartext'>$222</div>
            </div>
         </div>
      </div>
   </div>
   <div className='row '>
      <i className="bi bi-calendar calspo"> 2023 May 23</i>
   </div>
   <div className='row '>
      <p className='card-text-brand spo-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
   </div>
   <div className='row '>
      <div className="progress" style={{height:'5px',width:'158px',marginLeft:'2px'}}>
         <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
   </div>
   <div className='row '>
    <div className='col'>
   <a href="#" className="btn oversignincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '',background: '#2199C1',borderRadius: '32px',marginLeft:'-7.71px',marginBottom:'10px',marginTop:'15px',fontSize:'5px',color:'white',fontWeight:'500',textAlign:'center',textTransform:'uppercase'}}>Add to cart</a>
   </div>
   <div className='col'>
   <a href="#" className="btn signinview " style={{width:'63.92px',height:'19.98px',marginLeft:'-4px',marginTop:'15px',border:'1px soild #2199c1',borderRadius:'32px',fontSize:'7px',color:'white',fontWeight:'500px',lineHeight:'11px', border: '1px solid #2199C1',marginRight:'11px',textTransform:'uppercase'}}>VIEW</a>
   </div>
       </div>
      </div>
      </div>
                  </div>
                  <div className='col-8 col-lg-4 col-md-8 col-sm-12  mb-5'>
                  <div className="card h-100"style={{width:'151.97px',height:'168.94px',borderRadius:'4px',background:' rgba(19, 26, 37, 0.85)',marginBottom:'-20px'}}>
            <img src="/R1.jpg" className="card-img-top" alt="..." style={{width:'142px',height:'72px',borderRadius:'4px'}}/>
            <div className="card-body" style={{marginTop:'-49px'}}>
               <div className='row'>
                  <div className='col '>
                     <h5 className="Displaybanner"style={{color:'white'}}>Display banner opportunities</h5>
                  </div>
         <div className='col '>
            <div className="spodollar mt-"style={{marginLeft:'15px',}}>
               <div className='dollarrec'><div className='dollartext'>$222</div>
            </div>
         </div>
      </div>
   </div>
   <div className='row '>
      <i className="bi bi-calendar calspo"> 2023 May 23</i>
   </div>
   <div className='row '>
      <p className='card-text-brand spo-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
   </div>
   <div className='row '>
      <div className="progress" style={{height:'5px',width:'158px',marginLeft:'2px'}}>
         <div className="progress-bar" role="progressbar" aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
      </div>
   </div>
   <div className='row '>
    <div className='col'>
   <a href="#" className="btn oversignincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '',background: '#2199C1',borderRadius: '32px',marginLeft:'-7.71px',marginBottom:'10px',marginTop:'15px',fontSize:'5px',color:'white',fontWeight:'500',textAlign:'center',textTransform:'uppercase'}}>Add to cart</a>
   </div>
   <div className='col'>
   <a href="#" className="btn signinview " style={{width:'63.92px',height:'19.98px',marginLeft:'-4px',marginTop:'15px',border:'1px soild #2199c1',borderRadius:'32px',fontSize:'7px',color:'white',fontWeight:'500px',lineHeight:'11px', border: '1px solid #2199C1',marginRight:'11px',textTransform:'uppercase'}}>VIEW</a>
   </div>
       </div>
      </div>
      </div>
                  </div>
                  <div className='col-8 col-lg-4 col-md-8 col-sm-12  mb-5'>
                  <div className="card h-100"style={{width:'151.97px',height:'168.94px',borderRadius:'4px',background:' rgba(19, 26, 37, 0.85)',marginBottom:'-20px'}}>
            <img src="/R1.jpg" className="card-img-top" alt="..." style={{width:'142px',height:'72px',borderRadius:'4px'}}/>
            <div className="card-body" style={{marginTop:'-49px'}}>
               <div className='row'>
                  <div className='col '>
                     <h5 className="Displaybanner"style={{color:'white'}}>Display banner opportunities</h5>
                  </div>
         <div className='col '>
            <div className="spodollar mt-"style={{marginLeft:'15px',}}>
               <div className='dollarrec'><div className='dollartext'>$222</div>
            </div>
         </div>
      </div>
   </div>
   <div className='row '>
      <i className="bi bi-calendar calspo"> 2023 May 23</i>
   </div>
   <div className='row '>
      <p className='card-text-brand spo-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
   </div>
   <div className='row '>
      <div className="progress" style={{height:'5px',width:'158px',marginLeft:'2px'}}>
         <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
   </div>
   <div className='row '>
    <div className='col'>
   <a href="#" className="btn oversignincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '',background: '#2199C1',borderRadius: '32px',marginLeft:'-7.71px',marginBottom:'10px',marginTop:'15px',fontSize:'5px',color:'white',fontWeight:'500',textAlign:'center',textTransform:'uppercase'}}>Add to cart</a>
   </div>
   <div className='col'>
   <a href="#" className="btn signinview " style={{width:'63.92px',height:'19.98px',marginLeft:'-4px',marginTop:'15px',border:'1px soild #2199c1',borderRadius:'32px',fontSize:'7px',color:'white',fontWeight:'500px',lineHeight:'11px', border: '1px solid #2199C1',marginRight:'11px',textTransform:'uppercase'}}>VIEW</a>
   </div>
       </div>
      </div>
      </div>
                  </div>
               </div>
               </div>
               <div className='col-8 col-md-6 col-sm-12 '>
               <h1 className='UnlockBadges'>Unlock Badges (Coming Soon)</h1>
               <div className='row'>
                  <div className='col-6 col-md  mb-3'>
                     <div className='card-imge'>
                        <img src="R.jpg" className="img-fluid rounded-top" alt="" style={{width:'144px',height:'146px',borderRadius:'4px',marginLeft:'18px'}}/>
                     </div>
                  </div>
                  <div className='col-6 col-md    mb-3'>
                  <div className='card-imge' >
                        <img src="R.jpg" className="img-fluid rounded-top" alt="" style={{width:'144px',height:'146px',borderRadius:'4px',marginLeft:'18px'}}/>
                     </div>
                  </div>
                  <div className='col-6 col-md   mb-3'>
                  <div className='card-imge'>
                        <img src="R.jpg" className="img-fluid rounded-top" alt="" style={{width:'144px',height:'146px',borderRadius:'4px',marginLeft:'18px'}}/>
                     </div>
                  </div>
               </div>
               </div>
               </div>
             <div className='row'>
               <div className='col-4 col-md-6 col-sm-12'>
             <h1 className="SuggestedBusinesses">Suggested Businesses</h1>
               </div>
               <div className='col-4 col-md-6 col-sm-12'>
                  <a href="" className="link" style={{width:'47px',height:'15px',fontWeight:'500px',fontSize:'13px',lineHeight:'15px',color: '#2B98A1',marginLeft:'450px'}}>View All</a>
               </div>
             </div>
               <div className='row g-0'>
                  <div className='col-8 col-md col-sm-8 p-2 '>
                  <Link href='/components/Submenu/SuggestedBusinesses/SuggestedBusinesses'>
                     <div className=" Suggestedcard" >
                     <img src="R1.jpg" className=" img " alt="..." width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'120px',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',height:'93px',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </Link>
                  </div>
                  <div className='col-8 col-md col-sm-8'>
                  <div className=" Suggestedcard" >
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm-6  p-2  pr-0'>
                  <div className="Suggestedcard" >
                     <img src="R1.jpg" className="img " alt="..." width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm-6  p-2  pr-0'>
                  <div className="Suggestedcard" >
                     <img src="R1.jpg" className="img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm-6  p-2  pr-0'>
                  <div className="Suggestedcard" >
                     <img src="R1.jpg" className="img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm-6 p-2  pr-0'>
                  <div className="Suggestedcard" >
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm  p-2  pr-0'>
                  <div className="Suggestedcard" >
                     <img src="R1.jpg" className="img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-8 col-md col-sm p-2  pr-0'>
                  <div className="Suggestedcard">
                     <img src="R1.jpg" className="img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title1" style={{width:'62px',height
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff',marginTop:'63px',marginLeft:'30px'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
               </div>
               <div className='row g-0'>
               <div className='col-8 col-md-6 col-sm-12'>
                  <h1 className='RecommendedOrganisers'>Recommended Organisers</h1>
               </div>
                  <div className='col-8 col-md-6 col-sm-12'>
                     <a href="" className="link"style={{width:'47px',height:'15px',fontWeight:'500px',fontSize:'13px',lineHeight:'15px',color: '#2B98A1',marginLeft:'450px'}}>View All</a>
                  </div>
               </div>
                <div className='row g-0 '>
                  <div className='col-5 col-md col-sm p-2  pr-0 '>
                     <Link href='/components/Submenu/AddNewTeam'>
                     <button type="button" className="Addbtn" style={{color:'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                        </svg>
                        <h5 className='AddNewOrganiser'>Add New Organiser</h5>
                     </button>
                     </Link>
                  </div>
                  <div className='col-5 col-md col-sm p-2  pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2  pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2 pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',
                     fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2 pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2 pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',
                     fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2 pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img " alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',
                     fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col-5 col-md col-sm p-2 pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="R1.jpg" className=" img" alt="..."width={120} height={93}/>
                     <div className="card-img-overlay">
                        <h5 className="card-title2" style={{width:'62px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            <div className='col-12 col-md-2 '>
               <div className='row g-0'>
                  <div className='col'>
                     <h1 className='LiveTournaments'>Live Tournaments</h1>
                     {/*<i class="fa-sharp fa-solid fa-signal-stream"></i>*/}
                     <div className='row g-0'>
                     <div className="card" style={{width:'236px',height: '80px',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row  row-cols-2">
                        <div className="col-6 col-md-6">
                           <img src="/R1.jpg" className="img-fluid " alt="..." style={{width:'63px',height:'61px',borderRadius:'4px',marginLeft:'',marginTop:'10px'}}/>
                        </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body">
                           <h5 className="card-title"style={{width:'58px',fontWeight:'600px',fontSize:'13px',lineHeight:'8px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'-38px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{width: '47.83px',height: '6.94px',marginLeft: '-38px',fontWeight: '300',fontSize: '6px',lineHeight: '9px',color: 'rgba(255, 255, 255, 0.47'}}>  2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row '>
                     <div className="card" style={{width:'236px',height: '80px',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row  row-cols-2">
                        <div className="col-6 col-md-6">
                           <img src="/R1.jpg" className="img-fluid " alt="..." style={{width:'63px',height:'61px',borderRadius:'4px',marginLeft:'',marginTop:'10px'}}/>
                        </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body">
                           <h5 className="card-title"style={{width:'58px',fontWeight:'600px',fontSize:'13px',lineHeight:'8px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'-38px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{width: '47.83px',height: '6.94px',marginLeft: '-38px',fontWeight: '300',fontSize: '6px',lineHeight: '9px',color: 'rgba(255, 255, 255, 0.47'}}>  2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row g-0'>
                     <div className="card" style={{width:'236px',height: '80px',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row  row-cols-2">
                        <div className="col-6 col-md-6">
                           <img src="/R1.jpg" className="img-fluid " alt="..." style={{width:'63px',height:'61px',borderRadius:'4px',marginLeft:'',marginTop:'10px'}}/>
                        </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body">
                           <h5 className="card-title"style={{width:'58px',fontWeight:'600px',fontSize:'13px',lineHeight:'8px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'-38px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{width: '47.83px',height: '6.94px',marginLeft: '-38px',fontWeight: '300',fontSize: '6px',lineHeight: '9px',color: 'rgba(255, 255, 255, 0.47'}}>  2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row g-0'>
                     <div className="card" style={{width:'236px',height: '80px',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row  row-cols-2">
                        <div className="col-6 col-md-6">
                           <img src="/R1.jpg" className="img-fluid " alt="..." style={{width:'63px',height:'61px',borderRadius:'4px',marginLeft:'',marginTop:'10px'}}/>
                        </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body">
                           <h5 className="card-title"style={{width:'58px',fontWeight:'600px',fontSize:'13px',lineHeight:'8px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'-38px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{width: '47.83px',height: '6.94px',marginLeft: '-38px',fontWeight: '300',fontSize: '6px',lineHeight: '9px',color: 'rgba(255, 255, 255, 0.47'}}>  2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row g-0'>
                     <div className="card" style={{width:'236px',height: '80px',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row  row-cols-2">
                        <div className="col-6 col-md-6">
                           <img src="/R1.jpg" className="img-fluid " alt="..." style={{width:'63px',height:'61px',borderRadius:'4px',marginLeft:'',marginTop:'10px'}}/>
                        </div>
                     <div className="col-6 col-md-6">
                        <div className="card-body">
                           <h5 className="card-title"style={{width:'58px',fontWeight:'600px',fontSize:'13px',lineHeight:'8px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'-38px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{width: '47.83px',height: '6.94px',marginLeft: '-38px',fontWeight: '300',fontSize: '6px',lineHeight: '9px',color: 'rgba(255, 255, 255, 0.47'}}>  2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OverView