import React  from 'react';

const AllPosts = (props) => {
    console.log("props in allpost",props.allposts)
    const allposts = props.allposts.map(post => {
        return <div key={post.id} className="img-container " >
                    <div className="thumbnail">
                        <img  src={post.imgUrl} alt="img"/>
                            <div >
                                
                                <h4>{post.title} </h4>

                                <small>Create by: {post.author}</small> 
                                
                                <p>{post.description}</p>
                                
                                
                            </div>
                    </div>
                </div>
    });
    
    return(
        
            
        <div >
            
            {allposts}
           
        </div>
            
        )
    
}

export default AllPosts;