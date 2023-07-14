import React from 'react';
import './Demoss.css';
const Demoss = () => {
    return (
        <div className='cardss grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {/* 1 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/1.jpg?raw=true" alt="Shoes" /></figure>
               <button className="btn btn-primary"><a href='https://github.com/ff245185/payload/blob/main/screencapture-priceoye-pk-2023-07-11-01_49_38.png?raw=true'>Buy Now</a></button>
            </div>

            {/* 2 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/2.png?raw=true" alt="Shoes" /></figure>
            </div>

            {/* 3 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/3.jpg?raw=true" alt="Shoes" /></figure>
            </div>

            {/* 4 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/4.jpg?raw=true" alt="Shoes" /></figure>
            </div>

            {/* 5 */}
            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/5.png?raw=true" alt="Shoes" /></figure>
            </div>
            
            {/* 6 */}

            <div className="cardst w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://github.com/ff245185/payload/blob/main/4.jpg?raw=true" alt="Shoes" /></figure>
            </div>

            {/* 7 */}
            {/* 8 */}
            {/* 9 */}
        </div>
    );
};

export default Demoss;