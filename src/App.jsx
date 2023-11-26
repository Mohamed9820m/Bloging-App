import React from "react";

import AllPosts from "./components/AllPosts.jsx";
import Search from "./components/Search.jsx";
import dummy from "./data/exampleBlogData.js";
import $ from "jquery";
import CreatePost from "./components/CreatePost.jsx";
import OnePost from "./components/OnePost.jsx";

class App extends React.Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent, including its constructor.
    // super keyword must be used before the this keyword is used in constructor .
    super(props);
    //Invoking super() calls the parent class constructor. If you want to pass some arguments in a class's constructor to its parent's constructor, you call it with super(arguments).
    this.state = {
      posts: dummy,
      username: window.location.search.substring(10), //DO NOT EDIT THIS LINE
      view: "allPosts",
      clickedPosts: {},
    };
    this.changeView = this.changeView.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
  fetch() {
    $.ajax({
      url: "https://react-blogging-app.onrender.com/api/blogs",
      type: "GET",
      contentType: "application/json",
      success: (data) => {
        this.setState({
          posts: data.filter(
            (e) => e.title && e.author && e.body && e.imageUrl
          ),
        });
      },
      error: function (error) {
        console.error("blog: Failed to fetch blogs", error);
      },
    });
  }
  componentDidMount() {
    this.fetch();
  }

  handlePost(blog) {
    $.ajax({
      url: "https://react-blogging-app.onrender.com/api/blogs",
      type: "POST",
      data: JSON.stringify(blog),
      contentType: "application/json",
      success: (data) => {
        console.log(data);
      },
      error: function (error) {
        console.error("blog: Failed to create blog", error);
      },
    });
    // create a get request to update the post state
    this.fetch();
  }
  handleSearch(name) {
    console.log(name);
    $.ajax({
      url: `https://react-blogging-app.onrender.com/api/blogs/${name}`,
      type: "GET",
      contentType: "application/json",
      success: (data) => {
        this.setState({ posts: data });
      },
      error: function (error) {
        console.error("blog: Failed to fetch blogs", error);
      },
    });
  }
  changeView(view, posts) {
    this.setState({
      view: view,
      clickedPosts: posts,
    });
  }

  renderView() {
    if (this.state.view === "allPosts") {
      return <AllPosts posts={this.state.posts} changeView={this.changeView} />;
    } else if (this.state.view === "onePost") {
      return <OnePost clickedPosts={this.state.clickedPosts} />;
    } else if (this.state.view === "createPost") {
      return <CreatePost handlePost={this.handlePost} />;
    }
  }

  render() {
    return (
      <div>
        <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.changeView("createPost");
            }}
          >
            Create Post
          </div>
          <div
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("allPosts")}
          >
            All Posts
          </div>
          <div>
            <Search handleSearch={this.handleSearch} />
          </div>
        </nav>

        {this.renderView()}
      </div>
    );
  }
}

export default App;
