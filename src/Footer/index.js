import React from "react";

const Footer =()=>{
        return(
            <div>
                <footer style={{bottom: 0 + 'px'}} className="footer py-3 mt-auto bg-light ">
                    < div className="container flex flex-row">
                    <p className="float-right">
                        <a href="/">Back to HomePage</a>
                    </p>
                    <a href="https://git.generalassemb.ly/ZihaoZ"><span><i className="fab fa-github"></i><small>Zihao Zheng</small></span></a>
                    
                    <p> &copy; Project-5  </p>
                    
                    </div>
                </footer>
            </div>
        )
    
}

export default Footer;