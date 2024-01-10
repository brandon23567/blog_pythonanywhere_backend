import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import IndexPage from "./pages/IndexPage/IndexPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import BlogDetail from "./pages/BlogDetailPage/BlogDetail.jsx";
import UploadPost from "./pages/UploadPostPage/UploadPost.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
  	},
	{
		path: "/home",
		element: <HomePage />,
  	},
	{
		path: "/home/:slug",
		element: <BlogDetail />,
  	},
	{
		path: "/home/post_upload",
		element: <UploadPost />,
  	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    	<RouterProvider router={router} />
  	</React.StrictMode>
);
