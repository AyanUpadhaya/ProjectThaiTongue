import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import CarouselComponent from '../Component/CarouselComponent';
import Chef from '../Component/Chef';
import LatestRecipes from '../Component/LatestRecipes';
import Quotes from '../Component/Quotes';

const Home = () => {
    const location = useLocation();
    const chefs = useLoaderData()
    console.log(chefs);
    
    return (
        <div>
            <CarouselComponent></CarouselComponent>

            <div className="container-fluid mt-3 py-5">
                <h2 className="fw-bold text-center display-2">Meet The Master Chefs</h2>
                <div className="row gap-3 justify-content-center">
                    {
                        chefs.map(chef=><Chef key={chef.id} chef={chef}/>)
                    }
                   
                </div>

            </div>
            <LatestRecipes></LatestRecipes>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;