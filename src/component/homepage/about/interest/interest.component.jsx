import styled from "@emotion/styled";
import React from "react";
import { Snippet } from "../codesnippet.component";
import { Icon } from "../icon.component";
import { Intro } from "../intro.component";
import { MultiLevelMenu } from "../sidebar/sidebar.component";
import { SideBar } from "../sidebarmain.component";


export const Interest = () => {
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
                                    interest
                                </span>
                            </div>
                            <div className="tag-right">

                            </div>
                        </div>
                        <div className="main__content">
                            <Intro/>
                            <div className="main__content-right"></div>
                            {/* <Snippet/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}