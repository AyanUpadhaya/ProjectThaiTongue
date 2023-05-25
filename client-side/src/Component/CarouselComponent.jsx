import React from 'react';
import { Button } from 'react-bootstrap';
import first from "./../assets/banner/first-image.jpg";
import second from "./../assets/banner/second-image.jpg"
import third from "./../assets/banner/third-image.jpeg";
const CarouselComponent = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active">
                <img src={first} className="d-block custom-img-size dark-filter" alt="Tom Yum Goong soup"/>
                <div className='text-center-image'>
                    <h2 className='display-2 text-white text-center fw-bold'>Tom Yum Goong Soup</h2>
                    <p className='text-center text-white'>
                        A handful of simple ingredients, the fresh, vibrant flavours of Thai Cooking
                    </p>
                    <Button variant='warning' className='d-block mx-auto text-white'>View Recipe</Button>
                </div>
                </div>
                <div className="carousel-item">
                <img src={second} className="d-block custom-img-size dark-filter" alt="Kaeng Lueang (Yellow Curry)"/>
                <div className='text-center-image'>
                    <h2 className='display-2 text-white text-center fw-bold'>Kaeng Lueang Yellow Curry</h2>
                    <p className='text-center text-white'>
                        A handful of simple ingredients, the fresh, vibrant flavours of Thai Cooking
                    </p>
                    <Button variant='warning' className='d-block mx-auto text-white'>View Recipe</Button>
                </div>
                </div>
                <div className="carousel-item">
                <img src={third} className="d-block custom-img-size dark-filter" alt="..."/>
                <div className='text-center-image'>
                    <h2 className='display-2 text-white text-center fw-bold'>Marion's curry noodle soup</h2>
                    <p className='text-center text-white'>
                        A handful of simple ingredients, the fresh, vibrant flavours of Thai Cooking
                    </p>
                    <Button variant='warning' className='d-block mx-auto text-white'>View Recipe</Button>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default CarouselComponent;