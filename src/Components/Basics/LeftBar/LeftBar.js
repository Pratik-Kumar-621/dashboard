import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftBar.scss";

const LeftBar = () => {
  return (
    <>
      <div className="left-bar">
        <div className="left-bar-header">Shards DashBoard</div>
        <div className="left-bar-nav">
          <NavLink
            to="/dashboard"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Blog Dashboard
          </NavLink>
          <NavLink
            to="/blog-posts"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="add-posts"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Add New Posts
          </NavLink>
          <NavLink
            to="form-and-component"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Forms & Components
          </NavLink>
          <NavLink
            to="table"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Tables
          </NavLink>
          <NavLink
            to="profile"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            User Profile
          </NavLink>
          <NavLink
            to="errors"
            className="left-bar-nav-item"
            activeClassName="active-nav-item"
          >
            Error
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
