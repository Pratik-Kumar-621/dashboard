import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./screens/DashBoard/DashBoard";
import AddPosts from "./screens/AddPosts/AddPosts";
import BlogPost from "./screens/BlogPost/BlogPost";
import Error from "./screens/Errors/Error";
import FormsAndComponents from "./screens/FormsAndComponents/FormsAndComponents";
import Profile from "./screens/Profile/Profile";
import Tables from "./screens/Tables/Tables";
import PageStructure from "./screens/PageStructure";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <PageStructure children={<DashBoard />} />
        </Route>
        <Route exact path="/add-posts">
          <PageStructure children={<AddPosts />} />
        </Route>
        <Route exact path="/blog-posts">
          <PageStructure children={<BlogPost />} />
        </Route>
        <Route exact path="/form-and-component">
          <PageStructure children={<FormsAndComponents />} />
        </Route>
        <Route exact path="/table">
          <PageStructure children={<Tables />} />
        </Route>
        <Route exact path="/profile">
          <PageStructure children={<Profile />} />
        </Route>
        <Route exact path="/errors">
          <PageStructure children={<Error />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
