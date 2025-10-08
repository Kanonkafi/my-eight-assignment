import React, { useEffect, useState } from 'react';
import downloadi from "../assets/icon-downloads.png";
import rattingi from "../assets/icon-ratings.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installed, setInstalled] = useState([])
     const [sortOrder, setSortOrder] = useState('none')

    useEffect(()=>{
      const savedAppList = JSON.parse(localStorage.getItem("installed"));
      if(savedAppList) setInstalled(savedAppList) 
    },[])

     // sorting er logic
     const parseDownloads = (val) => {
  if (typeof val === 'string' && val.endsWith('M')) {
    return parseFloat(val) * 1000000;
  } else if (typeof val === 'string' && val.endsWith('K')) {
    return parseFloat(val) * 1000;
  }
  return parseFloat(val);
};
     // app gulo short kortese boro theke soto
  const sortedInstalledApp = (() => {
    if (sortOrder === 'downloads-asc') {
      return [...installed].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads))
    } else if (sortOrder === 'downloads-desc') {
      return [...installed].sort((a, b) =>  parseDownloads(a.downloads) - parseDownloads(b.downloads))
    } else {
      return installed
    }
  })()

      //if(!installed.length) return <p className='text-2xl font-bold text-center mt-50'> No Apps Install In your Ui</p>

  // uninstall ba local stotage thek delete

 const handleUnintall=(id)=>{
    const existingAppList = JSON.parse(localStorage.getItem("installed"));
     let UpdateAppList = existingAppList.filter(a=> a.id !== id)
     // for ui instant update
    setInstalled( UpdateAppList)
     
    localStorage.setItem("installed", JSON.stringify(UpdateAppList));
     console.log("Uninstall successful, attempting to show toast."); 

        toast.success("App Uninstalled Successfully!" );
        
     }
  
   

    return (
        <div className=''>
            <ToastContainer/> 
           <div className='py-5 mx-auto px-4 sm:px-6 lg:px-8 bg-[#D9D9D9] '>
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

                <label>
                   <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by size</option>
            <option value='downloads-asc'>Low-High</option>
            <option value='downloads-desc'>High-Low</option>
          </select>    
                </label>
          
                </div>


                <div className='space-y-3'>
                  {sortedInstalledApp.map(a=>
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
          onClick={()=>handleUnintall(a.id)}
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