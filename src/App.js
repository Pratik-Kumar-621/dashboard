import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./screens/DashBoard/DashBoard";
import AddPosts from "./screens/AddPosts/AddPosts";
import BlogPost from "./screens/BlogPost/BlogPost";
import Error from "./screens/Errors/Error";
import FormsAndComponents from "./screens/FormsAndComponents/FormsAndComponents";
import Profile from "./screens/Profile/Profile";
import Tables from "./screens/Tables/Tables";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashBoard />
        </Route>
        <Route exact path="/blog-posts">
          <BlogPost />
        </Route>
        <Route exact path="/errors">
          <Error />
        </Route>
        <Route exact path="/form-and-component">
          <FormsAndComponents />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/table">
          <Tables />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
