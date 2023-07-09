import React from 'react';

const page = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://th.bing.com/th/id/OIP.mZHJw2bZmY4lNGW_KWqBowAAAA?pid=ImgDet&rs=1" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default page;