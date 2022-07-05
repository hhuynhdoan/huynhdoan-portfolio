import { useEffect, useState } from "react";
import { Item } from "../item/item.component"

export const ProjectItems = ({data, tagName, checkdata, valueInput}) => {

    
  

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if(tagName.length === 0) {
            setFilterData(data)
        }
        else{
            setFilterData(
                data.filter(movies =>
                    tagName.every(category => [movies.tag].flat().includes(category))
                )
            )
        }
    }, [tagName])
    
    const getFieldSearch =  data.filter((dataList) => {

        const dataName = dataList.name.replaceAll(' ', '_');
        const dataValue = valueInput.replaceAll(' ', '_');
        // console.log(dataName, dataValue);

        return dataName.toLowerCase().includes(dataValue.toLowerCase())
    })


    // console.log(tagName);
    // console.log(getFieldSearch[0].name);

    return (
        <div className="project__content-content">
        {   
            filterData.map(dataItem => {
                return <Item dataItem={dataItem} key={dataItem.id}/>
            }) 
        }
        </div>

    )
}