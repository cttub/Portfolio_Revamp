import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Navigation/Nav';

const Layout = () => {
  return(
    <>
      <div className='d-lg-block d-none'><Nav /></div>
      <Outlet />
    </>
  );
};

export default Layout;
