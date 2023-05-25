import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Main = () => {
    const currentLocation = useLocation();
    const [pageTitle, setPageTitle] = useState('Home');
    const titleMap = [
        {path: '/', title:'Home'},
        {path: '/login', title:'Login'},
        {path: '/register', title:'Register'},
        {path: '/blog', title:'Blogs'},
        
      ]
      useEffect(() => {
        const currentTitle = titleMap.find(item => item.path === currentLocation.pathname)
        if(currentTitle && currentTitle.title){
          setPageTitle(currentTitle.title)
          document.title = currentTitle.title
        }
      }, [currentLocation])
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;