import './_footer.scss'

export const Footer = () => {
    return (
        <div className="footer-wrapper font-500 font-18">
            <div className="footer">
                <div className="footer__left">
                    <ul>
                        {/* <li className="second-color">
                            My cv
                        </li> */}
                        <li className='second-color'>
                            <a href='#' download>
                            My cv
                            <img src="./img/redirect.png"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__right second-color">
                    <ul>
                        <li>
                            <a href='https://github.com/hhuynhdoan'>
                                @hhuynhdoan 
                            </a>
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