import React from 'react';
import './Demoss.css';
const Demoss = () => {
    return (
        <div className='cardss grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {/* 1 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://athemes.com/wp-content/uploads/Wieldy-React-Admin-Template.jpg" alt="Shoes" /></figure>
               <button className="btn btn-primary"><a href='https://github.com/ff245185/payload/blob/main/screencapture-priceoye-pk-2023-07-11-01_49_38.png?raw=true'>Buy Now</a></button>
            </div>

            {/* 2 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0869819.png?v=6.0" alt="Shoes" /></figure>
            </div>

            {/* 3 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://store-wp.mui.com/wp-content/uploads/2023/04/berry-mui-store-preview.png" alt="Shoes" /></figure>
            </div>

            {/* 4 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            </div>

            {/* 5 */}
            {/* 6 */}
            {/* 7 */}
            {/* 8 */}
            {/* 9 */}
        </div>
    );
};

export default Demoss;