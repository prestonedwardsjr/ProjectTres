import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import ServiceRequest from './views/CreateServiceRequest';
import Register from './views/Register';
import Login from './views/Login';
import FileManagerList from './views/FileManagerList';
import FileManagerCards from "./views/FileManagerCards";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  // {
  //   path: "/blog-overview",
  //   layout: DefaultLayout,
  //   component: BlogOverview
  // },
  {
    path: "/file-manager-list",
    layout: DefaultLayout,
    component: FileManagerList
  },
  // {
  //   path: "/service-request",
  //   layout: DefaultLayout,
  //   component: ServiceRequest
  // },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: Register
  },
  {
    path: "/file-manager-cards",
    layout: DefaultLayout,
    component: FileManagerCards
  },
  // {
  //   path: "/fileManagerList",
  //   layout: DefaultLayout,
  //   component: FileManagerList
  // },
];