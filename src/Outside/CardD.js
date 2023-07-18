import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const CardD = () => {
    return (
        <div className='lip grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {/* 1 */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">web service</h2>
                    <p>We understand that your organization requires a dynamic..</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={'/web'}>learn more...</Link></button>
                    </div>
                </div>
            </div>

            {/* 2 */}

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.oberlo.com/media/1603954182-seo-article-header.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Seo</h2>
                    <p>We understand that your organization aims to enhance...</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={'/seo'}>learn more...</Link></button>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://marketbusinessnews.com/wp-content/uploads/2018/08/Digital-Marketing.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={'/web'}>learn more...</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardD;