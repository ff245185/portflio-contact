import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div  className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.ivanti.com/sites/marketing/media/images/solutions/it-service/improve-it-service-delivery.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold"><span className='wlc'>Welcome </span> to our agency</h1>
                    <p className="py-6">We provide multipal service. web development & seo and digital marckting service we provides</p>
                    <Link className='btn' to={"/contact"}>Contact us</Link>
                </div>
            </div>
         
        </div>
        
    );
};

export default Home;