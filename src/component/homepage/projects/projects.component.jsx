import { Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import { CheckData } from "./checkbox.component";
import { Items, ProjectItems } from "./project-items/items.component";
import './_project.scss'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Project = () => {

    const checkdata = [
        {
            id : '1',
            name : "ReactJS",
            tag : "react",
            icon : "./img/react.png"
        },
        {
            id : '2',
            name : "HTML",
            tag: "html",
            icon: "./img/html.png"
        },
        {
            id : '3',
            name : "SASS",
            tag : "sass",
            icon : "./img/css.png"
        },
        {
            id : '4',
            name : "Laravel",
            tag : "laravel",
            icon : "./img/react.png"
        },
        {
            id : '5',
            name : "Jquery",
            tag : "jquery",
            icon : "./img/html.png"
        },
        // {
        //     id : '6',
        //     name : "JS",
        //     tag : "js",
        //     icon : "./img/html.png"
        // },
        {
            id : '7',
            name : "Ajax",
            tag : "ajax",
            icon : "./img/html.png"
        },
        {
            id : '8',
            name : "Wordpress",
            tag : "wordpress",
            icon : "./img/html.png"
        },
        
    ]
    const data=[
        {
            id: "1",
            name: "Refa",
            desc : "Ecommerce",
            link: "https://refa.com.vn/",
            img: "./img/pj1.png",
            tag: ["html", "sass", "laravel", "jquery", "js", "ajax"]
            
        },
        {
            id: "2",
            name: "Eurowindow Riverpark",
            desc : "Wordpress",
            link: "https://eurowindowriverpark.com/",
            img: "./img/pj1.png",
            tag: ["html", "sass", "jquery", "js", "wordpress"]
            
        },
        {
            id: "3",
            name: "Thacogroup",
            desc : "Blog",
            link: "https://thacogroup.vn/",
            img: "./img/pj1.png",
            tag: ["html", "sass", "laravel", "jquery", "js", "ajax"]
            
        },
        {
            id: "4",
            name: "BMW",
            desc : "Microsite",
            link: "https://bmw.dev.fsofts.com/",
            img: "./img/pj1.png",
            tag: ["html", "sass", "laravel", "jquery", "js", "ajax"]
            
        },
        {
            id: "5",
            name: "Porfolio",
            desc : "Personal Project",
            link: "",
            img: "./img/pj1.png",
            tag: ["html", "sass", "react"]
            
        },
    ];

    const [valueInput, setValueInput] = useState('');

    const handleSearchField = (e) => {
      setValueInput(e.target.value);
    } 

    const [tagName, setTagName] = useState([]);
    
    const hanleGetDataCheckbox = (e) => {
        if(e.target.checked){
            const data = e.target.value
            setTagName((prev) => {
                const newTag = [...prev, data] 
                return newTag
            })
        }
        else {
            setTagName(tagName.filter(id => id !== e.target.value));
        }
    }
    // console.log(valueInput);

    
    return (
        <div className="project-wrapper">
            <div className="project">
                <div className="project__filter">
                    <div className="project__filter-title">
                        <span className="second-color">projects</span>
                    </div>
                    <div className="project__filter-items">
                    <FormControl>
                        <FormGroup> 
                            <ul>
                                <li>
                                    {checkdata.map((data, index) => (
                                        <FormControlLabel 
                                        control={<Checkbox onChange={hanleGetDataCheckbox}/>} 
                                        value={data.tag}
                                        key={index}
                                        label={
                                            <div>
                                                <img src={data.icon}/>
                                                <span className="font-16 font-50 second-color">{data.name}</span>
                                            </div>
                                        } 
                                        />
                                    ))}
                                </li>
                            </ul>
                        </FormGroup>
                    </FormControl>
                    </div>
                </div>
                
                <div className="project__content">
                    <div className="project__content-top">
                        <div className="tag">
                            <span className="font-16 font-500 second-color">
                                <TextField value={tagName} fullWidth onChange={hanleGetDataCheckbox} />
                            </span>
                        </div>
                    </div>
                    {/* <div className="search-field">
                    <form>
                        <div className="input">
                            <input 
                                type="search" 
                                name="name" 
                                placeholder="Input project name.."
                                onChange={handleSearchField}
                            />
                        </div>
                    </form>
                    </div> */}
                        <ProjectItems data={data} valueInput={valueInput} tagName={tagName} checkdata = {checkdata} />
                </div>
            </div>
        </div>
    )
}