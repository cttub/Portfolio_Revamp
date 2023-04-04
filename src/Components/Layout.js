import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Navigation/Nav';
import Mobile from './Navigation/Mobile';
const Layout = () => {
  return(
    <>
      <div className='d-lg-block d-none'><Nav /></div>

      <div className='d-lg-none d-block'>
          <Mobile/>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
