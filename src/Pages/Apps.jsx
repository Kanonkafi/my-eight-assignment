import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import LoadingSpinners from '../Componant/LoadingSpinners';
import AppsCards from '../Componant/AppsCards';
import AppserBanner from '../Componant/AppserBanner';

const Apps = () => {
    const {apps,loading}=useApps()
    
  const [search, setSearch] = useState('')
   const [searchLoading, setSearchLoading] = useState(false); //  state for search loading

  const term = search.trim().toLocaleLowerCase()

  // search deyer somoi lodig dekhabe e jonno eti add korse
  useEffect(() => {
    if (term) {
      setSearchLoading(true);
      const timer = setTimeout(() => setSearchLoading(false), 600); // 0.6s delay
      return () => clearTimeout(timer);
    } else {
      setSearchLoading(false);
    }
  }, [term]);

  const searchApps = term
    ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps
       // jodi vul kisu type kori sejono
       const isSearchEmpty = term && searchApps.length === 0;

    return (
        <div className='bg-[#D9D9D9] p-6 '>
              <div>
              <AppserBanner/>
               </div>

           <div className='flex justify-between py-5 items-center'>
           <h1 className='text-3xl font-semibold'>
             <span className='text-gray-500'>
              ({searchApps.length}) Apps Found.
              </span>
           </h1>
                 <label className='input'>
                <input
               value={search}
                onChange={e => setSearch(e.target.value)}
               type='search'
                placeholder='Search Products'
                 />
              </label>
           </div>
           {
              loading || searchLoading? 
              (
                < LoadingSpinners/>
              ): isSearchEmpty ? (
                    <div className='flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-md'>
                        <p className='text-4xl text-gray-700 font-bold mb-4'>
                         Apps Not Found!
                        </p>
                        <p className='text-gray-600 text-lg'>
                            Try searching for another name.
                        </p>
                    </div>

              ):
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {searchApps.map(app => (
                <AppsCards key={app.id} app={app} />
                  ))}
             </div>
             }

    </div>
    );
};

export default Apps;