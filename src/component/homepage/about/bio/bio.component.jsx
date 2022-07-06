import styled from "@emotion/styled";
import React from "react";
import { Snippet } from "../codesnippet.component";
import { Icon } from "../icon.component";
import { Intro } from "../intro.component";
import { MultiLevelMenu } from "../sidebar/sidebar.component";
import { SideBar } from "../sidebarmain.component";
import { Weather } from "./weather/weather.component";
import '../_about.scss';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';



export const Bio = () => {
    

    return (
        <div className="about_wrapper">
            <div className="about">
                <div className="about__icon">
                   <Icon/>
                </div>
                <div className="about__content">
                    <div className="sidebar">
                        <SideBar/>
                    </div>
                    <div className="main">
                        <div className="main__top">
                            <div className="tag-left">
                                <span className="second-color">
                                    About me
                                </span>
                            </div>
                            <div className="tag-right">

                            </div>
                        </div>
                        <div className="main__content">
                            <Intro/>
                            <div className="main__content-right">
                            <Weather/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}