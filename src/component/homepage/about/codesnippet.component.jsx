
export const Snippet = () => {
    return (
        <div className="main__content-right">
            <p className="font-18 font-500 second-color">// Code snippet showcase:</p>
            <div className="code-snippet">
                <div className="code-snippet__items">
                    <div className="code-snippet__items-top">
                        <div className="user">
                            <div className="user__avt">
                                <img src="./img/pj1.png" />
                            </div>
                            <div className="user__name">
                                <span className="text-violet font-16 font-500">
                                    @huynhdoan
                                </span>
                                <span className="font-14 second-color">
                                    Created 5 months ago
                                </span>
                            </div>
                        </div>
                        <div className="star">
                            <div className="detail">
                                <img src="./img/detail.png"/>
                                <span className="font-15 second-color">details</span>
                            </div>
                            <div className="starts">
                                <img src="./img/star.png"/>
                                <span className="font-15 second-color">starts</span>
                            </div>
                        </div>
                    </div>
                    <div className="code-snippet__items-content">
                        {/* <div className="text">
                        
                        
                        </div> */}
                        <img src="./img/snippet.png" />
                    </div>
                </div>
                <div className="code-snippet__items">
                    <div className="code-snippet__items-top">
                        <div className="user">
                            <div className="user__avt">
                                <img src="./img/pj1.png" />
                            </div>
                            <div className="user__name">
                                <span className="text-violet font-16 font-500">
                                    @huynhdoan
                                </span>
                                <span className="font-14 second-color">
                                    Created 5 months ago
                                </span>
                            </div>
                        </div>
                        <div className="star">
                            <div className="detail">
                                <img src="./img/detail.png"/>
                                <span className="font-15 second-color">details</span>
                            </div>
                            <div className="starts">
                                <img src="./img/star.png"/>
                                <span className="font-15 second-color">starts</span>
                            </div>
                        </div>
                    </div>
                    <div className="code-snippet__items-content">
                        {/* <div className="text">
                        
                        
                        </div> */}
                        <img src="./img/snippet.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}