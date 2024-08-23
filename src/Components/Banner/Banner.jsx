import React from 'react';
import bannerImg from '../../assets/banner.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    const handleViewList = () =>{
        navigate('/listedBooks')
    }

    return (
        <div className='mb-24'>
            <div className="bg-gray-100 mb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl px-6 py-12 md:px-12 md:py-16 lg:px-32 lg:py-20 gap-4 md:gap-12 lg:gap-20" style={{ background: 'rgba(19, 19, 19, 0.05)' }}>

                <div className="col-span-1 lg:col-span-2 text-base md:text-lg lg:text-xl flex flex-col justify-center items-start gap-12">

                    <h1 className="w-[526px] text-[#131313] text-[56px] font-bold font-playfair leading-[84px]">
                        Books to freshen up your bookshelf
                    </h1>

                    <div className="h-[55px] px-7 py-[18px] hover:bg-green-700 bg-[#23be0a] rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <button onClick={handleViewList} className="text-center text-white text-xl font-bold font-['Work Sans']">View The List</button>
                    </div>

                </div>

                <div className="col-span-1 flex items-center justify-center">
                    <img src={bannerImg} alt="Banner" className="w-full h-auto max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
