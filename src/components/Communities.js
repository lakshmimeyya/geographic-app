import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";


function Communities() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState([]);

  useEffect(()=>{
      setLoading(true);
      axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities')
      .then(res =>{
          setPosts(res.data.sort((a,b)=> a.name.localeCompare(b.name)));
          setLoading(false);
        })
       .catch(err => {
          console.log(err)
      });
  }, []);

  useEffect(() => {
    setFilteredCommunities(
      posts.filter((post) =>
        post.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  if (loading) {
    return <p>Loading communities...</p>;
  }


  return (
    <Fragment>
        
        <div className ="container" style={{ backgroundColor: "yellow", textAlign: "center", marginLeft: "250px", padding: "10px"  }}>
            <h1>Communities</h1>
            <input
            type="text"
            placeholder="Search Communities"
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
       
        {
        filteredCommunities.map((post, id)=>(
            <CommunityDetail key={id} {...post} />

        ))
        }
    </Fragment>
  );
}

const CommunityDetail = (props) => {

    const { name,imgUrl, group } = props;
  
    return (
      <>
        <div className="row" style={{ display:"inline-block" }}>
            <div className="col" style={{ padding:"50px" }} >
                
                <img src={imgUrl} style={{ width: "250", height: "200px" }} />
        
                <h5>{name} - {group}</h5>

            </div>

        </div>
      </>
    );
  };

export default Communities;