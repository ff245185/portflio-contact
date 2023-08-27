import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='infodiv grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1'>
            {/* fast card */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://e0.pxfuel.com/wallpapers/259/890/desktop-wallpaper-whatsapp-brand-resources-whatsapp-icon.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Whatsapp!</h2>
                    <p>you can contact  us on our whatsapp</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href='https://api.whatsapp.com/send/?phone=8801721348084&text&type=phone_number&app_absent=0'>contact us</a></button>
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
                        <button className="btn btn-primary"><a target="_blank" href='https://www.facebook.com/profile.php?id=100088709946078'>contact us</a></button>
                    </div>
                </div>
            </div>
            {/* third card */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://parade.com/.image/t_share/MTkzNjU1MzMxNTg1MjcxMjM1/quitting-twitter.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Twitter</h2>
                    <p>you can contact  us on our twitter</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href='https://twitter.com/mdabdullahal21'>contact us</a></button>
                    </div>
                </div>
            </div>
            {/* fourd card */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://c.files.bbci.co.uk/1CC9/production/_126096370_gettyimages-1239414252.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">instgram</h2>
                    <p>you can contact  us on our instgram</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> <a target="_blank" href='https://www.instagram.com/musicfunetc626'>contact us</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;