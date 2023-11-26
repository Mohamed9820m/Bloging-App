import React from "react";
import moment from 'moment';

const PostDetails = ({element , changeView}) => (
  <div className="blog-list-item">
      <div className="blog-list-item-title" onClick={()=>changeView("onePost",element)}>{element.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> {element.author} </span>
        {moment(element.published_at).fromNow()}
      </div>
      <div className="blog-list-item-lede">
        <img src={element.imageUrl} alt="no content" />
      </div>
    </div>
);

export default PostDetails;