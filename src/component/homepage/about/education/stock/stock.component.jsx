import { useEffect, useState } from "react"
import axios from 'axios';
import { TextField } from "@mui/material";



export const Stock = () => {

    const [data, setData] = useState('');
    const [change, setChange] = useState('');

  
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios ('https://banggia.cafef.vn/stockhandler.ashx?index=true');

                setData(res.data)
            }
            catch (error) {
                console.log(error.response);
            
                return error.response;
            }
            fetchData();
            // setTimeout(() => {
            //     // setChange(!change);
            // }, 1000);
        
        }
        fetchData();
        // setInterval(() => {
        //     setChange(!change)
        // }, 500);
    }, [])


    // const handleChangeText = (e) => {
    //     setChange(!change)
    // }
   

    // setTimeout(hanedleChangeApi, 1000, 100);

    // console.log(data);
    return (
        <div className='stock-wrapper'>
            <div className='stock'>
                {
                    data ?
                        <div>
                            {
                                data.map((stock, index) => {
                                    return(
                                        <div className='stock__items' key={index}>
                                            <ul className='d-flex'>
                                                <li className='name'>
                                                    <div className='name-details'>
                                                        <span className='font-22 text-uppercase '>
                                                            {stock.name}
                                                        </span>
                                                    </div>
                                                    <div className={change ? 'liquidity font-18' : 'liquidity font-18'}>
                                                            
                                                        {stock.volume}
                                                    </div>
                                                </li>
                                                <li className='index'>
                                                    <div className='index-sum'>
                                                        {
                                                            stock.change > 0 ?
                                                                <span className={ !change ? 'font-22 font-500 incr' : 'font-22 font-500 incr' }>
                                                                {stock.index}
                                                                </span>
                                                            :
                                                                <span className={ !change ? 'font-22 font-500 decr' : 'font-22 font-500 decr' }>
                                                                    {stock.index}
                                                                </span>
                                                        }
                                                    </div>
                                                    <div className='change'>
                                                        <ul>
                                                            {
                                                                stock.change > 0 ? 
                                                                <li className='num incr'>
                                                                +{stock.change}
                                                                </li>
                                                                :
                                                                <li className='num decr'>
                                                                {stock.change}
                                                                 </li>
                                                            }
                                                           
                                                            {
                                                                stock.percent > 0 ? 
                                                                <li className='incr'>
                                                                +{stock.percent}%
                                                                </li>
                                                                :
                                                                <li className='decr'>
                                                                {stock.percent}%
                                                                 </li>
                                                            }
                                                            
                                                        </ul>
                                                    </div>
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