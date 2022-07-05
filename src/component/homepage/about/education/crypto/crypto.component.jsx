import { useEffect, useState } from "react"
import axios from 'axios';


export const Crypto = () => {
    
    const [data, setData] = useState('');

    useEffect(() => {

        const fetchData = async () => {
            
            try{
                const result = await axios(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
                );

                setData(result.data);
            }
            catch (error) {
                console.log(error.response);
            
                return error.response;
            }
            // setInterval(() => {
            //     fetchData();
            // }, 500);
        };
        fetchData();
      
        
    }, []);
    // console.log(data);
   
    

    return (
       <div className="crypto-wrapper">
            <div className="crypto">
                {data ?
                    <div>
                    {
                        data.map((coin, index) => {
                            return (
                                <div className="crypto__items" key={index}>
                                    <ul>
                                        <li className="crypto-name">
                                            <img src={coin.image} />
                                            <span className="font-16">{coin.name}</span> 
                                            <span className="text-uppercase font-16">
                                                ({coin.symbol})
                                            </span>
                                        </li>
                                        {/* <li className="crypto-c">
                                            <span className="font-18 text-uppercase">{coin.symbol}</span>
                                        </li> */}
                                        <li className="change">
                                            {
                                                (coin.price_change_percentage_24h > 0) ?
                                                <span className="font-16 incr">
                                                    +{coin.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                                :
                                                <span className="font-16 decr">
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            }   
                                            
                                        </li>
                                        <li className="price">
                                            <span className="font-16">
                                                ${coin.current_price.toLocaleString()}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            )
                            
                        })
                    }
                    </div>
                    
                    : 
                    null
                }
                
               
            </div>
       </div>
    )
}