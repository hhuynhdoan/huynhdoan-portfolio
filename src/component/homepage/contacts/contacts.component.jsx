import React, { useRef, useState } from "react";
import './_contacts.scss';
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { useFormik } from "formik";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const Contacts = () => {


    const [isActive, setActive] = useState('false');

    const handleHiddenInCLick = (e) => {
        setActive(!isActive)
    }
    const [isActive2, setActive2] = useState('false');

    const handleHiddenInCLick2 = (e) => {
        setActive2(!isActive2)
    }


    // const {name, setName, email, setEmail, message, setMessage} = useBetween(shareInfo);
    

    const currentDate = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .min(2, "Mininum 2 characters")
              .max(15, "Maximum 15 characters")
              .required("Please fill your name!"),
            email: Yup.string()
              .email("Invalid email format")
              .required("Please fill your email!"),
            message: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(500, "Maximum 15 characters")
                .required("Please fill your message!"),
        }),
        // handleChange: (e) => {

        // },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
        }
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

 
    const infor = {
        name: name,
        email: email,
        message: message
    }
    // console.log(infor);
 

    const storeInfo = localStorage.getItem('info');
    const [info, setInfo] = useState(JSON.parse(storeInfo) ?? []);

    
    const [hidden, setHidden] = useState('false');

    const handleActive = () => {
        setHidden(!hidden);
    }
    
    const handleSubmit = (e) => {
        setInfo(prev => {
            const newInfo = [...prev, infor]
            const jsonJobs = JSON.stringify(newInfo)
            localStorage.setItem('info', jsonJobs)

            return newInfo
        })
        setInfo('')
    }


    const form = useRef();

    const handleSendMail = (e) => {
        emailjs.sendForm('service_yz2r1dj', 'template_vsn8wgq', form.current, 'B4j3HChh_0UTEoCOh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    

    return (
        <div className="contacts-wrapper">
            <div className="contacts">
                <div className="contacts__left">
                    <div className="contacts__left-sidebar">
                        <div className={isActive ? 'font-16 font-500 contacts__left-sidebar--title' : 'font-16 font-500 contacts__left-sidebar--title active'}>
                            <span>
                                <button onClick={handleHiddenInCLick}>
                                    contacts
                                </button>
                            </span>
                        </div>
                        <ul className={isActive ? "display-table font-16 font-500" : "d-none font-16 font-500"}>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/img/mail-icon.png"}/>
                                <a href="mailto:dntrh0425@gmail.com" className="second-color"> dntrh0425@gmail.com</a>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/img/phone-icon.png"}/> 
                                <a  href="tel:0940844291" className="second-color">0949844291</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts__left-sidebar">
                        <div className={isActive2 ? 'font-16 font-500 contacts__left-sidebar--title' : 'font-16 font-500 contacts__left-sidebar--title active'}>
                            <span>
                                <button onClick={handleHiddenInCLick2}>
                                    find-me-also-in
                                </button>
                            </span>
                        </div>
                        <ul className={isActive2 ? "display-table font-16 font-500" : "d-none font-16 font-500"}>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/img/redirect.png"}/>
                                <a href="https://www.linkedin.com/in/huynh-doan-246552191/" className="second-color">linkedin</a>
                            </li>
                           
                        </ul>
                    </div>
                    
                </div>
                <div className="contacts__content">
                    <div className="contacts__content-top">
                        <div className="tag">
                            <span className="font-16 font-500 second-color">
                                contacts
                            </span>
                        </div>
                        
                    </div>
                    <div className="contacts__content-content">
                        <div className="left">
                            {/* <ContactForm/> */}
                            {/* <Thankiu></Thankiu> */}
                            <div className={hidden ? "display-form" : "display-form d-none"}>
                            <form onSubmit={formik.handleSubmit} ref={form}>
                                <div className="form-contact">
                                    <label className="font-18 font-500 second-color">
                                        _name: <br/>
                                        <input 
                                            type="text" 
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                formik.handleChange(e);
                                            }}
                                            name="name"
                                            value={formik.values.name}
                                            placeholder={(info.length !== 0) ? info[info.length - 1].name : "Your name"}
                                            
                                        />
                                        {formik.errors.name && formik.touched.name && (
                                            <p>{formik.errors.name}</p>
                                        )}
                                    </label>
                                    <br/>
                                    <label className="font-18 font-500 second-color">
                                        _email:
                                        <br/>
                                        <input 
                                            type="text" 
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                formik.handleChange(e);
                                            }}
                                            name="email"
                                            value={formik.values.email}
                                            placeholder={(info.length !== 0) ? info[info.length - 1].email : "Your email"}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <p>{formik.errors.email}</p>
                                        )}
                                    </label>
                                    <br/>
                                    <label className="font-18 font-500 second-color">
                                        _message:
                                        <br/>
                                        <textarea 
                                            rows="4" 
                                            onChange={(e) => {
                                                setMessage(e.target.value);
                                                formik.handleChange(e);
                                            }}
                                            name="message"
                                            value={formik.values.message}
                                            placeholder={(info.length !== 0) ? info[info.length - 1].message : "Your message"}
                                        />
                                        {formik.errors.message && formik.touched.message && (
                                            <p>{formik.errors.message}</p>
                                        )}
                                    </label>
                                    <button type="submit" onClick={(e) => {
                                        if(!name & !message && !email){
                                            // if(handleSendMail){
                                            //     handleActive();
                                            // }
                                            handleSubmit();
                                            // handleActive();
                                            // handleSendMail();
                                        }
                                        else{
                                            handleSubmit();
                                            handleActive();
                                            handleSendMail();
                                        }
                                    }}>
                                        submit-message
                                    </button>
                                </div>
                            </form>
                            </div>
                            <div className={hidden ? "thankiu-wrapper d-none" : "thankiu-wrapper"}>
                                <div className="thankiu">
                                    <h1>Thank you! 🤘</h1>
                                    <p className="font-18 font-500 second-color">Your message has been accepted. You will recieve answer really soon!</p>
                                    <button 
                                        onClick={() => window.location.reload()}
                                    >
                                        send-new-message
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="render-from-form">
                                <ol className="font-18 font-500">
                                    <li>
                                        <span className="text-purple">
                                            const 
                                        </span>
                                        <span> </span>
                                        <span className="text-violet">
                                            button
                                        </span>
                                        <span className="text-purple"> = </span>
                                        <span className="text-violet">
                                            document.querySelector
                                        </span>
                                        <span className="text-orange">
                                            ('#sendBtn');
                                        </span>
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="text-purple">
                                            const 
                                        </span>
                                        <span> </span>
                                        <span className="text-violet">
                                            message 
                                        </span>
                                        <span> </span>
                                        <span className="text-purple">
                                            = 
                                        </span>
                                        <span> </span>
                                            &#123;	
                                    </li>
                                    <li className="const">
                                        <span className="text-violet">
                                            name: 
                                        </span>
                                        <span> </span>
                                        <span className="text-orange">
	                                        "
                                            {/* {nameE} */}
                                            {/* {console.log(info[0].name)} */}
                                            {(info.length !== 0) ? info[info.length - 1].name : name}
                                            {/* {() => {
                                                if(info.length > 1){
                                                    return info[info.length - 1].name
                                                }
                                                else{
                                                   return name
                                                }
                                            }} */}
                                            " 
                                        </span>
                                            ,      
                                    </li>
                                    <li className="const">
                                        <span className="text-violet">
                                            email: 
                                        </span>
                                        <span> </span>
                                        <span className="text-orange">
	                                        "
                                            {(info.length !== 0) ? info[info.length - 1].email : email}
                                            " 
                                        </span>
                                            ,      
                                    </li>
                                    <li className="const">
                                        <span className="text-violet">
                                            message: 
                                        </span>
                                        <span> </span>
                                        <span className="text-orange">
	                                        "
                                            {(info.length !== 0) ? info[info.length - 1].message : message}
                                            " 
                                        </span>
                                            ,      
                                    </li>
                                    <li className="const">
                                        <span >
                                            date: 
                                        </span>
                                        <span> </span>
                                        <span className="text-orange">
                                            "
                                            {currentDate.toLocaleDateString('en-us', options)}
                                            "  
                                        </span>
                                    </li>
                                    <li>
                                        &#125;	
                                    </li>
                                    <li></li>
                                    <li>
                                        <span className="text-purple">
                                            button.addEventListener(
                                        </span>
                                        <span className="text-orange">
                                        'click'
                                        </span>
                                        , () 
                                        <span> </span>
                                        <span>
                                        =&#62; 
                                        <span> </span>
                                        </span>
                                            &#123;
                                    </li>
                                    <li className="const">
                                        <span className="text-violet">
	                                    form.send
                                        </span>
                                        (
                                        <span className="text-violet">
                                        message    
                                        </span>
                                        );
                                    </li>
                                    <li>
                                        &#125;)
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}