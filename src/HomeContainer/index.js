import React from "react";


const HomeContainer =()=>{

    
        return(
            <div>         
                
            {/* =================================Home screen================================= */}
            <div id="myCarousel" className="carousel slide"  >
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

            <div className="carousel-inner">
                <div className="carousel-item active"  >
                    <img style={{width: 100 + '%', height:700 + 'px' }}  src="https://images.unsplash.com/photo-1551713804-f98912ce8085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="img"></img>
                  <div className="container">
                      <div className="carousel-caption text-left">
                          <h1>Dont't have an Account?</h1>
                          <p>your wonderful journey start here</p>
                          <p><a className="btn btn-lg btn-primary" href="/register" role="button">Join Now</a></p>
                      </div>
                  </div>
                </div>

                <div className="carousel-item">
                    <img style={{width: 100 + '%', height:700 + 'px' }}  src="https://images.unsplash.com/photo-1550542442-d5c354329585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1073&q=80" alt="img"></img>                   
                  <div className="container">
                      <div className="carousel-caption">
                          <h1>Already have an account ?</h1>
                          <p>Welcome back~~~</p>
                          <p><a className="btn btn-lg btn-primary" href="/login" role="button">Sign-in</a></p>
                      </div>
                  </div>
                </div>

                <div className="carousel-item">
                    <img style={{width: 100 + '%', height:700 + 'px' }}  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="img"></img>
                    
                    <div className="container">
                      <div className="carousel-caption text-right">
                          <h1>Wanna see more</h1>
                          <p>Beautiful, freee photos. Gift by the world's most generous community of photographers</p>
                          <p><a className="btn btn-lg btn-primary" href="/allpost" role="button">Browse gallery</a></p>
                      </div>
                    </div>
                </div>
              </div>

            {/* ========================Arrow to switch photos============================== */}
            
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
        </div>
        </div>
        )
    
}

export default HomeContainer;