import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";


export const CheckData = ({check}) => {

    // const [dataVal, setDataVal] = useState('');

    
    // const [dataChecked, setDataChecked] = useState('');
   

    // const hanleGetDataCheckbox = (e) => {
    //     const data = e.target.value
        
    //     setDataChecked((prev) => {
    //         const newData = [...prev, data]
    //         return newData
    //     });
    //     console.log(dataChecked);
    // }


    // console.log(dataChecked);

    // const dataCheck = {
    //     name: dataChecked
    // }
    
    // const [allCheck, setAllCheck] = useState('');

    // setAllCheck(prev => {
    //     const newChecked = [...prev, dataCheck]
    //     return newChecked
    // })

    const [tag, setTag] = useState([]);
    const hanleGetDataCheckbox = (e) => {
        if(e.target.checked){
            setTag((prev) => {
                const newTag = [...prev, e.target.value] 
                return newTag
            })
            // console.log(ne);

            // setTag([...tag, e.target.value])
        }
    }
    
    

    return (
        <div>
             <li>
                <FormControlLabel 
                control={<Checkbox onChange={hanleGetDataCheckbox}/>} 
                value={check.tag}
                
                label={
                    <div>
                        <img src={check.icon}/>
                        <span className="font-16 font-50 second-color">{check.name}</span>
                    </div>
                } 
                
                />
            </li>
        </div>
    )
}