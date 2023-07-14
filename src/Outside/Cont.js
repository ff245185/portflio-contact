import React from 'react';
import './Cont.css'
const Cont = () => {
    return (
        <div className='cont1 grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2' >
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://e0.pxfuel.com/wallpapers/259/890/desktop-wallpaper-whatsapp-brand-resources-whatsapp-icon.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Whatsapp!</h2>
                    <p>you can contact  us on our whatsapp</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href='https://api.whatsapp.com/send/?phone=8801721348084&text&type=phone_number&app_absent=0'>contact us</a></button>
                    </div>
                </div>
            </div>

            {/* secend card */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://wallpaperaccess.com/full/2547005.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Facrbook</h2>
                    <p>you can contact  us on our facebook</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href='https://www.facebook.com/profile.php?id=100088709946078'>contact us</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cont;