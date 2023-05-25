import React from 'react';
import Navigation from './Navigation';
import CarouselComponent from './CarouselComponent';


const Header = () => {
    return (
        <div className='bg-light'>
            <div className="container bg-light">
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default Header;