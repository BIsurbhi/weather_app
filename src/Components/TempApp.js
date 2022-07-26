import React, { useEffect, useState } from 'react';
import './Temp.css';
import {FaStreetView} from 'react-icons/fa';

export const TempApp = () => {
    const [city, setCity] = useState(null)
    const [ search, setSearch] = useState('Indore')

    useEffect(()=> {
        const fetchApi = async()=> {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3a227716715976e8ebf37e8772f06731`
          const response = await fetch(url);
          const resjson = await response.json();
          //console.log(resjson)
          setCity(resjson.main)
        }
        fetchApi()
    }, [search])
  return (
    <>
    <div className='box'>
        <div className='heading'>
            <h1>Live Weather Report</h1>
        </div>
        <div className='inputData'>
         <input 
         type='search'
         value={search}
         className='inputField'
         onChange={(event)=>{setSearch(event.target.value)} }
         />
        </div>
{!city ? (
    <p className='errorMsg'> No Data Found </p>
 )  : (<div>
<div className='info'>
            <h2 className='location'> <FaStreetView  style={{marginRight:'1rem'}}/>{ search}</h2>
            <h1 className='temp'>{city.temp} °cel</h1>
            <h3 className='tempmin_max'>Min : {city.temp_min} °cel | Max : {city.temp_max} °cel </h3>
            
        </div>

        <div className='wave '></div>
       
 </div>)
}
        
    </div>
    </>
  )
}
