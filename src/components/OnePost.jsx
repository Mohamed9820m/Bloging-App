import React from "react";
import moment from "moment";
import parse from 'html-react-parser';
const OnePost = (props) => (
  <div className="blog-list-item" >
    <div className="blog-list-item-title">{props.clickedPosts.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> {props.clickedPosts.author}</span>
      {moment(props.clickedPosts.published_at).fromNow()}
    </div>
    <div className="blog-list-item-lede">{parse(`${props.clickedPosts.content}`)} </div>
  </div>
);

export default OnePost;