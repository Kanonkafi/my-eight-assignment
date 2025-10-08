import React from 'react';
import downloadsi from "../assets/icon-downloads.png";
import rattingi from "../assets/icon-ratings.png";
import { Link } from 'react-router';
const AppsCards = ({app}) => {
    const {image,title,downloads,ratingAvg,id} =app
    return (
        
    <div>
        <Link to={`/app/${id}`}>
        
        <div className="bg-white p-4 rounded-lg shadow-sm hover:scale-105 transition ease-in-out">
            <div className="w-full aspect-square md:aspect-[7/5] bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                <img src={image} alt={`${app.title} Icon`} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-900 font-medium text-base mb-2 truncate">
                {title}
            </p>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-1 bg-[#F1F5E8] rounded-2xl px-2">
                    
                    <img src={downloadsi} alt="Download Icon" className="h-4 w-4" /> 
                    <span className=' text-[#00D390] '>{downloads}</span>
                </div>
                <div className="flex items-center space-x-1 bg-[#FFF0E1] rounded-2xl px-2">
                    <div className="flex items-center space-x-1">
                   
                    <img src={ rattingi} alt="Download Icon" className="h-4 w-4" /> 
                    <span className='text-orange-400'>{ratingAvg}</span>
                </div>
                </div>
            </div>
        </div>  
           
        </Link>
          


    </div>
    );
};

export default AppsCards;