import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
      axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes')
      .then(res =>{
          console.log(res)
          setPosts(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])


  return (
    <Fragment>
        <div className ="container" style={{ backgroundColor: "yellow", textAlign: "center", marginLeft: "250px", padding: "10px"  }}>
            <h1>Homes</h1>
        </div>
        
        {
        posts.map((post)=>(
            <div key={post.communityId} style={{ margin: '30px' }}>
                <div>{`Price: ${post.price}`}</div>
                <div>{`Area: ${post.area}`}</div>
                <div>{`Type: ${post.type}`}</div>
            </div>
        ))
        }
    </Fragment>
  );
}

export default Home;