import React from "react";
import PostDetails from "./PostDetails.jsx";
class AllPosts extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="all-post">
        {
          this.props.posts.map((element,i)=>{
            return <PostDetails element={element} key={i} changeView={this.props.changeView}/>
          })
        }
      </div>
    );
  }
}

export default AllPosts;
