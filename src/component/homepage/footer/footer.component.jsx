import './_footer.scss'

export const Footer = () => {
    return (
        <div className="footer-wrapper font-500 font-18">
            <div className="footer">
                <div className="footer__left">
                    <ul>
                        <li className="second-color">
                            find me in:
                        </li>
                        <li>
                            <img src="./img/fb.png" />
                        </li>
                        <li>
                            <img src="./img/tw.png" />
                        </li>
                    </ul>
                </div>

                <div className="footer__right second-color">
                    <ul>
                        <li>
                            @hhuynhdoan 
                        </li>
                        <li>
                         <img src="./img/git.png" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}