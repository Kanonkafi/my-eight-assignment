import React from 'react';
import Banner from '../Componant/Banner';
import {Link } from 'react-router';
 
import AppsCards from '../Componant/AppsCards';
import useApps from '../Hooks/useApps';
import LoadingSpinners from '../Componant/LoadingSpinners';

//import useApps from '../Hooks/useApps';

const Home = () => {
    const {apps, loading,}=useApps()
    const trendingApps = apps.slice(0, 8)
    return (
        <div>
            <div>
               <Banner/>
            </div>

           <div className='py-5 mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 '>
            <h1 className='text-3xl font-semibold text-center p'>Trending Apps</h1>
            <h1 className='text-center text-gray-500 font-semibold'>Explore All Trending Apps on the Market developed by us</h1>
            </div>

             {
              loading ? 
              (
                < LoadingSpinners/>
              ): 
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {trendingApps.map(app => (
                <AppsCards key={app.id} app={app} />
                  ))}
             </div>
             }
            

              <div className="text-center mt-[25px]">
                <Link to='/apps'
                    className={`
                        bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-3 px-8 rounded-lg 
                        shadow-md transition duration-300 ease-in-out`}
                    
                >
                    Show All
                </Link>
            </div>

        </div>
        
        
        
            
    );
};

export default Home;