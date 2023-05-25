import React from 'react';
import Navigation from '../Component/Navigation';
import { Outlet } from 'react-router-dom';

const Recipes = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Recipes;