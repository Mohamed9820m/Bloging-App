import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import AllPosts from "../components/AllPosts";
import CreatePost from "../components/CreatePost";
import OnePost from "../components/OnePost";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/createPost" component={CreatePost} exact />
        <Route path="/posts" component={AllPosts} exact />
        <Route path="/posts/:postId" component={OnePost} exact />
      </Switch>
    </Fragment>
  );
};

export default Routes;
