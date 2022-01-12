import React from 'react';
import '../Dashboard.css'
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import ReviewForm from '../ReviewForm/ReviewForm';
import useAuth from '../../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../../../AdminRoute/AdminRoute';

const Dashboard = () => {
  const [isHide, setIsHide] = useState(true)
  const { path, url } = useRouteMatch();
  const { singOutuser, admin } = useAuth()

  const handleHide = () => {
    setIsHide(!isHide)
  }

  const activeStyle = {
    color: "#008cff"
  }

  return (
    <div className='pt-28 pb-12'>
      <div className="small-container">
        <div onClick={handleHide} className='p-2 rounded-sm bg-blue text-white sideMenu text-lg'><AiOutlineBars /></div>
        <div className="dashBoardRow flex">
          <div className={isHide ? "left min-h-screen bg-seconDary_bg hide" : "left min-h-screen bg-seconDary_bg"}>
            <h1 className='text-white bg-blue text-xl font-semibold p-2 text-center'>Dashboard</h1>
            <ul className=''>
              {
                !admin ? <div>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}/payment`} className='text-primary_text w-full h-full block'>Payment</NavLink>
                  </li>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={url} className='text-primary_text w-full h-full block'>My Orders</NavLink>
                  </li>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}/review`} className='text-primary_text w-full h-full block'>Review</NavLink>
                  </li>
                </div> : <div>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}`} className='text-primary_text w-full h-full block'>Manage All Orders</NavLink>
                  </li>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}/addproduct`} className='text-primary_text w-full h-full block'>Add A Product</NavLink>
                  </li>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}/makeadmin`} className='text-primary_text w-full h-full block'>Make Admin</NavLink>
                  </li>
                  <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                    <NavLink onClick={handleHide} activeStyle={activeStyle} to={`${url}/manageproduct`} className='text-primary_text w-full h-full block'>Manage Products</NavLink>
                  </li>
                </div>
              }
              <li className='text-lg font-medium px-3 py-2.5 sideItem'>
                <button onClick={singOutuser} className='text-primary_text w-full h-full block text-left'>LogOut</button>
              </li>
            </ul>
          </div>
          <div className="right min-h-screen bg-light p-4">
            <Switch>
              {
                admin ? <AdminRoute exact path={`${path}`}>
                  <AllOrders />
                </AdminRoute> : <Route exact path={path}>
                  <MyOrders />
                </Route>
              }
              <Route path={`${path}/payment`}>
                <Payment />
              </Route>
              <Route path={`${path}/review`}>
                <ReviewForm />
              </Route>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProduct />
              </AdminRoute>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin />
              </AdminRoute>
              <AdminRoute path={`${path}/manageproduct`}>
                <ManageProduct />
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;