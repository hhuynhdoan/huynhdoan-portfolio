import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './_weather.scss';
import axios from 'axios';

export const Weather = () => {
    
    const [latitude, setLatitude] = useState('10.805593236167805');
    const [longitude, setetLongitude] = useState('106.63201170907944');
    const [data, setData] = useState('');
    // const [query, setQuery] = useState('');
    const apiKey = 'fc8717a1263f8839cc3e4b9401f4524a'
  
    const [cityName, setCityName] = useState('');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude,);
                setetLongitude(position.coords.longitude);
                
            },
        );

        const fetchData = async () => {
            
            try{
                const result = await axios(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&daily&appid=${apiKey}`,
                    // `http://api.weatherapi.com/v1/current.json?lat=${latitude}&lon=${longitude}&key=11c359ed197e437dacc160317220207&q=Vietnam`
                );

                setData(result.data);
            }
            catch (error) {
                console.log(error.response);
            
                return error.response;
            }
        };
        fetchData();
      
        
    }, []);

    // console.log(data);


    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var getToday = today.getDate();

    return (
       <div className="weather-wrapper">
            <div className="weather">
                <div className='weather__top text-light text-center'>
                    <div className='weather__top--country-name mb-3'>
                        {
                            data ? 
                            <span className='font-32'>{data.timezone}</span>
                            : null

                        }
                    </div>
                    <div className='weather__top--deg mb-3'>
                        {
                            data.current ? 
                            <span className='font-65'>
                                {Math.floor(data.current.temp - 273.15)}&deg;C
                            </span>
                            :
                            null
                        }
                        
                    </div>
                    <div className='weather__top--status mb-5'>
                        { 
                            data.current ? 
                            <span className='font-22'>{data.current.weather[0].main}</span>
                            :
                            null
                        }
                    </div>
                </div>
                <div className='weather__bottom'>
                    <div className='weather__bottom--inday font-18'>
                        <ul>
                        { 
                            data.hourly ? 
                            <div className='aaa'>
                                {
                                    data.hourly.map((da, index) => {
                                        if(index < 5) {

                                        return(
                                            <li className='text-left' key={index}>
                                                <div className='time'>
                                                    {
                                                        (new Date(da.dt * 1000).getHours())
                                                    }:00
                                                </div>
                                                <div className='day-or-night'>
                                                    {/* <div className='day'></div> */}
                                                    <img src={`http://openweathermap.org/img/wn/${da.weather[0].icon}.png`} />
                                                    
                                                </div>
                                                <div className='deg'>
                                                <span className=''>
                                                    {Math.floor(da.temp - 273.15)}&deg;C
                                                </span>
                                                </div>
                                            </li>
                                        )
                                        }
                                    })
                                }
                            </div>
                                
                            : null
                        }
                            
                           
                        </ul>
                    </div>
                </div>
            </div> 
            <div className='weatherbyweek'>
                {
                    data.daily ?
                    data.daily.map((dailies, index) => {
                        if(index < 5){
                            return (
                                <div className='weatherbyweek__items'>
                                    <ul className='d-flex'>
                                        <li className='day font-22'>
                                        {   
                                            (new Date(dailies.dt * 1000).getDate()) === getToday ? 'Today' : days[(new Date(dailies.dt * 1000).getDay())]
                                        }
                                        </li>
                                        
                                        <li className='deg font-18'>
                                            <img src={`http://openweathermap.org/img/wn/${dailies.weather[0].icon}.png`} />
                                            <div className='min-max'>
                                                <span className='min'>
                                                {Math.floor(dailies.temp.min - 273.15)}&deg;C
                                                </span>
                                                /
                                                <span className='max'>
                                                {Math.floor(dailies.temp.max - 273.15)}&deg;C
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    })
                    :
                    null
                }
                
              
                
            </div>
       </div>
    )
}