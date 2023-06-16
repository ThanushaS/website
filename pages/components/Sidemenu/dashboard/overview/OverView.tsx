import React from 'react'
import Link from 'next/link'
import Search from '../../../Search/Search'
import Pagination from '../../../Pagination'
const OverView = () => {
  return (
   <div className='container'>
   <h1 className='overview'>Over View</h1>
   <Search/>
   <Pagination/>
   <div className='container'>
      <h1 className='overview'>Over View</h1>
         <div className='row ' style={{marginTop:'114px',marginLeft:''}}>
            <div className='col-12 col-md-4 col-sm-12 border'>
            <div className="card" style={{width:'',height:'112px',marginLeft:'px',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41)',positionLeft:''}}>
                              <div className="card-body">
                                   <i className="bcion bi bi-handbag-fill"></i> $0.0
                                   <p  className="Earnings">Earnings</p>
                                   <a href="#" className="card-link">Check Income History</a>
                                   <div className="text-primary"></div>
                              </div>
                         </div>
            </div>
            <div className='col-12 col-md-4 col-sm-12 border'>
            <div className="card" style={{width:'',height:'112px',marginLeft:'px',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41',position:''}}>
                              <div className="card-body">
                                   <i className="bcion bi bi-handbag-fill"></i> $0.0
                                   <p  className="Earnings">Earnings</p>
                                   <a href="#" className="card-link">Check Income History</a>
                                   <div className="text-primary"></div>
                              </div>
                         </div>
            </div>
            <div className='col-12 col-md-4 col-sm-12 border'>
            <div className="card" style={{width:'px',height:'112px',marginLeft:'px',marginTop:'px', borderRadius:'4px',background:'rgba(0, 0, 0, 0.41',position:''}}>
                              <div className="card-body">
                                   <i className="bcion bi bi-handbag-fill"></i> $0.0
                                   <p  className="Earnings">Earnings</p>
                                   <a href="#" className="card-link">Check Income History</a>
                                   <div className="text-primary"></div>
                              </div>
                         </div>
            </div>
         </div>
         <div className='row'>

            <div className='col border'>
               <div className='row'>
                  <div className='col-md-6 col-sm-12 border'>
         <h1 className='feed' style={{position:'',width:'319px',height:'26px',left:'114px',top:'270px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'800px',fontSize:'22px',lineHeight:'26px',color:'#fffffff'}}>Feed / Notifications / Invitations</h1>
                  </div>
                  <div className='col-12 col-md-6 col-sm-12 border'>
                  <h1 className='ParticipatingTournaments'>Participating Tournaments</h1>
                     <div className='row'>
                        <div className='col- col-md-6 col-sm-12 border'> 
                        <Link href='/participatingTournaments'>
                              <div className="card mb-3 p-2" style={{width:'250px',height:'112px',background:' rgba(0, 0, 0, 0.41)'}}>
                                        <div className="row g-0">
                                             <div className="col-md-2">
                                                  <img src="g.jpg" className="img" alt="..." style={{width:'93px',height:'92px',background:' rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}/>
                                             </div>
                                             <div className="col">
                                                  <div className="card-body">
                                                       <h5 className="card-title">game</h5>
                                                       <p className="card-text">Game:acrjsaia</p>
                                                       <i className="bi bi-calendar3 " style={{}}> 2023 May 23</i>
                                                  </div>
                                             </div>
                                        </div>
                              </div>
                           </Link>
                        </div>
                        <div className='col- col-md-6 col-sm-12 border'> 
                              <div className="card mb-3 p-2" style={{width:'250px',height:'112px',background:' rgba(0, 0, 0, 0.41)'}}>
                                        <div className="row g-0">
                                             <div className="col-md-2">
                                                  <img src="g.jpg" className="img" alt="..." style={{width:'93px',height:'92px',background:' rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}/>
                                             </div>
                                             <div className="col-md-2">
                                                  <div className="card-body">
                                                       <h5 className="card-title">Card title</h5>
                                                       <p className="card-text">Game:acrjsaia</p>
                                                       <i className="bi bi-calendar3 " style={{}}> 2023 May 23</i>
                                                  </div>
                                             </div>
                                        </div>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='row'>
               <div className='col-12 col-md-6 col-sm-12 border'>
               <h1 className='SponsorPerks'>Suggested Sponsor Perks</h1>
               <div className='row'style={{marginTop:'40px'}}>
                  <div className='col-6 col-lg-4 col-md-6 col-sm-12 border'>
                     <div className="card mb-3" style={{height:'168.94px',left:'px',width:'151.97px',top:'',position:'relative',background:'rgba(19, 26, 37, 0.85)',borderRadius:'4px'}}>
                        <div className="img">
                         <img src="oip.jpg"className='img' style={{width:'142px',height:'72px',borderRadius:'4px',left:'',top:'',position:'relative',transform: 'translateY(-40px)',paddingLeft:'10px'}}/>
                        </div>
                        <div className="card-body">
                        <div className="dollar mt-"style={{marginTop:'',}}>$222</div>
                        <h5 className=' Displaybanner'style={{position: '',width: '81px',height:'28px',fontFamily:'roboto',fontStyle:'normal',fontWeight:'600',fontSize:'12px',lineHeight:'14px',textDecoration:'capitalize', color:'#ffffff',marginTop:'-9px'}}>Display banner opportunities</h5>
                        <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        <p className='card-text-brand brand-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
                      
                        <a href="#" className="btn signincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '69.14px',background: '#2199C1',borderRadius: '32px'}}>Add to cart</a>
                        <a href="#" className="btn signinview">VIEW</a>
                        </div>
                     </div>
                  </div>
                  <div className='col-6 col-lg-4 col-md-6 col-sm-12 border'>
               <div className="card mb-3" style={{height:'168.94px',left:'px',width:'151.97px',top:'',position:'relative',background:'rgba(19, 26, 37, 0.85)',borderRadius:'4px'}}>
                        <div className="img">
                         <img src="oip.jpg"className='img' style={{width:'142px',height:'72px',borderRadius:'4px',left:'',top:'',position:'relative',transform: 'translateY(-40px)',paddingLeft:'10px'}}/>
                        </div>
                        <div className="card-body">
                        <div className="dollar mt-"style={{marginTop:'',}}>$222</div>
                        <h5 className=' Displaybanner'style={{position: '',width: '81px',height:'28px',fontFamily:'roboto',fontStyle:'normal',fontWeight:'600',fontSize:'12px',lineHeight:'14px',textDecoration:'capitalize', color:'#ffffff',marginTop:'-9px'}}>Display banner opportunities</h5>
                        <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        <p className='card-text-brand brand-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
                      
                        <a href="#" className="btn signincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '69.14px',background: '#2199C1',borderRadius: '32px'}}>Add to cart</a>
                        <a href="#" className="btn signinview">VIEW</a>
                        </div>
                     </div>
                  </div>
                  <div className='col-6 col-lg-4 col-md-4 col-sm-12 border'>
                  <div className="card mb-3" style={{height:'168.94px',left:'px',width:'151.97px',top:'',position:'relative',background:'rgba(19, 26, 37, 0.85)',borderRadius:'4px'}}>
                        <div className="img">
                         <img src="b.jpg"className='img' style={{width:'142px',height:'72px',borderRadius:'4px',left:'',top:'',position:'relative',transform: 'translateY(-40px)',paddingLeft:'10px'}}/>
                        </div>
                        <div className="card-body">
                        <div className="dollar mt-"style={{marginTop:'',}}>$222</div>
                        <h5 className=' Displaybanner'style={{position: '',width: '81px',height:'28px',fontFamily:'roboto',fontStyle:'normal',fontWeight:'600',fontSize:'12px',lineHeight:'14px',textDecoration:'capitalize', color:'#ffffff',marginTop:'-9px'}}>Display banner opportunities</h5>
                        <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        <p className='card-text-brand brand-text'> We will place your logo/ profile image and add backlink to your profile/ website /server on EsportsPro Sponsor section.</p>
                      
                        <a href="#" className="btn signincart" style={{position: 'relative',width: '63.92px',height: '19.98px',top: '69.14px',background: '#2199C1',borderRadius: '32px'}}>Add to cart</a>
                        <a href="#" className="btn signinview">VIEW</a>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
               <div className='col-12 col-md-6 col-sm-12 border'>
               <h1 className='UnlockBadges'>Unlock Badges (Coming Soon)</h1>
               <div className='row'>
                  <div className='col-4 col-lg-3 col-md-4 col-sm-12 border'>
                     <div className='card-imge'>
                        <img src="g1.jpg" className="img-fluid rounded-top" alt=""/>
                     </div>
                  </div>
                  <div className='col-4 col-lg-3 col-md-4 col-sm-12 border'>
                  <div className='card-imge'>
                        <img src="g2.jpg" className="img-fluid rounded-top" alt=""/>
                     </div>
                  </div>
                  <div className='col-4 col-lg-3 col-md-4 col-sm-12 border'>
                  <div className='card-imge'>
                        <img src="g3.jpg" className="img-fluid rounded-top" alt=""/>
                     </div>
                  </div>
               </div>
               </div>
               </div>
             <div className='row'>
               <div className='col'>
             <h1 className="SuggestedBusinesses">Suggested Businesses</h1>
               </div>
               <div className='col'>
                  <a href="" className="link">View All</a>
               </div>
             </div>
               <div className='row'>
                  <div className='col p-2 border pr-0 '>
                  <Link href='/SuggestedBusinesses'>
                     <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </Link>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0'>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className="card-img img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
               </div>
               <div className='row border'>
               <div className='col'>
                  <h1 className='RecommendedOrganisers'>Recommended Organisers</h1>
               </div>
                  <div className='col'>
                     <a href="" className="link">View All</a>
                  </div>
               </div>
                <div className='row'>
                  <div className='col border p-2 '>
                     <Link href='/AddNewTeam'>
                     <button type="button" className="cir">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                        </svg>
                     </button>
                     </Link>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
                  <div className='col p-2 border pr-0 '>
                  <div className="card" style={{width:'100px',height:'93px',background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',borderRadius: '4px'}}>
                     <img src="g.jpg" className=" img-fluid " alt="..."/>
                     <div className="card-img-overlay">
                        <h5 class="card-title" style={{width:'62px',heigh
                     :'12px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'10px',lineHeight:'12px',textDecoration:'capitalize',color:'#ffffff'}}>Public Library</h5>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            <div className='col-12 col-md-2 border'>
               <div className='row rowborder'>
                  <div className='col'>
                     <h1 className='LiveTournaments'>Live Tournaments</h1>
                     <div className='row border'>
                     <div class="card mb-3" style={{width: '',position:'',height: '',left: '',top: '',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row ">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                           <img src="g1.jpg" className="img-fluid p-2 rounded-start" alt="..."/>
                        </div>
                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 class="card-title"style={{width:'58px',heigh:'15px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'13px',lineHeight:'15px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'1px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row border'>
                     <div class="card mb-3" style={{width: '',position:'',height: '',left: '',top: '',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row ">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                           <img src="g1.jpg" className="img-fluid p-2 rounded-start" alt="..."/>
                        </div>
                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 class="card-title"style={{width:'58px',heigh:'15px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'13px',lineHeight:'15px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'1px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row border'>
                     <div class="card mb-3" style={{width: '',position:'',height: '',left: '',top: '',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row ">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                           <img src="g1.jpg" className="img-fluid p-2 rounded-start" alt="..."/>
                        </div>
                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 class="card-title"style={{width:'58px',heigh:'15px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'13px',lineHeight:'15px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'1px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row border'>
                     <div class="card mb-3" style={{width: '',position:'',height: '',left: '',top: '',background: 'rgba(0, 0, 0, 0.41)',borderRadius: '4px'}}>
                     <div className="row ">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                           <img src="g1.jpg" className="img-fluid p-2 rounded-start" alt="..."/>
                        </div>
                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 class="card-title"style={{width:'58px',heigh:'15px',fontFamily:'Roboto',fontStyle:'normal',fontWeight:'600px',fontSize:'13px',lineHeight:'15px',textDecoration:'capitalize',color:'#ffffff',marginLeft:'1px'}}>Coffe Day</h5>
                           <i className="bi bi-calendar3 " style={{position: '',width: '47.83px',height: '6.94px',left: '135.6px',marginTop: '-10px',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: '300',fontSize: '6px',lineHeight: '7px',color: 'rgba(255, 255, 255, 0.47'}}> 2023 May 23</i>
                        </div>
                     </div>
                  </div>
                  </div>
                     </div>
                     <div className='row border'>
                        <div className='col' style={{width:'236px',height:'311px', background:'#ffffff',borderRadius:'4px'}}>
                           <img src="wp.jpg" className="img-fluid" alt=""/>
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