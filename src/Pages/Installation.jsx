import React, { useEffect, useState } from 'react';
import downloadi from "../assets/icon-downloads.png";
import rattingi from "../assets/icon-ratings.png";

const Installation = () => {
    const [installed, setInstalled] = useState([])
    useEffect(()=>{
      const savedAppList = JSON.parse(localStorage.getItem("installed"));
      if(savedAppList) setInstalled(savedAppList) 
    },[])

    return (
        <div className='bg-[#D9D9D9]'>
           <div className='py-5 mx-auto px-4 sm:px-6 lg:px-8 '>
            <h1 className='text-3xl font-semibold text-center p'>Your Installed Apps</h1>
            <h1 className='text-center text-gray-500 font-semibold'>Explore All Apps on the Market developed by us. We code for Millions</h1>
           </div>

          <div className='space-y-6'>
               <div className='flex justify-between py-5 items-center'>
                      <h1 className='text-3xl font-semibold'>
                       {' '}
                       <span className='text-l text-black'>
                      ({installed.length}) Apps Found.
                       </span>
                     </h1>
                     <button>sort</button>
                </div>


                <div className='space-y-3'>
                  {installed.map(a=>
                   <div
      key={a.id}
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all hover:shadow-md"
    >
      {/* Left part */}
      <div className="flex items-center space-x-4">
        {/* App Image */}
        <div className="w-14 h-14 rounded-md flex-shrink-0 overflow-hidden bg-gray-200">
          <img
            src={a.image} // api image ekhane boshbe
            alt={a.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* App Info */}
        <div>
          <h2 className="text-[16px] font-semibold text-[#0E1E25]">{a.title}</h2>
          <div className="flex flex-wrap items-center gap-x-3 mt-1 text-sm text-gray-600">
            {/* Downloads */}
            <div className="flex items-center space-x-1">
              <img src={downloadi} alt="downloads" className="w-4 h-4" />
              <span>{a.downloads}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <img src={rattingi} alt="rating" className="w-4 h-4" />
              <span>{a.ratingAvg}</span>
            </div>

            {/* Size */}
            <span>{a.size} MB</span>
          </div>
        </div>
      </div>

      {/* Right part */}
      <div className="mt-4 sm:mt-0">
        <button
          className="bg-[#00D084] hover:bg-[#00b86b] text-white text-sm font-semibold py-2 px-5 rounded-md transition-all"
          
        >
          Uninstall
        </button>
      </div>
    </div> 
                  

                )}  
               </div>









            </div>
            
               

            


        </div>
        
    );
};

export default Installation;